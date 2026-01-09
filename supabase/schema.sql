-- ============================================
-- Abundant Blessing AI - Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- LEADS TABLE
-- Stores booking form submissions
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'booking_form' CHECK (source IN ('booking_form', 'popup', 'footer', 'other')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'booked', 'converted', 'lost')),
  notes TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create unique index on email to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS leads_email_unique ON leads (LOWER(email));

-- Create index for status filtering
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);

-- Create index for date filtering
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- ============================================
-- PAGE VIEWS TABLE (Optional - for analytics)
-- ============================================
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path TEXT NOT NULL,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS page_views_path_idx ON page_views (page_path);
CREATE INDEX IF NOT EXISTS page_views_created_at_idx ON page_views (created_at DESC);

-- ============================================
-- AUTO-UPDATE TRIGGER FOR updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Service role full access
CREATE POLICY "Service role has full access to leads"
  ON leads FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to page_views"
  ON page_views FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Anyone can insert (for forms)
CREATE POLICY "Anyone can submit leads"
  ON leads FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can track page views"
  ON page_views FOR INSERT WITH CHECK (true);

-- ============================================
-- HELPFUL VIEWS
-- ============================================
CREATE OR REPLACE VIEW daily_lead_stats AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
  COUNT(CASE WHEN status = 'booked' THEN 1 END) as booked_leads,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads
FROM leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

CREATE OR REPLACE VIEW lead_sources AS
SELECT
  COALESCE(utm_source, 'direct') as source,
  COUNT(*) as total,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as conversions
FROM leads
GROUP BY COALESCE(utm_source, 'direct')
ORDER BY total DESC;

-- ============================================
-- GRANT PERMISSIONS
-- ============================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT ON leads TO anon;
GRANT SELECT, INSERT ON page_views TO anon;
GRANT ALL ON leads TO service_role;
GRANT ALL ON page_views TO service_role;
GRANT SELECT ON daily_lead_stats TO authenticated, service_role;
GRANT SELECT ON lead_sources TO authenticated, service_role;
