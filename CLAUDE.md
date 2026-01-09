# TradePulse AI (lee-meadows-saas)

## Project Overview
Trading AI platform. Note: Package name is `tradepulse-ai` but folder is `lee-meadows-saas`.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (NOT Prisma!)
- **Styling:** Tailwind CSS
- **UI:** Radix UI (Accordion, Separator, Slot)
- **Monitoring:** Sentry
- **Utilities:** clsx, class-variance-authority

## Important: Uses Supabase, NOT Prisma
```typescript
import { createClient } from '@supabase/supabase-js';
// NOT: import { db } from '@/lib/db';
```

## Key Features
- Trading signals
- AI-powered analysis
- User dashboard

## Commands
```bash
npm run dev     # Development
npm run build   # Build
npm run lint    # Linting
```

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role (server-side)
- `SENTRY_DSN` - Sentry monitoring

## Database Access
Use Supabase client, not Prisma:
```typescript
const supabase = createClient(url, key);
const { data, error } = await supabase.from('table').select();
```

## Deployment
- **Hosting:** Vercel
- **Database:** Supabase

## Notes
- Folder name differs from package name
- Uses Supabase instead of Prisma
- Has Sentry error monitoring
