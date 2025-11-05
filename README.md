# APEXA - AI Consulting and Implementation Agency Landing Page

A modern, high-converting landing page built with Next.js 15, TypeScript, and TailwindCSS for APEXA AI Consulting and Implementation Agency.

## 🚀 Features

- ✅ **Modern Design**: Inspired by GoHighLevel Marketplace and Confluence
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Modular Architecture**: Each section is an independent component
- ✅ **Interactive Elements**:
  - ROI Calculator
  - Contact Form with validation
  - Booking/Calendar integration
  - AI Chat Widget
  - Exit Intent Popup
- ✅ **SEO Optimized**: Meta tags, semantic HTML, and performance best practices
- ✅ **Type-Safe**: Full TypeScript coverage
- ✅ **Fast Performance**: Next.js 15 with App Router and Suspense boundaries

## 📁 Project Structure

```
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Landing page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── layout/                  # Layout components
│   │   │   ├── header.tsx          # Sticky navigation
│   │   │   └── footer.tsx          # Footer
│   │   ├── landing/                # Landing page sections
│   │   │   ├── sections/           # All landing sections
│   │   │   ├── forms/              # Contact & booking forms
│   │   │   ├── interactive/        # ROI calculator
│   │   │   └── index.tsx           # Barrel export
│   │   ├── ui/                     # shadcn/ui components
│   │   └── widgets/                # Chat & exit intent
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utilities
│   └── types/                      # TypeScript types
├── public/                         # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landingpage_002_standardized
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### Update Content

Each section is self-contained. To modify content:

1. **Hero Section**: Edit `src/components/landing/sections/hero.tsx`
2. **Services/Pricing**: Edit `src/components/landing/sections/services.tsx`
3. **Case Studies**: Edit `src/components/landing/sections/case-studies.tsx`
4. **FAQ**: Edit `src/components/landing/sections/faq.tsx`

### Change Colors

Update `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Your brand color
    600: '#0284c7',
  },
  // ... other colors
}
```

### Add/Remove Sections

In `src/app/page.tsx`, simply comment out or add new sections:

```typescript
{/* <CaseStudiesSection /> */}  // Remove a section
<CustomSection />               // Add a section
```

### Booking Calendar Integration

Replace the placeholder in `src/components/landing/forms/booking-section.tsx` with your actual Calendly embed code:

```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-link" style="min-width:320px;height:630px;"></div>
```

### Contact Form Backend

Update the `onSubmit` function in `src/components/landing/forms/contact-form.tsx` to send data to your backend or email service.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Performance Optimization

- Uses Next.js Server Components by default
- Suspense boundaries for code splitting
- Optimized images with next/image (add as needed)
- Lazy-loaded interactive components

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
# Add other environment variables as needed
```

## 🎯 Target Audience

This landing page is optimized for:
- SME Business Owners (Annual Revenue: $2M - $350M)
- CEOs and C-Suite Executives
- Operations and Technology Managers
- Companies looking to adopt AI solutions

## 📞 Support

For questions or issues:
- Email: hello@apexa.ai
- Documentation: [Implementation Guide](docs/implementation-guide.md)

## 📄 License

Copyright © 2024 APEXA. All rights reserved.

## 🙏 Acknowledgments

- Design inspiration: GoHighLevel Marketplace, Confluence
- UI Components: shadcn/ui
- Icons: Lucide React
- Framework: Next.js by Vercel

---

Built with ❤️ by APEXA
