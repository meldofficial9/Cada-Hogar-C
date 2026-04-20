import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const password = String(formData.get('password') || '');
    const title = String(formData.get('title') || '');
    const description = String(formData.get('description') || '');
    const locale = String(formData.get('locale') || 'en');
    const file = formData.get('file');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const adminPassword = process.env.ADMIN_UPLOAD_PASSWORD;

    if (!supabaseUrl || !/^https?:\/\//.test(supabaseUrl)) {
      return NextResponse.json(
        {error: 'NEXT_PUBLIC_SUPABASE_URL is missing or invalid'},
        {status: 500}
      );
    }

    if (!serviceRoleKey) {
      return NextResponse.json(
        {error: 'SUPABASE_SERVICE_ROLE_KEY is missing'},
        {status: 500}
      );
    }

    if (!adminPassword) {
      return NextResponse.json(
        {error: 'ADMIN_UPLOAD_PASSWORD is missing'},
        {status: 500}
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!title) {
      return NextResponse.json({error: 'Title is required'}, {status: 400});
    }

    if (!(file instanceof File)) {
      return NextResponse.json({error: 'File is required'}, {status: 400});
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        {error: 'Only PDF files are allowed'},
        {status: 400}
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
    const filePath = `${locale}/${Date.now()}-${safeName}`;

    const {error: uploadError} = await supabaseAdmin.storage
      .from('resources')
      .upload(filePath, buffer, {
        contentType: 'application/pdf',
        upsert: false
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json({error: uploadError.message}, {status: 500});
    }

    const {
      data: {publicUrl}
    } = supabaseAdmin.storage.from('resources').getPublicUrl(filePath);

    const {error: insertError} = await supabaseAdmin.from('resources').insert({
      title,
      description,
      file_path: filePath,
      public_url: publicUrl,
      locale
    });

    if (insertError) {
      console.error('DB insert error:', insertError);
      return NextResponse.json({error: insertError.message}, {status: 500});
    }

    return NextResponse.json({success: true, publicUrl}, {status: 200});
  } catch (error) {
    console.error('Upload route fatal error:', error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Unexpected upload failure'
      },
      {status: 500}
    );
  }
}
