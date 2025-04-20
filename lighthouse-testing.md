# Lighthouse Performance Testing Guide

## Overview
This guide outlines how to use Lighthouse to test the performance, accessibility, best practices, and SEO of the Evermore website.

## Setup

### Using Chrome DevTools
1. Open Chrome DevTools (F12 or Right-click > Inspect)
2. Navigate to the "Lighthouse" tab
3. Select the categories to audit:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Choose device emulation (Mobile or Desktop)
5. Click "Generate report"

### Using Lighthouse CLI
1. Install Lighthouse globally: `npm install -g lighthouse`
2. Run the test: `lighthouse https://your-site-url.com --view`

## Target Scores
- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Common Issues and Solutions

### Performance
- **Image Optimization**: Use Next.js Image component with proper sizing
- **Unused JavaScript**: Remove or defer non-critical JS
- **Render-blocking Resources**: Move non-critical CSS to async loading
- **Text Compression**: Enable gzip/Brotli compression on the server

### Accessibility
- **Color Contrast**: Ensure 4.5:1 contrast ratio for normal text
- **ARIA Attributes**: Properly implement ARIA for interactive elements
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Image Alt Text**: Add descriptive alt text to all images

### Best Practices
- **HTTPS Usage**: Ensure all resources are loaded over HTTPS
- **JavaScript Errors**: Fix any console errors
- **Deprecated APIs**: Replace any deprecated API usage

### SEO
- **Meta Tags**: Implement proper title, description, and other meta tags
- **Crawlable Links**: Ensure links are properly crawlable
- **Mobile Friendly**: Ensure the site is mobile-friendly
- **Structured Data**: Implement appropriate schema.org markup

## Testing Process
1. Run Lighthouse on all key pages:
   - Homepage
   - Consultation Page
   - Resources Pages
2. Document scores and issues for each page
3. Prioritize issues based on impact
4. Fix issues and retest
5. Compare before/after scores

## Documenting Results
For each page, document:
1. Page URL
2. Date tested
3. Scores for each category
4. Critical issues identified
5. Actions taken
6. Re-test scores

## Final Report
Create a final report with:
1. Overall scores for the site
2. Improvements made
3. Any remaining issues and recommendations
4. Comparative analysis (before vs. after)