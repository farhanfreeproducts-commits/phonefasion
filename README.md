# PHONE FASION INC Website

## 📁 PDF Files Setup

To enable the Company Documents section, copy your PDF files to the `public/` folder:

1. Copy `Phone Fasion Company Doc.pdf` → `D:\phonefasion\public\Phone Fasion Company Doc.pdf`
2. Copy `phone fasion annual report 2026.pdf` → `D:\phonefasion\public\phone fasion annual report 2026.pdf`

These files will then be viewable/downloadable directly from the website.

## 🚀 Running the Development Server

```bash
cd D:\phonefasion
set NPM_CONFIG_CACHE=D:\npm-cache
npm run dev
```

Visit: http://localhost:3000

## 🏗️ Project Structure

```
src/
  app/
    layout.tsx       - Root layout with SEO metadata
    page.tsx         - Main page (assembles all sections)
    globals.css      - Design system, custom utilities
  components/
    Navbar.tsx            - Sticky animated navigation
    HeroSection.tsx       - Hero with canvas particles
    AboutSection.tsx      - Company about & credentials
    CategoriesSection.tsx - 8 product categories
    FeaturedSection.tsx   - 8 featured products with prices
    WhyUsSection.tsx      - 6 feature/trust cards
    DocumentsSection.tsx  - PDF viewer modal
    CompanyInfoSection.tsx - Official company details
    ContactSection.tsx    - Contact form & info
    Footer.tsx            - Full footer with links
```

## 🎨 Design System

- **Primary Color**: Gold (#C9A84C / #E8C97A)
- **Background**: Dark (#050810 / #080C18)
- **Typography**: Inter + Playfair Display
- **Animations**: Framer Motion
- **Style**: Glassmorphism + Premium Dark

## 📋 Company Details

- **Company**: PHONE FASION INC
- **President**: MD G Kibria
- **Phone**: +1 (805) 344-6414
- **Email**: admin@phonefasioninc.com
- **Company No.**: P14000069743
- **EIN**: 47-1636518
- **Address**: 7639 SW 60TH ST, OCALA, FL 34474
