# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for Let's Book, a boat rental booking system. The site serves as both
user documentation and API documentation for the platform.

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
- **API Documentation**: `openapi/` directory contains OpenAPI specs served via Redocusaurus
- **Release Notes**: `releases/` directory contains versioned release notes served as blog posts
- **Custom Components**: `src/components/` contains React components for the homepage

### Key Features

- **Search**: Uses `docusaurus-lunr-search` plugin for site search
- **API Docs**: Redocusaurus integration serves OpenAPI specs at `/api` route
- **Release Notes**: Configured as blog posts under `/releases` route
- **Help Integration**: HelpScout Beacon widget integrated for user support

### Content Organization

Documentation is auto-generated from folder structure via `sidebars.ts`. Main sections include:

- Getting Started guides
- Fleet Management
- Booking Forms & Integration
- Customer Management
- Pricing & Billing
- Scheduling
- Analytics & Reporting
- Account Management
- API & Advanced features

### Styling

- Custom CSS in `src/css/custom.css`
- IBM Plex Sans and Rubik fonts from Google Fonts
- Dark/light theme support with custom primary color (#081590)

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

### API Documentation

- OpenAPI specs split across multiple YAML files in `openapi/` directory
- Components organized in `schemas/`, `parameters/`, and `responses/` subdirectories
- Main spec file: `openapi/index.openapi.yaml`