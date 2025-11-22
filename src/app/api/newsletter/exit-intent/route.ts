import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ExitIntentSchema = z.object({
  email: z.string().email('Invalid email address'),
  lang: z.string().optional().default('es'),
  source: z.string().optional().default('exit_intent'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = ExitIntentSchema.parse(body);

    // Log the exit intent capture (in production, save to database)
    console.log('[Exit Intent Capture]', {
      email: validatedData.email,
      lang: validatedData.lang,
      source: validatedData.source,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
    });

    // In production, you would:
    // 1. Save to database with source tracking
    // 2. Send welcome email with free guide
    // 3. Add to email marketing service (e.g., Resend, SendGrid)
    // 4. Tag as 'exit_intent' subscriber for segmentation

    // Example database save (pseudo-code):
    // await db.emailCapture.create({
    //   data: {
    //     email: validatedData.email,
    //     source: validatedData.source,
    //     lang: validatedData.lang,
    //     status: 'pending_confirmation',
    //     capturedAt: new Date(),
    //     metadata: {
    //       userAgent: request.headers.get('user-agent'),
    //       referer: request.headers.get('referer'),
    //     },
    //   },
    // });

    // Example email service integration (pseudo-code):
    // await sendEmail({
    //   to: validatedData.email,
    //   template: 'exit-intent-welcome',
    //   data: {
    //     lang: validatedData.lang,
    //     downloadLink: 'https://example.com/guides/essential-watches.pdf',
    //   },
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Email captured successfully',
        data: {
          email: validatedData.email,
          lang: validatedData.lang,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('[Exit Intent API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
