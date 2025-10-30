import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types (to be generated after creating tables)
export interface User {
  id: string
  email: string
  full_name: string
  created_at: string
  updated_at: string
}

export interface Investment {
  id: string
  user_id: string
  amount: number
  stage: number
  status: 'pending' | 'active' | 'completed'
  created_at: string
  updated_at: string
}

export interface Referral {
  id: string
  referrer_id: string
  referee_id: string
  reward_amount: number
  status: 'pending' | 'paid'
  created_at: string
}

export interface Transaction {
  id: string
  user_id: string
  type: 'deposit' | 'withdrawal' | 'profit' | 'referral'
  amount: number
  status: 'pending' | 'completed' | 'failed'
  transaction_hash?: string
  created_at: string
  updated_at: string
}
