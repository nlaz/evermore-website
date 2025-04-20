# Evermore Website

## Funeral Coordination, Planning & Support

This is the website for Evermore, a funeral planning and support service focused on compassionate, dignified service during life's most challenging moments.

## Development

This project uses:
- Next.js (React framework)
- Bun (JavaScript runtime)
- Tailwind CSS (utility-first CSS)
- TypeScript

### Getting Started

1. Clone the repository
2. Install dependencies:
```bash
bun install
```
3. Run the development server:
```bash
bun run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable components
- `/src/styles` - Global styles
- `/src/utils` - Utility functions
- `/public` - Static assets

### Build

To build the project for production:

```bash
bun run build
```

### Design Guidelines

The website follows Evermore's brand guidelines with:
- Typography: Mortuary (headings) and Inter (body text)
- Colors: Ink Black, Forest Charcoal, Moss Olive, Soft Ivory
- Design principles: timeless, reverent, minimal, intimate

### Testing

#### Development Testing Tools

The project includes built-in testing tools:

1. Access the testing dashboard: [http://localhost:3000/testing](http://localhost:3000/testing)
2. Use the test plan in `test-plan.md` for cross-browser and device testing
3. Run Lighthouse performance tests using the guide in `lighthouse-testing.md`

#### Testing Scripts
```bash
# Run linting
bun run lint

# Run type checking
bun run typecheck

# Run tests
bun run test
```