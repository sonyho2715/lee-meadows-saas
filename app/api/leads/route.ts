import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerClient, type LeadInsert } from '@/lib/supabase'

// Validation schema for lead submission
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  source: z.enum(['booking_form', 'popup', 'footer', 'other']).default('booking_form'),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validated = leadSchema.parse(body)

    // Get client info
    const forwarded = request.headers.get('x-forwarded-for')
    const ip_address = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    const user_agent = request.headers.get('user-agent') || 'unknown'

    // Prepare lead data
    const leadData: LeadInsert = {
      name: validated.name,
      email: validated.email.toLowerCase(),
      phone: validated.phone,
      source: validated.source,
      status: 'new',
      utm_source: validated.utm_source,
      utm_medium: validated.utm_medium,
      utm_campaign: validated.utm_campaign,
      ip_address,
      user_agent,
    }

    // Insert into Supabase
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('leads')
      .insert(leadData)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)

      // Check for duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { success: false, error: 'This email has already been registered' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { success: false, error: 'Failed to save your information' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will be in touch soon.',
      data: { id: data.id }
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input',
          details: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
        },
        { status: 400 }
      )
    }

    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to check if email exists (for form validation)
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { success: false, error: 'Email is required' },
      { status: 400 }
    )
  }

  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('leads')
    .select('id')
    .eq('email', email.toLowerCase())
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Supabase error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to check email' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    exists: !!data
  })
}
