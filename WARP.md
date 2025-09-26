# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development Tasks
```powershell
# Install dependencies
npm install

# Start development server (runs at localhost:4321)
npm run dev

# Build production site to ./dist/
npm run build

# Preview built site locally
npm run preview

# Run Astro CLI commands
npm run astro -- --help
npm run astro add <integration>
npm run astro check
```

## Project Architecture

### Technology Stack
- **Framework**: Astro 5.x (Static Site Generator with component islands)
- **Styling**: Tailwind CSS 3.x with custom configuration
- **TypeScript**: Configured with strict mode
- **Build Tool**: Vite (via Astro)

### Key Architecture Patterns

**Component Structure**: The project follows Astro's component-based architecture with clear separation:
- **Layouts**: `src/layouts/Layout.astro` - Base HTML structure with global styles and meta tags
- **Pages**: `src/pages/index.astro` - Single-page application entry point
- **Components**: Modular UI components in `src/components/`
- **Profile Components**: Specialized profile sections in `src/components/profile/`

**Styling Architecture**: 
- Custom Tailwind theme with portfolio-specific color palette (primary: #121212, accent: #FF6F61)
- Global CSS imports through the layout
- Custom animations defined in Tailwind config (fade-in-up, pulse-slow)

**Interactive Elements**:
- Canvas-based particle animation system (`CanvasAnimation.astro` + `public/scripts/script.js`)
- Modal functionality for project showcases
- Intersection Observer API for scroll-triggered animations

### Component Organization

**Main Layout Flow**:
```
Layout.astro (base HTML, Canvas background)
├── index.astro (main page orchestration)
    ├── Header.astro
    ├── About.astro
    ├── Profile.astro (aggregates profile sections)
    │   ├── Education.astro
    │   ├── Certifications.astro
    │   ├── TechnicalSkills.astro
    │   ├── SkillsSets.astro
    │   ├── Interests&SoftSkills.astro
    │   └── Languages.astro
    ├── Projects.astro
    └── Footer.astro
```

**Animation System**: 
- Elements with `data-animate` attribute fade in using Intersection Observer
- Canvas background with particle system and connection lines
- Custom CSS animations defined in Tailwind config

## Development Guidelines

### File Naming Conventions
- Astro components use PascalCase: `Profile.astro`, `TechnicalSkills.astro`
- Scripts use camelCase: `script.js`
- Styles follow Tailwind conventions

### Code Patterns
- All Astro components use the frontmatter/template pattern
- Interactive features implemented via vanilla JavaScript in `public/scripts/`
- Responsive design using Tailwind's utility classes
- Spanish language content (`lang="es"` in HTML)

### Custom Theme Integration
The project uses a dark theme with custom colors and typography:
- Primary background: `#121212`
- Secondary surfaces: `#1E1E2E`
- Text: `#E0E0E0` primary, `#A0A0B0` secondary
- Accent: `#FF6F61`
- Font: Segoe UI system font stack

### Animation Implementation
- Scroll-triggered animations using `IntersectionObserver`
- Canvas particle system for background effects
- Modal interactions for project details
- CSS keyframes for entrance animations

## File Structure Context
- `src/`: All source code including components, layouts, pages
- `public/`: Static assets and client-side scripts
- `dist/`: Build output (generated)
- Root config files: `astro.config.mjs`, `tailwind.config.js`, `tsconfig.json`