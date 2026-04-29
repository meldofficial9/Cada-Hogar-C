import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabaseAdmin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        {error: 'Supabase admin client is not configured correctly.'},
        {status: 500}
      );
    }

    const formData = await req.formData();

    const password = String(formData.get('password') || '');
    const title = String(formData.get('title') || '').trim();
    const description = String(formData.get('description') || '').trim();
    const locale = String(formData.get('locale') || 'en');

    const file = formData.get('file') as File | null;
    const cover = formData.get('cover') as File | null;

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
    if (!cover || cover.size === 0) {
  return NextResponse.json(
    {error: 'Cover image was not received by the server.'},
    {status: 400}
  );
}

    let coverUrl = '';
    let coverPath = '';

    if (cover && cover.size > 0) {
      if (!cover.type.startsWith('image/')) {
        return NextResponse.json(
          {error: 'Cover must be an image file.'},
          {status: 400}
        );
      }

      const coverBytes = await cover.arrayBuffer();
      const coverBuffer = Buffer.from(coverBytes);

      const safeCoverName = cover.name
        .replace(/[^a-zA-Z0-9.\-_]/g, '-')
        .toLowerCase();

      coverPath = `${locale}/covers/${Date.now()}-${safeCoverName}`;

      const {error: coverUploadError} = await supabaseAdmin.storage
        .from('resources')
        .upload(coverPath, coverBuffer, {
          contentType: cover.type,
          upsert: false
        });

      if (coverUploadError) {
        return NextResponse.json(
          {error: `Cover upload failed: ${coverUploadError.message}`},
          {status: 500}
        );
      }

      const {data: coverPublicUrlData} = supabaseAdmin.storage
        .from('resources')
        .getPublicUrl(coverPath);

      coverUrl = coverPublicUrlData.publicUrl;
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
        public_url: publicUrl,
        cover_url: coverUrl || null,
        cover_path: coverPath || null
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
      publicUrl,
      coverUrl
    });
  } catch (error) {
    console.error('Upload route error:', error);

    return NextResponse.json(
      {error: 'Unexpected server error during upload.'},
      {status: 500}
    );
  }
}
