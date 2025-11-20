# Supabase Setup Guide

This guide walks you through setting up Supabase for the TradePulse AI platform.

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in the project details:
   - **Name**: `lee-meadows-saas` (or your preferred name)
   - **Database Password**: Generate a strong password and save it securely
   - **Region**: Choose closest to your users
5. Click "Create new project" and wait ~2 minutes for setup

### 2. Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)
   - **service_role key** (optional, for admin operations)

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

3. **IMPORTANT**: Never commit `.env.local` to Git (it's already in `.gitignore`)

### 4. Run the Database Schema

1. In your Supabase project, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase/schema.sql`
4. Paste into the SQL editor
5. Click "Run" to execute the schema

This will create:
- ✅ All necessary tables (users, investments, transactions, etc.)
- ✅ Indexes for performance
- ✅ Triggers for automation
- ✅ Row Level Security policies
- ✅ Views for analytics

### 5. Verify Setup

Check that these tables were created in **Table Editor**:
- [ ] users
- [ ] investments
- [ ] referrals
- [ ] transactions
- [ ] trading_signals
- [ ] wallets
- [ ] support_tickets
- [ ] audit_logs

## 📊 Database Schema Overview

### Tables

#### `users`
Stores user profile information extending Supabase auth.
- `id` - UUID (references auth.users)
- `email` - User email
- `full_name` - User's full name
- `phone` - Contact number
- `wallet_address` - Crypto wallet address
- `kyc_status` - KYC verification status

#### `investments`
Tracks user investments across different stages.
- `id` - UUID
- `user_id` - Reference to users table
- `amount` - Investment amount (minimum $300)
- `stage` - Investment stage (1-5)
- `status` - pending/active/completed/cancelled
- `monthly_profit` - Calculated monthly returns
- `total_profit` - Cumulative profits

#### `referrals`
Manages referral program and rewards.
- `id` - UUID
- `referrer_id` - User who referred
- `referee_id` - User who was referred
- `reward_amount` - Referral reward
- `status` - pending/paid/expired
- `level` - Referral level (1-3)

#### `transactions`
Records all financial transactions.
- `id` - UUID
- `user_id` - Reference to users table
- `type` - deposit/withdrawal/profit/referral/bonus
- `amount` - Transaction amount
- `status` - pending/processing/completed/failed
- `transaction_hash` - Blockchain transaction hash
- `wallet_address` - Destination wallet

#### `trading_signals`
AI-generated trading recommendations.
- `id` - UUID
- `symbol` - Trading pair (e.g., BTC/USDT)
- `signal_type` - buy/sell/hold
- `entry_price` - Recommended entry price
- `target_price` - Price target
- `stop_loss` - Stop loss price
- `confidence` - AI confidence level (0-100%)
- `status` - active/executed/expired

#### `wallets`
User wallet balances and totals.
- `user_id` - Reference to users table
- `balance` - Available balance
- `locked_balance` - Funds locked in trades
- `total_invested` - Lifetime investments
- `total_profit` - Lifetime profits
- `total_withdrawn` - Lifetime withdrawals

#### `support_tickets`
Customer support system.
- `id` - UUID
- `user_id` - Reference to users table
- `subject` - Ticket subject
- `message` - Ticket content
- `status` - open/in_progress/resolved/closed
- `priority` - low/medium/high/urgent

#### `audit_logs`
System audit trail for compliance.
- `id` - UUID
- `user_id` - User who performed action
- `action` - Action performed
- `entity_type` - Table/entity affected
- `old_values` - Previous values (JSON)
- `new_values` - New values (JSON)
- `ip_address` - User's IP
- `user_agent` - Browser info

## 🔐 Security Features

### Row Level Security (RLS)

All tables have RLS enabled with policies:
- Users can only read/update their own data
- Referrals visible to both parties
- Transactions private to account owner
- Trading signals visible to all authenticated users

### Triggers

Automated database operations:
- `update_updated_at` - Auto-updates timestamp on changes
- `create_user_wallet` - Creates wallet when user signs up
- `update_wallet_on_transaction` - Updates balance after transactions

## 🔌 Using Supabase in Your Code

### Client-side Usage

```typescript
import { supabase } from '@/lib/supabase'

// Fetch user's investments
const { data, error } = await supabase
  .from('investments')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false })

// Create new transaction
const { data, error } = await supabase
  .from('transactions')
  .insert({
    user_id: userId,
    type: 'deposit',
    amount: 500,
    status: 'pending'
  })
```

### Real-time Subscriptions

```typescript
// Subscribe to trading signals
const channel = supabase
  .channel('trading-signals')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'trading_signals' },
    (payload) => {
      console.log('New signal:', payload.new)
    }
  )
  .subscribe()
```

## 📈 Analytics Views

Pre-built views for reporting:

### `user_statistics`
Complete user stats including investments, referrals, profits.

```sql
SELECT * FROM user_statistics WHERE email = 'user@example.com';
```

### `investment_summary`
Summary by investment stage.

```sql
SELECT * FROM investment_summary ORDER BY stage;
```

## 🛠️ Development Tips

### Local Development

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Initialize local Supabase:
   ```bash
   supabase init
   ```

3. Start local Supabase:
   ```bash
   supabase start
   ```

### Database Migrations

When you need to update the schema:

1. Create a migration:
   ```bash
   supabase migration new add_new_feature
   ```

2. Edit the migration file in `supabase/migrations/`

3. Apply migration:
   ```bash
   supabase db push
   ```

## 🧪 Testing

### Sample Data

Uncomment the sample data section in `schema.sql` to insert test trading signals.

### Test Queries

```sql
-- Check if all tables exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;

-- Verify RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';

-- Test user statistics view
SELECT * FROM user_statistics LIMIT 10;
```

## 🚨 Troubleshooting

### Common Issues

**Issue**: Tables not created
- **Solution**: Check SQL Editor for error messages, run schema line by line

**Issue**: RLS blocking queries
- **Solution**: Ensure user is authenticated, check policy conditions

**Issue**: Triggers not firing
- **Solution**: Verify trigger functions exist, check error logs in Dashboard → Logs

**Issue**: Connection timeout
- **Solution**: Check API keys, verify project is not paused

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Database Functions](https://supabase.com/docs/guides/database/functions)

## 🔄 Next Steps

After setup:
1. ✅ Configure authentication (email, OAuth, etc.)
2. ✅ Set up storage buckets for KYC documents
3. ✅ Configure webhooks for transaction notifications
4. ✅ Set up scheduled functions for automated tasks
5. ✅ Configure backup policy
6. ✅ Set up monitoring and alerts

## 📞 Support

If you encounter issues:
- Check [Supabase Status](https://status.supabase.com/)
- Visit [Supabase Discord](https://discord.supabase.com/)
- Review [GitHub Discussions](https://github.com/supabase/supabase/discussions)

---

**Note**: Remember to update your Vercel and Railway environment variables with your Supabase credentials when deploying!
