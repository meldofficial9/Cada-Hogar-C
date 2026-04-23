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
    const title = String(body.title || '').trim();
    const event_date = String(body.event_date || '').trim();
    const event_time = String(body.event_time || '').trim();
    const location = String(body.location || '').trim();
    const description = String(body.description || '').trim();
    const audience = String(body.audience || 'gocuba').trim();

    const savedPassword = String(process.env.ADMIN_UPLOAD_PASSWORD || '').trim();

    if (password !== savedPassword) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    if (!title || !event_date) {
      return NextResponse.json(
        {error: 'Title and event date are required.'},
        {status: 400}
      );
    }

    const {error} = await supabaseAdmin.from('events').insert({
      title,
      event_date,
      event_time,
      location,
      description,
      audience
    });

    if (error) {
      return NextResponse.json(
        {error: `Database insert failed: ${error.message}`},
        {status: 500}
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Event created successfully.'
    });
  } catch (error) {
    console.error('Create event route error:', error);
    return NextResponse.json(
      {error: 'Unexpected server error.'},
      {status: 500}
    );
  }
}
