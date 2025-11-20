-- TradePulse AI - Supabase Database Schema
-- This schema defines the database structure for the investment platform

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  wallet_address TEXT,
  kyc_status TEXT DEFAULT 'pending' CHECK (kyc_status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Investments table
CREATE TABLE IF NOT EXISTS public.investments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  amount DECIMAL(20, 2) NOT NULL CHECK (amount >= 300),
  stage INTEGER NOT NULL CHECK (stage BETWEEN 1 AND 5),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'cancelled')),
  monthly_profit DECIMAL(20, 2),
  total_profit DECIMAL(20, 2) DEFAULT 0,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  referee_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  referral_code TEXT,
  reward_amount DECIMAL(20, 2) DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'expired')),
  level INTEGER DEFAULT 1 CHECK (level BETWEEN 1 AND 3),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(referrer_id, referee_id)
);

-- Transactions table
CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'profit', 'referral', 'bonus')),
  amount DECIMAL(20, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'cancelled')),
  transaction_hash TEXT,
  wallet_address TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trading signals table
CREATE TABLE IF NOT EXISTS public.trading_signals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  symbol TEXT NOT NULL,
  signal_type TEXT NOT NULL CHECK (signal_type IN ('buy', 'sell', 'hold')),
  entry_price DECIMAL(20, 8) NOT NULL,
  target_price DECIMAL(20, 8),
  stop_loss DECIMAL(20, 8),
  confidence DECIMAL(5, 2) CHECK (confidence BETWEEN 0 AND 100),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'executed', 'expired', 'cancelled')),
  ai_model TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ
);

-- User wallets/balances table
CREATE TABLE IF NOT EXISTS public.wallets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  balance DECIMAL(20, 2) DEFAULT 0 CHECK (balance >= 0),
  locked_balance DECIMAL(20, 2) DEFAULT 0 CHECK (locked_balance >= 0),
  total_invested DECIMAL(20, 2) DEFAULT 0,
  total_profit DECIMAL(20, 2) DEFAULT 0,
  total_withdrawn DECIMAL(20, 2) DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Support tickets table
CREATE TABLE IF NOT EXISTS public.support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  assigned_to UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit log table
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES for better query performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_investments_user_id ON public.investments(user_id);
CREATE INDEX IF NOT EXISTS idx_investments_status ON public.investments(status);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON public.referrals(referrer_id);
CREATE INDEX IF NOT EXISTS idx_referrals_referee ON public.referrals(referee_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_status ON public.transactions(status);
CREATE INDEX IF NOT EXISTS idx_transactions_type ON public.transactions(type);
CREATE INDEX IF NOT EXISTS idx_trading_signals_status ON public.trading_signals(status);
CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON public.wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_user_id ON public.support_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON public.support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_investments_updated_at BEFORE UPDATE ON public.investments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON public.transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wallets_updated_at BEFORE UPDATE ON public.wallets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON public.support_tickets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create wallet when user is created
CREATE OR REPLACE FUNCTION create_user_wallet()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.wallets (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_wallet_on_user_insert AFTER INSERT ON public.users
  FOR EACH ROW EXECUTE FUNCTION create_user_wallet();

-- Function to update wallet balance after transaction
CREATE OR REPLACE FUNCTION update_wallet_on_transaction()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'completed' THEN
    IF NEW.type = 'deposit' OR NEW.type = 'profit' OR NEW.type = 'referral' OR NEW.type = 'bonus' THEN
      UPDATE public.wallets
      SET balance = balance + NEW.amount,
          total_profit = CASE WHEN NEW.type = 'profit' THEN total_profit + NEW.amount ELSE total_profit END
      WHERE user_id = NEW.user_id;
    ELSIF NEW.type = 'withdrawal' THEN
      UPDATE public.wallets
      SET balance = balance - NEW.amount,
          total_withdrawn = total_withdrawn + NEW.amount
      WHERE user_id = NEW.user_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_wallet_on_transaction_update AFTER UPDATE ON public.transactions
  FOR EACH ROW WHEN (OLD.status IS DISTINCT FROM NEW.status)
  EXECUTE FUNCTION update_wallet_on_transaction();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trading_signals ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can read own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Investments policies
CREATE POLICY "Users can read own investments" ON public.investments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own investments" ON public.investments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Referrals policies
CREATE POLICY "Users can read referrals" ON public.referrals
  FOR SELECT USING (auth.uid() = referrer_id OR auth.uid() = referee_id);

-- Transactions policies
CREATE POLICY "Users can read own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);

-- Wallets policies
CREATE POLICY "Users can read own wallet" ON public.wallets
  FOR SELECT USING (auth.uid() = user_id);

-- Support tickets policies
CREATE POLICY "Users can read own tickets" ON public.support_tickets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tickets" ON public.support_tickets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Trading signals are public (read-only for all authenticated users)
CREATE POLICY "Authenticated users can read signals" ON public.trading_signals
  FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Uncomment below to insert sample trading signals
/*
INSERT INTO public.trading_signals (symbol, signal_type, entry_price, target_price, stop_loss, confidence, ai_model)
VALUES
  ('BTC/USDT', 'buy', 67234.50, 70000.00, 65000.00, 95.6, 'AI Model v3.0'),
  ('ETH/USDT', 'buy', 3456.78, 3600.00, 3300.00, 92.3, 'AI Model v3.0'),
  ('ADA/USDT', 'hold', 0.58, 0.65, 0.55, 87.5, 'AI Model v3.0');
*/

-- ============================================
-- VIEWS (for analytics and reporting)
-- ============================================

-- View for user statistics
CREATE OR REPLACE VIEW user_statistics AS
SELECT
  u.id,
  u.full_name,
  u.email,
  w.balance,
  w.total_invested,
  w.total_profit,
  w.total_withdrawn,
  COUNT(DISTINCT i.id) as total_investments,
  COUNT(DISTINCT r.id) as total_referrals,
  u.created_at
FROM public.users u
LEFT JOIN public.wallets w ON u.id = w.user_id
LEFT JOIN public.investments i ON u.id = i.user_id
LEFT JOIN public.referrals r ON u.id = r.referrer_id
GROUP BY u.id, u.full_name, u.email, w.balance, w.total_invested, w.total_profit, w.total_withdrawn, u.created_at;

-- View for investment summary
CREATE OR REPLACE VIEW investment_summary AS
SELECT
  stage,
  COUNT(*) as total_investments,
  SUM(amount) as total_amount,
  AVG(amount) as avg_amount,
  SUM(total_profit) as total_profits
FROM public.investments
WHERE status = 'active'
GROUP BY stage
ORDER BY stage;

COMMENT ON TABLE public.users IS 'User profiles and account information';
COMMENT ON TABLE public.investments IS 'User investment records';
COMMENT ON TABLE public.referrals IS 'Referral tracking and rewards';
COMMENT ON TABLE public.transactions IS 'Financial transactions history';
COMMENT ON TABLE public.trading_signals IS 'AI-generated trading signals';
COMMENT ON TABLE public.wallets IS 'User wallet balances and totals';
COMMENT ON TABLE public.support_tickets IS 'Customer support tickets';
COMMENT ON TABLE public.audit_logs IS 'System audit trail';
