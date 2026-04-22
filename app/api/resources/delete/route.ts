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

    const body = await req.json();

    const password = String(body.password || '');
    const id = String(body.id || '');
    const filePath = String(body.filePath || '');

    if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!id || !filePath) {
      return NextResponse.json(
        {error: 'Resource id and file path are required.'},
        {status: 400}
      );
    }

    const {error: storageError} = await supabaseAdmin.storage
      .from('resources')
      .remove([filePath]);

    if (storageError) {
      return NextResponse.json(
        {error: `Storage delete failed: ${storageError.message}`},
        {status: 500}
      );
    }

    const {error: dbError} = await supabaseAdmin
      .from('resources')
      .delete()
      .eq('id', id);

    if (dbError) {
      return NextResponse.json(
        {error: `Database delete failed: ${dbError.message}`},
        {status: 500}
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Resource deleted successfully.'
    });
  } catch (error) {
    console.error('Delete route error:', error);

    return NextResponse.json(
      {error: 'Unexpected server error during delete.'},
      {status: 500}
    );
  }
}
