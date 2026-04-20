import {NextResponse} from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    return NextResponse.json({
      success: true,
      received: {
        title: String(formData.get('title') || ''),
        description: String(formData.get('description') || ''),
        locale: String(formData.get('locale') || ''),
        passwordPresent: Boolean(formData.get('password')),
        filePresent: Boolean(formData.get('file'))
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      {status: 500}
    );
  }
}
