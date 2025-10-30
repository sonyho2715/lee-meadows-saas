# Image Integration Guide

## Overview
This guide explains how to add the BG Wealth Sharing images from the PDF to the website.

## Available Images from PDF

Based on the provided images, here are the key visual assets:

### 1. **Investment & Financial Images**
- 📊 Global investment with gold coins and globe
- 💰 USDT Tether coin stack
- 📈 Capital investment graphic
- 🏆 Gold bars and financial documents

### 2. **Location & Infrastructure**
- 🌆 Dubai skyline (Burj Khalifa)
- 🏙️ Times Square (international presence)
- 🤝 Business partnership handshakes

### 3. **Charts & Tables** (Priority for Integration)
- **BG Team Wealth Planning Chart** - 5-stage profit breakdown
- **Static vs Dynamic Income Comparison** - Multiple profit scenarios
- **Trading Signals Schedule** - Daily signal times (EST)
- **Referral Rewards Table** - Deposit amounts and bonuses
- **Team Level Structure** - LV1-LV7 bonuses
- **Sponsorship Fund Reimbursement** - Deposit bonuses

### 4. **Official Documents**
- SEC License Certificate (BG Wealth Sharing Ltd)
- SEC License Certificate (DSJ Exchange)
- ASIC Registration Certificate
- Colorado Corporation Certificate
- BG Wealth Sharing Stock Certificate
- DSJ Exchange Authorization Letter
- Investment Partnership Commitment Letter

### 5. **Branding & Visual Elements**
- BG Wealth Sharing logo
- DSJ Exchange logo
- Five Advantages infographic
- FAQ visual

## Step-by-Step Integration

### Step 1: Save Images to Project

1. Create organized folders:
```bash
mkdir -p public/images/charts
mkdir -p public/images/certificates
mkdir -p public/images/hero
mkdir -p public/images/locations
mkdir -p public/images/logos
```

2. Save images from the provided links to appropriate folders:
   - Charts → `public/images/charts/`
   - Certificates → `public/images/certificates/`
   - Hero images → `public/images/hero/`
   - Location photos → `public/images/locations/`
   - Logos → `public/images/logos/`

### Step 2: Recommended Image Names

```
/public/images/
├── charts/
│   ├── wealth-planning-chart.jpg
│   ├── static-vs-dynamic-income.jpg
│   ├── trading-signals-schedule.jpg
│   ├── referral-rewards-table.jpg
│   ├── team-level-bonuses.jpg
│   └── sponsorship-reimbursement.jpg
├── certificates/
│   ├── sec-license-bg.jpg
│   ├── sec-license-dsj.jpg
│   ├── asic-certificate.jpg
│   ├── colorado-registration.jpg
│   ├── stock-certificate.jpg
│   ├── dsj-authorization.jpg
│   └── partnership-commitment.jpg
├── hero/
│   ├── global-investment.jpg
│   ├── usdt-coins.jpg
│   ├── capital-invest.jpg
│   └── gold-bars.jpg
├── locations/
│   ├── dubai-skyline.jpg
│   ├── times-square.jpg
│   └── business-handshake.jpg
└── logos/
    ├── bg-wealth-sharing-logo.png
    └── dsj-exchange-logo.png
```

### Step 3: Update Components

#### A. Investment Plans Section
Replace the current plans section with the actual wealth planning chart:

```typescript
// In app/page.tsx - Investment Plans Section
<div className="relative w-full max-w-5xl mx-auto">
  <Image
    src="/images/charts/wealth-planning-chart.jpg"
    alt="BG Team Wealth Planning Chart - 5 Investment Stages"
    width={1200}
    height={600}
    className="rounded-lg shadow-2xl border-2 border-yellow-500/30"
    priority
  />
</div>
```

#### B. Add Trading Signals Schedule
After the "How It Works" section:

```typescript
<section className="container mx-auto px-4 py-12">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-white text-center mb-8">
      Daily Trading Signals Schedule
    </h3>
    <Image
      src="/images/charts/trading-signals-schedule.jpg"
      alt="BG Wealth Sharing Daily Trading Signals Schedule (EST)"
      width={1000}
      height={600}
      className="rounded-lg shadow-xl"
    />
  </div>
</section>
```

#### C. Trust Badges with Certificates
Update the TrustBadges component to show actual certificates:

```typescript
// In components/trust-badges.tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="relative group cursor-pointer">
    <Image
      src="/images/certificates/sec-license-bg.jpg"
      alt="SEC License - BG Wealth Sharing"
      width={300}
      height={400}
      className="rounded-lg shadow-lg hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
      <p className="text-white text-sm">Click to view full certificate</p>
    </div>
  </div>
  {/* Repeat for ASIC, MAS, etc. */}
</div>
```

#### D. Rewards Section Enhancement
Show the actual referral rewards table image:

```typescript
// In Rewards Section
<Image
  src="/images/charts/referral-rewards-table.jpg"
  alt="BG Wealth Sharing 2025 Referral Rewards"
  width={800}
  height={600}
  className="rounded-lg shadow-lg mx-auto"
/>
```

### Step 4: Add Image Lightbox (Optional Enhancement)

For a better user experience viewing certificates:

```bash
npm install yet-another-react-lightbox
```

Create a lightbox component:

```typescript
// components/certificate-gallery.tsx
"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

export function CertificateGallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: "/images/certificates/sec-license-bg.jpg", title: "SEC License" },
    { src: "/images/certificates/asic-certificate.jpg", title: "ASIC Certificate" },
    // ... more images
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.title}
            width={300}
            height={400}
            className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={photoIndex}
      />
    </>
  );
}
```

### Step 5: Optimize Images

Before adding to production:

1. **Compress images** to reduce file size:
   - Use https://tinypng.com or https://squoosh.app
   - Target: Under 200KB per image

2. **Recommended dimensions**:
   - Charts: 1200x800px
   - Certificates: 800x1000px
   - Hero images: 1920x1080px
   - Logos: 500x500px (PNG with transparency)

3. **Use WebP format** for better performance:
   ```bash
   # Convert images to WebP
   cwebp input.jpg -q 80 -o output.webp
   ```

## Priority Images to Add First

1. **High Priority**:
   - ✅ BG Team Wealth Planning Chart
   - ✅ Trading Signals Schedule
   - ✅ Referral Rewards Table
   - ✅ SEC License Certificate
   - ✅ ASIC Certificate

2. **Medium Priority**:
   - Team Level Bonuses Structure
   - DSJ Exchange Authorization
   - Static vs Dynamic Income comparison
   - Dubai skyline photo

3. **Low Priority**:
   - Generic stock photos (handshakes, coins, etc.)
   - Additional certificates
   - Logo variations

## Image Loading Best Practices

### Use Next.js Image Component
```typescript
import Image from "next/image";

<Image
  src="/images/charts/wealth-planning-chart.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={800}
  priority={true}  // Use for above-the-fold images
  loading="lazy"   // Use for below-the-fold images
  placeholder="blur"  // Optional: add blur effect while loading
/>
```

### Lazy Loading for Better Performance
```typescript
// Only load images when they enter viewport
<Image
  src="/images/certificates/sec-license.jpg"
  alt="SEC License"
  width={800}
  height={1000}
  loading="lazy"
  className="rounded-lg"
/>
```

## SEO Optimization

Always include descriptive alt text:
```typescript
// ❌ Bad
<Image src="/chart.jpg" alt="chart" />

// ✅ Good
<Image
  src="/images/charts/wealth-planning-chart.jpg"
  alt="BG Wealth Sharing 5-Stage Wealth Management Planning Chart showing profit projections from $500 to $5000 USDT investments"
/>
```

## Troubleshooting

### Images not loading?
1. Check file path (case-sensitive)
2. Verify image is in `/public/` directory
3. Check Next.js console for errors
4. Clear cache: `rm -rf .next`

### Images too large?
1. Compress before uploading
2. Use WebP format
3. Set appropriate width/height
4. Use `loading="lazy"` for below-fold images

### Blurry images?
1. Increase image dimensions
2. Use higher quality export (90-95%)
3. Avoid excessive compression

## Example: Complete Integration

Here's a complete example of integrating the wealth planning chart:

```typescript
// components/wealth-planning-chart.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WealthPlanningChart() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-yellow-500/30 text-yellow-500">
            Investment Strategy
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            BG Team Wealth Planning Chart
          </h2>
          <p className="text-gray-300 text-lg">
            Strictly managed account funds in accordance with five stages
          </p>
        </div>

        <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
          <CardContent className="p-6">
            <Image
              src="/images/charts/wealth-planning-chart.jpg"
              alt="BG Team Wealth Planning Chart - Complete 5-stage investment strategy from $500 to $5000 USDT with detailed profit calculations"
              width={1200}
              height={700}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            In the BG team, we strictly manage account funds in accordance with five stages
            and lead you to achieve your wealth goals
          </p>
        </div>
      </div>
    </section>
  );
}
```

## Next Steps

1. **Download/save images** from the provided links
2. **Organize into folders** as recommended above
3. **Update components** with actual images
4. **Test responsiveness** on mobile devices
5. **Optimize file sizes** before deployment
6. **Deploy to Vercel** - images will be automatically optimized

---

**Need Help?** Check Next.js Image documentation: https://nextjs.org/docs/api-reference/next/image
