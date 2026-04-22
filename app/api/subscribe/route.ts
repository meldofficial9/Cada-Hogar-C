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
    const email = String(body.email || '').trim().toLowerCase();
    const locale = String(body.locale || 'en').trim();

    if (!email) {
      return NextResponse.json(
        {error: 'Email is required.'},
        {status: 400}
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {error: 'Please enter a valid email.'},
        {status: 400}
      );
    }

    const {error} = await supabaseAdmin
      .from('subscribers')
      .insert({email, locale});

    if (error) {
      if (error.message.toLowerCase().includes('duplicate')) {
        return NextResponse.json(
          {error: 'This email is already subscribed.'},
          {status: 409}
        );
      }

      return NextResponse.json(
        {error: `Database insert failed: ${error.message}`},
        {status: 500}
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully.'
    });
  } catch (error) {
    console.error('Subscribe route error:', error);

    return NextResponse.json(
      {error: 'Unexpected server error.'},
      {status: 500}
    );
  }
}
