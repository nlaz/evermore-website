# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Dev server: `bun run dev`
- Build: `bun run build`
- Start: `bun run start`
- Lint: `bun run lint`
- Type check: `bun run typecheck`
- Test: `bun run test`

## Tech Stack
- Next.js (React framework)
- Bun (JavaScript runtime)
- Tailwind CSS (utility-first CSS)
- TypeScript
- Jest + React Testing Library

## Brand Guidelines
- **Colors**: Ink Black (#1A1A1A), Forest Charcoal (#2E2F2C), Moss Olive (#3C3F2D), Soft Ivory (#F9F7F2)
- **Typography**: Mortuary (or similar Gothic serif) for headings, Inter (or Jost) for body text
- **Brand Feel**: Timeless, reverent, minimal, intimate with subtle animations
- **Voice**: Compassionate, grounded, respectfully direct, culturally fluent

## Code Style
- Use TypeScript with strict typing
- Prefer functional components with React hooks
- Follow kebab-case for file names, PascalCase for components
- Import order: React, external libraries, internal modules, styles
- Error handling: use try/catch with proper error logging
- Component structure: small, focused, composable
- Use SVG for icons and decorative elements
- Respect accessibility standards (WCAG 2.1 AA compliance)
- Implement responsive design with mobile-first approach

## Content Management
- Static content from Markdown files
- Optimize images with Next.js Image component
- Implement SEO best practices with metadata
- Maintain calm, respectful whitespace in layouts