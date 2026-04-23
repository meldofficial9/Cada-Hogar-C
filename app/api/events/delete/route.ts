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

    const password = String(body.password || '').trim();
    const id = String(body.id || '').trim();
    const savedPassword = String(process.env.ADMIN_UPLOAD_PASSWORD || '').trim();

    if (password !== savedPassword) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!id) {
      return NextResponse.json(
        {error: 'Event id is required.'},
        {status: 400}
      );
    }

    const {error} = await supabaseAdmin.from('events').delete().eq('id', id);

    if (error) {
      return NextResponse.json(
        {error: `Database delete failed: ${error.message}`},
        {status: 500}
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully.'
    });
  } catch (error) {
    console.error('Delete event route error:', error);
    return NextResponse.json(
      {error: 'Unexpected server error.'},
      {status: 500}
    );
  }
}
