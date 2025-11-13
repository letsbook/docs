# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for Let's Book, a boat rental booking system. The site serves as both user documentation and API documentation for the platform.

## Development Commands

### Local Development

```bash
npm start
```

Starts development server with live reload. Note: Search functionality only works in build mode.

### Build

```bash
npm build
```

Generates static content into the `build` directory.

### Code Quality

```bash
npm run typecheck        # TypeScript type checking
npm run prettier-check   # Check code formatting
npm run prettier        # Format code with Prettier
```

### Other Commands

```bash
npm run serve           # Serve built site locally
npm run clear           # Clear Docusaurus cache
npm run deploy          # Deploy to GitHub Pages
```

## Project Architecture

### Core Structure

- **Docusaurus Configuration**: `docusaurus.config.ts` - Main configuration with site metadata, plugins, and theme
  settings
- **Content**: `docs/` directory contains all documentation organized by feature areas
- **API Documentation**: `api/` directory contains OpenAPI specs served via Redocusaurus
- **Release Notes**: `releases/` directory contains versioned release notes served as blog posts
- **Custom Components**: `src/components/` contains React components that are used throughout the docs

### Key Features

- **Guides**: Description of all features and how to use them. Maps to the `/guides` route
- **Courses**: More strategic documents on how to improve your company, available at `/courses`
- **API Docs**: Redocusaurus integration serves OpenAPI specs at `/api` route
- **Release Notes**: Configured as blog posts under `/releases` route
- **Help Integration**: HelpScout Beacon widget integrated for user support

### Content Organization

Documentation is auto-generated from folder structure via `sidebars.ts`.

### Styling

- Custom CSS in `src/css`. 
  - Content related things (default styling of text and images) goes into `content.css`
  - Footer styling: `footer.css`
  - Menu tweaks (main navigation): `menu.css`
  - Everything else in `custom.css`
- IBM Plex Sans and Rubik fonts from Google Fonts
- Only light theme support with custom primary color (#081590)

## Development Notes

### Deployment

- Automatic deployment on push to `main` branch
- Deployed to GitHub Pages at `letsbook.github.io`
- Environment variables: `HELPSCOUT_BEACON_ID` for help widget

### Content Editing

- Documentation files are Markdown in `docs/` folder
- Release notes are Markdown in `releases/` folder with date-based naming
- Images are stored close to the content they're used in
- Edit URLs configured for GitHub integration (disabled in production)

### Release Notes

- Release files follow the pattern `v{major}.{minor}.mdx` (e.g., `v1.15.mdx`)
- ALWAYS include a `description` field in the frontmatter
- Description should be short and punchy (max ~60 characters)
- **The `/src/data/latest-release.json` file is auto-generated** from release frontmatter during build via `scripts/generate-latest-release.js`

Example release frontmatter:
```yaml
---
slug: v1.15
date: 2025-11-04
releaseVersion: v1.15
description: Finance makeover, charge cards twice, and better discounts
---
```

The homepage banner automatically displays the most recent release based on the `date` field.

### Code inside markdown

- Markdown files that contain code must be renamed to `.mdx`
- ALWAYS extract HTML to a React component at `src/components`
- All imports should use ES6 syntax (`import`) and not the old skool `require()` function
- Imports should use the `@site/` prefix
- Imports must use single quotes

### Button Component

**ALWAYS use the Button component for any call-to-action links in markdown files.**

- Import: `import Button from '@site/src/components/Button/Button';`
- NEVER use inline HTML like `<a class="button-cta">` or custom styled anchor tags
- NEVER add button styling to custom.css
- The Button component handles all styling, target="_blank", and rel attributes automatically

Example usage:
```jsx
<Button href="https://dashboard.letsbook.app/blocks">Create blockout →</Button>
```

## Writing Guidelines

### Tone of Voice
- **To the point, witty, short** - no long-winded explanations
- **NEVER use em dashes** (no —)
- **Customer-facing** for boat rental operators and boat clubs
- Focus on **HOW things work**, not WHY they work
- **Get straight to the action** - no fluff phrases like "First things first"

### Content Structure
- **Sentence case for headers** (only first letter capital, except proper nouns)
- **Direct dashboard links at top** of each section
- **Minimal explanatory text** - let users get to work quickly
- **Concrete examples** where helpful, but keep them brief
- **Step-by-step workflow** focus

### Style Guidelines
- No unnecessary introductory phrases
- No long bullet point descriptions
- Maximum efficiency in word choice
- Use dashboard links: `https://dashboard.letsbook.app/...`
- Target audience: boat rental companies who want practical solutions
- **Use US dollars ($) in examples** - we're targeting the US market, so use $ instead of € in prices, costs, and financial examples

### API Documentation

- OpenAPI specs split across multiple YAML files in `openapi/` directory
- Components organized in `schemas/`, `parameters/`, and `responses/` subdirectories
- Main spec file: `openapi/index.openapi.yaml`