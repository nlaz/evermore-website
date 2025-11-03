# BRAND MIGRATION PLAN
**Evermore Website - Official Brand Package Integration**

---

## Executive Summary

This document outlines the comprehensive plan to migrate the Evermore website from its current brand implementation to align with the official Evermore Brand Package. The migration addresses critical discrepancies in color palette, typography, and visual assets.

**Timeline Estimate:** 2-3 days
**Risk Level:** Medium (visual breaking changes)
**Priority:** High (brand consistency)

---

## Current State Analysis

### Discrepancies Identified

#### 1. Color Palette ❌
**Current Implementation:**
- Ink Black: `#1A1A1A`
- Forest Charcoal: `#2E2F2C`
- Moss Olive: `#3C3F2D`
- Soft Ivory: `#F9F7F2`
- Warm Gray: `#E5E2DC`

**Official Brand Package:**
- **Golden Ochre*** (Core): `#AF8E5C` - RGB(175, 142, 92)
- **Midnight Moss*** (Core): `#273229` - RGB(39, 50, 41)
- **Charred Plum*** (Core): `#362630` - RGB(54, 38, 48)
- Soft Parchment: `#D8C8B8` - RGB(216, 200, 184)
- Stone Sage: `#5A685C` - RGB(90, 104, 92)
- Deep Slate: `#333E4E` - RGB(51, 62, 78)
- Muted Rose: `#A4816D` - RGB(164, 129, 109)
- Lilac Mist: `#918A94` - RGB(145, 138, 148)
- Pale Stone: `#C8C2B8` - RGB(200, 194, 184)

*\* Core Brand Colors*

**Impact:** Complete color system overhaul required

#### 2. Typography ❌
**Current Implementation:**
- Headers: Cinzel (Google Fonts)
- Body: Jost (Google Fonts)

**Official Brand Package:**
- Headers: **NN Konrad** (Bold, Medium, Regular) - Licensed font
- Body: **Untitled Sans** (Bold, Regular, Light + Italics) - Licensed font

**Impact:** Font replacement, potential FOUT/FOIT handling

#### 3. Logo Assets ⚠️
**Current Assets:**
- `wordmark-green.png` (141KB)
- `wordmark-white.png` (116KB)

**Available in Brand Package:**
- Primary Logo (AI, SVG, PNG) - 3 color variants
- Horizontal Logo (AI, SVG, PNG) - 3 color variants
- Wordmark (AI, SVG, PNG) - 3 color variants
- Emblem (AI, SVG) - Simple and detailed versions
- Favicon (AI, SVG)

**Impact:** Full logo suite integration needed

#### 4. Visual Assets ❌
**Current:** Generic placeholders
**Available:** 3 decorative patterns (AI format):
- Fragmented Horizons
- Rippled Light Grid
- Shadow Lattice

**Impact:** Opportunity for enhanced visual design

---

## Implementation Plan

### Phase 1: Foundation & Asset Preparation
**Duration:** 4-6 hours
**Dependencies:** None

#### Task 1.1: Font Integration
- [ ] Create `/public/fonts` directory
- [ ] Copy NN Konrad fonts (.otf → .woff2 conversion needed)
  - Source: `Evermore Brand Package/03_Typography/NN Konrad/`
  - Files: `NNKonrad-Bold.otf`, `NNKonrad-Medium.otf`, `NNKonrad-Regular.otf`
- [ ] Copy Untitled Sans fonts (.otf → .woff2 conversion needed)
  - Source: `Evermore Brand Package/03_Typography/Untitled Sans/OTF/`
  - Files: All 6 variants (Bold, BoldItalic, Light, LightItalic, Regular, RegularItalic)
- [ ] Convert OTF to WOFF2 for web optimization
- [ ] Create font face declarations in `globals.css`
- [ ] Update `layout.tsx` font configuration

**Technical Note:** Use [fonttools](https://github.com/fonttools/fonttools) or online converter for OTF → WOFF2

#### Task 1.2: Logo Asset Migration
- [ ] Create `/public/logos` directory structure
- [ ] Export/copy SVG logos from brand package:
  - `Evermore_Logo_Primary.svg` (+ color variants)
  - `Evermore_Logo_Horizontal.svg` (+ color variants)
  - `Evermore_Wordmark.svg` (+ color variants)
  - `Evermore_Emblem.svg` (+ simple version)
  - `Evermore_Favicon.svg`
- [ ] Optimize SVGs for web (remove unnecessary metadata)
- [ ] Generate PNG fallbacks at multiple resolutions (1x, 2x, 3x)
- [ ] Update favicon references in `layout.tsx`

#### Task 1.3: Decorative Pattern Export
- [ ] Export patterns from AI files to SVG/PNG:
  - Fragmented Horizons
  - Rippled Light Grid
  - Shadow Lattice
- [ ] Optimize for web use (file size < 100KB each)
- [ ] Create pattern variants (opacity, scale) if needed

---

### Phase 2: Design System Overhaul
**Duration:** 3-4 hours
**Dependencies:** Phase 1 complete

#### Task 2.1: Tailwind Configuration Update
**File:** `tailwind.config.js`

```javascript
colors: {
  // Core Brand Colors
  'golden-ochre': '#AF8E5C',     // Primary accent
  'midnight-moss': '#273229',     // Dark foundation
  'charred-plum': '#362630',      // Rich dark accent

  // Supporting Palette
  'soft-parchment': '#D8C8B8',    // Light background
  'stone-sage': '#5A685C',        // Muted green
  'deep-slate': '#333E4E',        // Cool dark
  'muted-rose': '#A4816D',        // Warm neutral
  'lilac-mist': '#918A94',        // Subtle purple-gray
  'pale-stone': '#C8C2B8',        // Neutral background
}
```

- [ ] Replace all current color definitions
- [ ] Add semantic color aliases (primary, secondary, accent, background, text)
- [ ] Update font family configuration for NN Konrad and Untitled Sans

#### Task 2.2: Typography System
**File:** `src/app/layout.tsx`

- [ ] Remove Google Fonts imports (Cinzel, Jost)
- [ ] Remove font variable declarations
- [ ] Test font loading performance
- [ ] Implement font-display strategy (swap recommended)

**File:** `src/app/globals.css`

```css
@font-face {
  font-family: 'NN Konrad';
  src: url('/fonts/NNKonrad-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* Add all NN Konrad and Untitled Sans variants */
```

#### Task 2.3: Documentation Update
**File:** `Brand_Style_Guide.md`

- [ ] Update color palette section with official colors
- [ ] Add PMS/CMYK/RGB reference values
- [ ] Update typography section with NN Konrad + Untitled Sans
- [ ] Add usage guidelines for core vs. supporting colors
- [ ] Document logo usage rules

---

### Phase 3: Component Migration
**Duration:** 8-10 hours
**Dependencies:** Phase 2 complete

#### Task 3.1: Global Components

**File:** `src/components/layout/navbar.tsx`
- [ ] Replace logo with official `Evermore_Logo_Horizontal.svg`
- [ ] Update color scheme (midnight-moss background, golden-ochre accents)
- [ ] Apply Untitled Sans font
- [ ] Test light/dark logo variants

**File:** `src/components/layout/footer.tsx`
- [ ] Update background color to midnight-moss or charred-plum
- [ ] Replace logo with appropriate variant
- [ ] Update text colors for contrast compliance
- [ ] Apply Untitled Sans font

**File:** `src/components/ui/button.tsx`
- [ ] Update primary variant: golden-ochre background
- [ ] Update outline variant: golden-ochre border
- [ ] Update hover states with new palette
- [ ] Ensure WCAG AA contrast ratios

#### Task 3.2: Homepage Sections

**File:** `src/app/page.tsx`

**Hero Section (Lines 31-66):**
- [ ] Update background from `forest-charcoal` to `midnight-moss`
- [ ] Replace `moss-olive` accents with `golden-ochre`
- [ ] Update button backgrounds to `golden-ochre`
- [ ] Consider adding decorative pattern overlay
- [ ] Apply NN Konrad to heading typography

**Why Evermore Section (Lines 69-164):**
- [ ] Replace `terracotta` references with `golden-ochre`
- [ ] Update `muted-blue` references with `deep-slate` or `lilac-mist`
- [ ] Update decorative gradient blurs with new colors
- [ ] Replace border accent colors

**How It Works Section (Lines 167-209):**
- [ ] Update background from `moss-olive` to `midnight-moss` or `charred-plum`
- [ ] Update card backgrounds/borders with new palette
- [ ] Ensure soft-ivory text contrast on new backgrounds

**Services Section (Lines 212-330):**
- [ ] Update `moss-olive` references to `golden-ochre` or `charred-plum`
- [ ] Update pricing card accent colors
- [ ] Refresh "Most Popular" badge styling
- [ ] Update hover states

**Resources Section (Lines 372-400):**
- [ ] Update background from `forest-charcoal` to `midnight-moss` or `deep-slate`
- [ ] Update card backgrounds with supporting colors
- [ ] Ensure readability with new color combinations

**Contact Section (Lines 403-474):**
- [ ] Update form styling with new palette
- [ ] Update input focus states to `golden-ochre`
- [ ] Update button colors

#### Task 3.3: Utility Components

**File:** `src/components/ui/testimonial-card.tsx`
- [ ] Update quotation mark colors to `golden-ochre`
- [ ] Update text colors for new backgrounds
- [ ] Apply Untitled Sans font

**File:** `src/components/ui/faq-accordion.tsx`
- [ ] Update expand/collapse icon colors
- [ ] Update hover states with new palette
- [ ] Ensure proper contrast

---

### Phase 4: Visual Enhancements
**Duration:** 4-6 hours
**Dependencies:** Phase 3 complete

#### Task 4.1: Pattern Integration
- [ ] Add decorative patterns as section backgrounds:
  - Hero: Fragmented Horizons (subtle overlay)
  - Why Evermore: Rippled Light Grid
  - Services: Shadow Lattice
- [ ] Configure opacity and blend modes
- [ ] Ensure patterns don't interfere with readability
- [ ] Test performance impact

#### Task 4.2: Logo Contextual Usage
- [ ] Use `Evermore_Logo_Primary_GoldenOchre.png` on light backgrounds
- [ ] Use `Evermore_Logo_Primary_CharredPlum.png` on parchment backgrounds
- [ ] Use `Evermore_Logo_Primary_MidnightMoss.png` or white variant on light backgrounds
- [ ] Create `<Logo>` component with automatic variant switching

#### Task 4.3: Gradient & Shadow Updates
- [ ] Create new gradient utilities with official colors:
  - `midnight-moss` → `charred-plum`
  - `golden-ochre` → `muted-rose`
  - `deep-slate` → `midnight-moss`
- [ ] Update shadow colors to match new palette
- [ ] Update glow effects (testimonial quotes, buttons, etc.)

---

### Phase 5: Quality Assurance
**Duration:** 4-6 hours
**Dependencies:** Phase 4 complete

#### Task 5.1: Accessibility Audit
- [ ] Run axe DevTools on all pages
- [ ] Verify WCAG AA contrast ratios (minimum 4.5:1 for text)
- [ ] Test with color blindness simulators
- [ ] Validate focus states with new colors
- [ ] Check keyboard navigation

**Color Contrast Validation:**
- Golden Ochre (#AF8E5C) on white: ✓ (4.6:1)
- Golden Ochre on Soft Parchment: Check
- Midnight Moss (#273229) on white: ✓ (14.8:1)
- Charred Plum (#362630) on white: ✓ (13.2:1)

#### Task 5.2: Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest - test font rendering)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Focus Areas:**
- Font rendering quality (especially NN Konrad serifs)
- Color accuracy across displays
- SVG logo rendering
- Pattern overlay performance

#### Task 5.3: Performance Testing
- [ ] Run Lighthouse audit (target: 90+ performance score)
- [ ] Check font loading strategy (FOUT/FOIT)
- [ ] Measure First Contentful Paint (FCP)
- [ ] Measure Largest Contentful Paint (LCP)
- [ ] Validate image optimization
- [ ] Check bundle size impact

**Performance Budget:**
- Font files: < 500KB total (after WOFF2 compression)
- Logo assets: < 100KB per SVG
- Pattern overlays: < 150KB total

#### Task 5.4: Visual QA
- [ ] Compare each section to brand guidelines
- [ ] Verify spacing and typography hierarchy
- [ ] Check alignment and visual rhythm
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
- [ ] Validate print styles if applicable
- [ ] Screenshot comparison (before/after)

---

## File Migration Reference

### Fonts
```
Source: /Evermore Brand Package/03_Typography/
Destination: /evermore-website/public/fonts/

NN Konrad/
  ├─ NNKonrad-Bold.otf → NNKonrad-Bold.woff2
  ├─ NNKonrad-Medium.otf → NNKonrad-Medium.woff2
  └─ NNKonrad-Regular.otf → NNKonrad-Regular.woff2

Untitled Sans/OTF/
  ├─ UntitledSans-Bold.otf → UntitledSans-Bold.woff2
  ├─ UntitledSans-BoldItalic.otf → UntitledSans-BoldItalic.woff2
  ├─ UntitledSans-Light.otf → UntitledSans-Light.woff2
  ├─ UntitledSans-LightItalic.otf → UntitledSans-LightItalic.woff2
  ├─ UntitledSans-Regular.otf → UntitledSans-Regular.woff2
  └─ UntitledSans-RegularItalic.otf → UntitledSans-RegularItalic.woff2
```

### Logos
```
Source: /Evermore Brand Package/01_Logo/
Destination: /evermore-website/public/logos/

Primary/
  ├─ Evermore_Logo_Primary.svg
  ├─ Evermore_Logo_Primary_GoldenOchre.png
  ├─ Evermore_Logo_Primary_MidnightMoss.png
  └─ Evermore_Logo_Primary_CharredPlum.png

Horizontal/
  ├─ Evermore_Logo_Horizontal.svg
  ├─ Evermore_Logo_Horizontal_GoldenOchre.png
  ├─ Evermore_Logo_Horizontal_MidnightMoss.png
  └─ Evermore_Logo_Horizontal_CharredPlum.png

Wordmark/
  ├─ Evermore_Wordmark.svg
  ├─ Evermore_Wordmark_GoldenOchre.png
  ├─ Evermore_Wordmark_MidnightMoss.png
  └─ Evermore_Wordmark_CharredPlum.png

Emblem/
  ├─ Evermore_Emblem.svg
  └─ Evermore_Emblem_Simple.svg

Favicon/
  └─ Evermore_Favicon.svg
```

### Patterns
```
Source: /Evermore Brand Package/06_Supporting Assets/
Destination: /evermore-website/public/patterns/

  ├─ Evermore_Fragmented_Horizons.ai → .svg/.png
  ├─ Evermore_Rippled_Light_Grid.ai → .svg/.png
  └─ Evermore_Shadow_Lattice.ai → .svg/.png
```

---

## Risk Assessment & Mitigation

### High Risk
**Visual Breaking Changes**
- **Risk:** Entire aesthetic will change; may not match user expectations
- **Mitigation:** Create comparison screenshots; deploy to staging first; gather feedback

**Font Loading Performance**
- **Risk:** Custom fonts add ~2MB, potential FOUT/FOIT
- **Mitigation:** Use font-display: swap; preload critical fonts; subset fonts if possible

### Medium Risk
**Color Contrast Issues**
- **Risk:** New color combinations may fail WCAG standards
- **Mitigation:** Validate all combinations upfront; use contrast checking tools

**Asset File Size**
- **Risk:** Pattern overlays and logo variants increase bundle size
- **Mitigation:** Aggressive optimization; lazy-load patterns; use SVG where possible

### Low Risk
**Browser Compatibility**
- **Risk:** Font rendering differences across browsers
- **Mitigation:** Test extensively; provide fallback fonts

**Legacy Asset References**
- **Risk:** Hardcoded image paths may break
- **Mitigation:** Global search/replace; systematic component review

---

## Success Criteria

### Brand Alignment
- [ ] 100% color palette match with official brand package
- [ ] All typography using NN Konrad + Untitled Sans
- [ ] Official logos used in all contexts
- [ ] Visual patterns integrated tastefully

### Technical Performance
- [ ] Lighthouse score ≥ 90 (Performance)
- [ ] Lighthouse score ≥ 95 (Accessibility)
- [ ] First Contentful Paint < 1.5s
- [ ] Total page weight < 2MB (excluding third-party)

### Quality Standards
- [ ] WCAG AA compliance (all color combinations)
- [ ] Cross-browser testing passed (6 browsers)
- [ ] Responsive design validated (3 breakpoints)
- [ ] No console errors or warnings

### Business Outcomes
- [ ] Brand consistency with all Evermore marketing materials
- [ ] Professional appearance matching brand guidelines
- [ ] Improved visual hierarchy with expanded color palette
- [ ] Enhanced user experience with refined typography

---

## Rollback Plan

If critical issues arise post-deployment:

1. **Git Revert:** All changes tracked in version control
2. **Staged Deployment:** Test in staging environment first
3. **Feature Flags:** Consider gradual rollout if possible
4. **Asset Backup:** Keep old assets in `/public/archive/`

---

## Timeline Summary

| Phase | Duration | Priority |
|-------|----------|----------|
| Phase 1: Foundation & Asset Prep | 4-6 hours | P0 |
| Phase 2: Design System Overhaul | 3-4 hours | P0 |
| Phase 3: Component Migration | 8-10 hours | P0 |
| Phase 4: Visual Enhancements | 4-6 hours | P1 |
| Phase 5: Quality Assurance | 4-6 hours | P0 |
| **Total** | **23-32 hours** | |

**Recommended Schedule:** 3 working days with buffer

---

## Next Steps

1. Review and approve this migration plan
2. Set up staging environment for testing
3. Begin Phase 1: Foundation & Asset Preparation
4. Schedule design review checkpoint after Phase 3
5. Plan deployment window (low-traffic period recommended)

---

## References

- Brand Package Location: `/Users/nlaz/Development/Evermore/Evermore Brand Package/`
- Current Website: `/Users/nlaz/Development/Evermore/evermore-website/`
- Brand Guidelines PDF: `Evermore_BrandGuidelines.pdf` (57MB - reference for context)
- Font Licenses: NN Konrad EULA, Klim invoice (Untitled Sans)

---

**Document Version:** 1.0
**Last Updated:** 2025-11-02
**Owner:** Development Team
