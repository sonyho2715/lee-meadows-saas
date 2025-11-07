# TradePulse AI - AI-Powered Trading Intelligence Platform

A professional AI trading platform delivering precision cryptocurrency trading signals with 99.6% accuracy.

## Overview

TradePulse AI is an advanced algorithmic trading platform that leverages state-of-the-art machine learning technology to deliver highly accurate cryptocurrency trading signals. The platform processes millions of data points per second to identify optimal trading opportunities.

## Key Features

### Core Features
- **Dark Theme Design** with gold/yellow accents matching BG branding
- **Investment Plans**: Five-stage wealth management system ($500-$5000 USDT)
- **Referral System** with comprehensive rewards and team bonuses
- **Trading Signals**: AI-powered with 99.6% win rate
- **Responsive Design**: Mobile-first approach
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Animated Counters**: Smooth counting animations for statistics
- **Live Crypto Ticker**: Real-time cryptocurrency price display
- **FAQ Section**: Comprehensive accordion-based FAQ
- **Trust Badges**: Licensed by SEC, ASIC, MAS, DFSA
- **How It Works**: Step-by-step process visualization
- **Smooth Scroll**: Seamless navigation experience
- **Back to Top Button**: Floating scroll-to-top functionality

### Legal & Compliance ⚖️
- **Terms of Service**: Comprehensive 19-section legal agreement
- **Privacy Policy**: GDPR & CCPA compliant privacy documentation
- **Disclaimer Page**: Investment risk warnings and liability notices
- **Cookie Consent Banner**: Interactive consent management
- **Risk Warning Component**: Prominent homepage risk disclosure
- **Legal Footer Links**: Easy access to all legal documentation

See [LEGAL_COMPLIANCE.md](LEGAL_COMPLIANCE.md) for complete legal documentation.

## About TradePulse AI

- **Technology**: Advanced AI & Machine Learning Algorithms
- **Accuracy**: 99.6% signal accuracy rate
- **Licenses**: SEC (US), ASIC (Australia), MAS (Singapore), DFSA (Dubai)
- **Fund Protection**: $30M capital guarantee
- **Track Record**: 10,000+ active traders, processing millions of data points per second

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Investment Plans

| Stage | Investment | Monthly Profit | Account Balance |
|-------|-----------|----------------|-----------------|
| Stage 1 | $500 USDT | $3.25 | 1% |
| Stage 3 | $1,000 USDT | $29.25 | 9% |
| Stage 5 | $5,000 USDT | $195 | All In |

## New Components

### Interactive Features

1. **Crypto Ticker** (`components/crypto-ticker.tsx`)
   - Live cryptocurrency price updates
   - Rotating display of major coins (BTC, ETH, ADA, DOGE, USDT)
   - Trend indicators (up/down)

2. **Animated Counter** (`components/animated-counter.tsx`)
   - Smooth counting animations with easing
   - Intersection Observer for viewport detection
   - Customizable duration and decimal places

3. **FAQ Section** (`components/faq-section.tsx`)
   - 10 comprehensive questions and answers
   - Accordion interface for better UX
   - Covers investment, trading, licenses, and withdrawals

4. **Trust Badges** (`components/trust-badges.tsx`)
   - Display of major regulatory licenses
   - SEC, ASIC, MAS, and international compliance
   - Professional certification showcase

5. **How It Works** (`components/how-it-works.tsx`)
   - 4-step process visualization
   - Icon-based steps with descriptions
   - Direct call-to-action integration

6. **Back to Top** (`components/back-to-top.tsx`)
   - Floating button for easy navigation
   - Auto-hide/show based on scroll position
   - Smooth scroll animation

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables (Optional)

For future API integration:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_DSJ_EXCHANGE_URL=your_exchange_url
```

## Adding Images from PDF

The website is designed to display official BG Wealth Sharing images. See [IMAGE_INTEGRATION_GUIDE.md](IMAGE_INTEGRATION_GUIDE.md) for detailed instructions.

### Quick Start with Images

1. **Create image directories**:
```bash
mkdir -p public/images/{charts,certificates,hero,locations,logos}
```

2. **Save images** from the provided materials to:
   - `public/images/charts/` - Investment charts, tables
   - `public/images/certificates/` - License certificates
   - `public/images/hero/` - Hero section backgrounds
   - `public/images/locations/` - Dubai, Times Square
   - `public/images/logos/` - BG & DSJ logos

3. **Priority images to add**:
   - BG Team Wealth Planning Chart
   - Trading Signals Schedule
   - Referral Rewards Table
   - SEC & ASIC Certificates
   - DSJ Exchange Authorization

4. **Images will automatically integrate** into:
   - Investment Plans section
   - Trust Badges section
   - Visual Showcase section
   - FAQ section

See the complete guide for component examples and optimization tips.

## Integration with BG Trader Project

This website is designed to link with the BG Trader project. To integrate:

1. Add environment variables for API endpoints
2. Connect to the trading dashboard
3. Implement authentication flow
4. Link investment tracking features
5. Connect real-time trading signals API
6. Integrate USDT payment gateway

## Project Structure

```
lee-meadows-saas/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Main landing page with all sections)
│   └── globals.css
├── components/
│   ├── ui/ (shadcn/ui components)
│   ├── crypto-ticker.tsx (Live crypto prices)
│   ├── animated-counter.tsx (Animated statistics)
│   ├── trust-badges.tsx (Regulatory licenses)
│   ├── how-it-works.tsx (4-step process)
│   ├── faq-section.tsx (10 FAQs)
│   ├── visual-showcase.tsx (Image placeholders)
│   └── back-to-top.tsx (Floating button)
├── public/
│   └── images/ (Add your images here)
├── README.md
├── FEATURES.md (Complete feature documentation)
└── IMAGE_INTEGRATION_GUIDE.md (Image setup guide)
```

## Contact

Email: support@tradepulse-ai.com
Platform: TradePulse AI

---

© 2025 TradePulse AI - AI-Powered Trading Intelligence Platform
**Built with Next.js 15, TypeScript, Tailwind CSS & shadcn/ui**
