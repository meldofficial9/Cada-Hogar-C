import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const password = formData.get('password')?.toString() || '';
    const title = formData.get('title')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const locale = formData.get('locale')?.toString() || 'en';
    const file = formData.get('file') as File | null;

    if (!supabaseAdmin) {
      return NextResponse.json(
        {error: 'Supabase admin client is not configured'},
        {status: 500}
      );
    }

    if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!title || !file) {
      return NextResponse.json(
        {error: 'Title and file are required'},
        {status: 400}
      );
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        {error: 'Only PDF files are allowed'},
        {status: 400}
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeName = file.name.replace(/\s+/g, '-').toLowerCase();
    const filePath = `${Date.now()}-${safeName}`;

    const {error: uploadError} = await supabaseAdmin.storage
      .from('resources')
      .upload(filePath, buffer, {
        contentType: 'application/pdf',
        upsert: false
      });

    if (uploadError) {
      return NextResponse.json({error: uploadError.message}, {status: 500});
    }

    const {data: publicUrlData} = supabaseAdmin.storage
      .from('resources')
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;

    const {error: insertError} = await supabaseAdmin
      .from('resources')
      .insert({
        title,
        description,
        file_path: filePath,
        public_url: publicUrl,
        locale
      });

    if (insertError) {
      return NextResponse.json({error: insertError.message}, {status: 500});
    }

    return NextResponse.json({
      success: true,
      publicUrl
    });
  } catch (error) {
    console.error('Upload route error:', error);

    return NextResponse.json(
      {error: 'Upload failed'},
      {status: 500}
    );
  }
}
