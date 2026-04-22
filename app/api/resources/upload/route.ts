import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        {error: 'Supabase admin client is not configured.'},
        {status: 500}
      );
    }

    const formData = await req.formData();

    const password = formData.get('password')?.toString() || '';
    const title = formData.get('title')?.toString().trim() || '';
    const description = formData.get('description')?.toString().trim() || '';
    const locale = formData.get('locale')?.toString() || 'en';
    const file = formData.get('file') as File | null;

    if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!title) {
      return NextResponse.json({error: 'Title is required.'}, {status: 400});
    }

    if (!file) {
      return NextResponse.json({error: 'PDF file is required.'}, {status: 400});
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        {error: 'Only PDF files are allowed.'},
        {status: 400}
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeFileName = file.name
      .replace(/[^a-zA-Z0-9.\-_]/g, '-')
      .toLowerCase();

    const filePath = `${locale}/${Date.now()}-${safeFileName}`;

    const {error: uploadError} = await supabaseAdmin.storage
      .from('resources')
      .upload(filePath, buffer, {
        contentType: 'application/pdf',
        upsert: false
      });

    if (uploadError) {
      return NextResponse.json(
        {error: `Storage upload failed: ${uploadError.message}`},
        {status: 500}
      );
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
        locale,
        file_path: filePath,
        public_url: publicUrl
      });

    if (insertError) {
      return NextResponse.json(
        {error: `Database insert failed: ${insertError.message}`},
        {status: 500}
      );
    }

    return NextResponse.json({
      success: true,
      message: 'PDF uploaded successfully.',
      publicUrl
    });
  } catch (error) {
    console.error('Upload route error:', error);
    return NextResponse.json(
      {error: 'Unexpected server error during upload.'},
      {status: 500}
    );
  }
}
