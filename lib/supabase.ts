import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy-loaded client singleton for client-side usage
let supabaseClient: SupabaseClient | null = null

export const getSupabase = () => {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables')
    }

    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseClient
}

// For backwards compatibility
export const supabase = typeof window !== 'undefined' ? getSupabase() : null!

// Server-side client with service role (for API routes)
export const createServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase server environment variables')
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}

// ============================================
// Database Types for Abundant Blessing AI
// ============================================

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  source: 'booking_form' | 'popup' | 'footer' | 'other'
  status: 'new' | 'contacted' | 'qualified' | 'booked' | 'converted' | 'lost'
  notes?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

export interface PageView {
  id: string
  page_path: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  ip_address?: string
  user_agent?: string
  created_at: string
}

// Type for inserting a new lead (without auto-generated fields)
export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at'>

// Type for updating a lead
export type LeadUpdate = Partial<Omit<Lead, 'id' | 'created_at'>>
