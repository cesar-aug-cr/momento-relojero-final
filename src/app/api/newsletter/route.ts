import { NextRequest, NextResponse } from 'next/server'
import { fullNewsletterSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate with Zod
    const validatedData = fullNewsletterSchema.parse(body)

    // Here you would typically:
    // 1. Save to your database
    // 2. Send to email service provider (Resend, SendGrid, etc.)
    // 3. Add to marketing automation

    // For now, we'll just log and return success
    console.log('Newsletter subscription:', {
      email: validatedData.email,
      firstName: validatedData.firstName,
      interests: validatedData.interests,
      experienceLevel: validatedData.experienceLevel,
      timestamp: new Date().toISOString(),
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: {
          email: validatedData.email,
          firstName: validatedData.firstName,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.issues,
        },
        { status: 400 }
      )
    }

    console.error('Newsletter API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}
