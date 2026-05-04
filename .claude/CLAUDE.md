# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a Docusaurus-based documentation website for Let's Book, a boat rental booking system. The site serves as both user documentation and API documentation for the platform.

**What Let's Book does:** All-in-one SaaS for managing boat rentals - bookings, scheduling, payments, fleet tracking, customer communication, and optional self-service hardware.

**Your job:** Help operators understand HOW to use features, not WHY they exist. Get them working efficiently, fast. Audience is boat rental operators and boat club managers who need practical, actionable guidance.

## Development commands

### Local development

```bash
npm start
```

Starts development server with live reload. Note: Search functionality only works in build mode.

### Build

```bash
npm build
```

Generates static content into the `build` directory.

### Code quality

```bash
npm run typecheck        # TypeScript type checking
npm run prettier-check   # Check code formatting
npm run prettier         # Format code with Prettier
```

### Other commands

```bash
npm run serve           # Serve built site locally
npm run clear           # Clear Docusaurus cache
npm run deploy          # Deploy to GitHub Pages
```

### When to run quality commands

Only run build/format/type-check commands when changing files with one of the following extensions: `.tsx`, `.ts`, `.css`, `.mdx`.

- **Build:** `npm run build` (never use watch mode)
- **Format:** `npm run prettier` (always run before completing)
- **Type check:** `npx tsc` (run after all changes)

## Project architecture

### Core structure

- **Docusaurus configuration**: `docusaurus.config.ts` - Main configuration with site metadata, plugins, and theme settings
- **Content**: `docs/` directory contains all documentation organized by feature areas
- **API documentation**: `api/` directory contains OpenAPI specs served via Redocusaurus
- **Release notes**: `releases/` directory contains versioned release notes served as blog posts
- **Custom components**: `src/components/` contains React components that are used throughout the docs

### Key features

- **Guides**: Description of all features and how to use them. Maps to the `/guides` route
- **Courses**: More strategic documents on how to improve your company, available at `/courses`
- **API docs**: Redocusaurus integration serves OpenAPI specs at `/api` route
- **Release notes**: Configured as blog posts under `/releases` route
- **Help integration**: HelpScout Beacon widget integrated for user support

### Content organization

Documentation is auto-generated from folder structure via `sidebars.ts`.

### Styling

- Custom CSS in `src/css`.
    - Content related things (default styling of text and images) goes into `content.css`
    - Footer styling: `footer.css`
    - Menu tweaks (main navigation): `menu.css`
    - Everything else in `custom.css`
- IBM Plex Sans and Rubik fonts from Google Fonts
- Only light theme support with custom primary color (#081590)

## Development notes

### Deployment

- Automatic deployment on push to `main` branch
- Deployed to GitHub Pages at `letsbook.github.io`
- Environment variables: `HELPSCOUT_BEACON_ID` for help widget

### Content editing

- Documentation files are Markdown in `docs/` folder
- Release notes are Markdown in `releases/` folder with date-based naming
- Images are stored close to the content they're used in
- Edit URLs configured for GitHub integration (disabled in production)

### Release notes

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

### Video component

**Use InlineVideoPlayer for embedding mp4 videos in documentation.**

1. Import the component and the video file as a module:

```jsx
import InlineVideoPlayer from '@site/src/components/InlineVideoPlayer';

import myVideo from '../graphics/my_video.mp4';
```

2. Use the component with curly braces (not a string path):

```jsx
<InlineVideoPlayer videoSrc={myVideo} />
```

Videos autoplay, loop, and are muted. Store mp4 files in the nearest `graphics/` folder.

For YouTube videos, use `YoutubeVideoPlayer` with a `videoId` prop instead.

### Button component

**ALWAYS use the Button component for any call-to-action links in markdown files.**

- Import: `import Button from '@site/src/components/Button/Button';`
- NEVER use inline HTML like `<a class="button-cta">` or custom styled anchor tags
- NEVER add button styling to custom.css
- The Button component handles all styling, target="_blank", and rel attributes automatically

Example usage:

```jsx
<Button href="https://dashboard.letsbook.app/blocks">Create blockout →</Button>
```

### Debugging

- Debug visual problems using the Playwright Browser MCP. Don't use Playwright for testing.

## Writing guidelines

### Core principles

- **Concise first, clever second** - Never sacrifice clarity for wit
- **Action-oriented** - Lead with what users should DO
- **Conversational but professional** - Like a knowledgeable colleague, not a textbook
- **Confident and direct** - No hedging with "you might want to" or "perhaps consider"

### Tone of voice

- **To the point, witty, short** - no long-winded explanations
- **Be helpfully cheeky** - Light humor that makes users smile, not groan
- **Show personality** - You're human, not a corporate robot
- **Stay practical** - Wit should enhance understanding, not distract from it
- **Respect user intelligence** - They're smart operators running businesses
- **Customer-facing** for boat rental operators and boat clubs
- Focus on **HOW things work**, not WHY they work
- **Get straight to the action** - no fluff phrases like "First things first"

### Style rules

- **NEVER use em dashes (—)** - Restructure sentences instead
- **Sentence case for all headers** - "Managing your fleet" not "Managing Your Fleet"
- **Short paragraphs** - 1-3 sentences max
- **Active voice always** - "Click Save" not "Save should be clicked"
- **Present tense for instructions** - "The system sends" not "The system will send"
- No unnecessary introductory phrases
- No long bullet point descriptions
- Maximum efficiency in word choice
- **Use US dollars ($) in examples** - we're targeting the US market, so use $ instead of € in prices, costs, and financial examples

### Content structure

- **Sentence case for headers** (only first letter capital, except proper nouns)
- **Direct dashboard links at top** of each section
- Format: `https://dashboard.letsbook.app/[specific-path]`
- **Minimal explanatory text** - let users get to work quickly
- **Concrete examples** where helpful, but keep them brief
- **Step-by-step workflow** focus

### Lead with action

```
❌ "Let's Book provides a comprehensive fleet management system that allows you to..."
✅ "Add boats to your fleet from the dashboard."
```

### Use concrete examples

```
❌ "Set appropriate pricing for your various vessel types"
✅ "Charge $50/hour for kayaks, $200/hour for speedboats"
```

### Effective wit examples

```
✅ "Your customers will thank you (and actually mean it this time)"
✅ "Because nobody enjoys playing phone tag about boat availability"
✅ "Set it once, forget it exists - like that gym membership you bought"
✅ "Automated emails that don't sound like they were written by a robot having a bad day"
```

### Avoid these patterns

```
❌ "First things first" / "Let's start by" / "Now that we've covered"
❌ Long introductory explanations about why features matter
❌ Overly cute puns that slow down comprehension
❌ Corporate buzzwords: "leverage," "utilize," "seamlessly integrate"
```

### Quality standards

- All content must pass Prettier formatting
- Maintain existing anchor links when rewriting
- Preserve page titles exactly as written

### Content checklist

Before publishing any content, verify:

- [ ] Gets to the point within first sentence
- [ ] Includes actionable steps or dashboard links
- [ ] Uses sentence case for headers
- [ ] No em dashes anywhere
- [ ] Wit enhances (doesn't hinder) understanding
- [ ] Passes Prettier check
- [ ] TypeScript compiles without errors

## API documentation

- OpenAPI specs split across multiple YAML files in `api/` directory
- Components organized in `schemas/`, `parameters/`, and `responses/` subdirectories
- Main spec file: `api/index.openapi.yaml`
- **ALWAYS update the changelog** when making API changes (new endpoints, new properties, etc.)

### API conventions

When adding or editing endpoints, follow these conventions so new routes stay consistent with the rest of the API.

**URL paths**

- Use **kebab-case** for multi-word path segments: `/v1/tax-rates`, `/v1/booking-labels`, `/v1/coupons/fixed-amount`. Never camelCase or snake_case.
- Use `{id}` as the path parameter for the **primary** resource (`/v1/bookings/{id}`, `/v1/coupons/{id}`).
- Use a specific name (`{costId}`, `{code}`, etc.) only for **nested** sub-resources, e.g. `/v1/bookings/{id}/costs/{costId}`.
- Spec filenames mirror the path with `@` as separator: `paths/bookings@{id}@costs@{costId}.yaml`.

**HTTP methods**

- `GET` — list or retrieve
- `POST` — create, update (no PATCH/PUT), and state-changing actions like `confirm`, `enable`, `disable`
- `DELETE` — destructive and soft-delete operations. Respond with `204 No Content`. Do not return a `{message}` body for new endpoints.

**Operation IDs**

- `list<Resource>` — list endpoints (`listBookings`)
- `get<Resource>` — single-item retrieval (`getBooking`, never `retrieveBooking`)
- `create<Resource>` — creation (`createBooking`); for variant creates use `create<Variant><Resource>` (`createPercentageCoupon`)
- `update<Resource>` — updates (`updateBooking`)
- `remove<Resource>` / `delete<Resource>` — removal. Prefer `remove` for soft-deletes and sub-resource removals. Avoid exposing internal terminology like "archive" — use the verb the dashboard user would expect. Never mention soft-delete behavior in descriptions (no "removed X are hidden", no "archived X return 404"). To the API consumer, removed means gone.
- Action endpoints: `<verb><Resource>` (`confirmBooking`, `enableWebhook`)

**Tags**

- Title Case with spaces: `Bookings`, `Booking labels`, `Tax rates`, `Boat models`.
- Sub-resources share the parent resource's tag.

**Form schemas**

- Location: `api/components/schemas/forms/`
- Naming: `<Noun><Verb>.yaml` suffix pattern — `BookingCreate.yaml`, `CouponUpdate.yaml`, `CouponCodesAdd.yaml`. Do **not** use the reverse `<Verb><Noun>.yaml` prefix pattern.

**Response shapes**

- Envelope all success payloads under a `data` key.
- Single-item: `{data: <Resource>}`.
- Lists: `{data: [<Resource>], pagination: <Pagination>}`.
- Creates: `{data: {<resource>Id: "<uuid>"}}` (just the ID).
- `DELETE`: `204 No Content`.
- Do **not** include a `pagination` envelope on responses that return only the items the caller just created or modified.

**Monetary values**

- Always expressed as **integers in cents** of the organisation's default currency, on both request and response. Never mix major and minor units across request/response for the same field.

**Nullable fields**

- Use OpenAPI 3.1 array syntax: `type: [string, 'null']`. Do not use the 3.0-style `nullable: true`.

### API changelog

The changelog lives in `api/index.openapi.yaml` inside the `info.description` field. When making API changes:

1. Add a new date header (`## YYYY-MM-DD`) at the top if today's date isn't already there
2. Use `###` subheaders to group related changes
3. Write bullet points with links to relevant endpoints using the format `[text](/api/#tag/Tag/operation/operationId)` or `[text](/api/#operation/operationId)`
4. Keep entries concise and action-oriented ("Added new X endpoint", "Made Y property nullable")

Example:

```yaml
## 2025-12-24
### Booking labels
- Added new [booking labels](/api/#tag/Booking-labels) endpoint
- Added new `labels` property to the [booking response](/api/#operation/getBooking)
```

## TypeScript/JavaScript style

- **Use TypeScript for all code.** Prefer strict typing and always enable `strict` mode in `tsconfig.json`.
- **Use `type` over `interface` when possible.**
- **Name files, variables, and types consistently:**
    - Files: `PascalCase` for components (`MyComponent.tsx`), `camelCase` for hooks/utilities (`useMyHook.ts`, `formatDate.ts`).
    - Types/interfaces: `PascalCase` (`User`, `BookingDetails`).
    - Variables/functions: `camelCase`.
- **Import ordering is enforced by Prettier and `@trivago/prettier-plugin-sort-imports`.** Do not manually reorder imports.
- **Use default imports and exports.** Avoid named exports.
- **Don't create `index.ts`.** Just import the exact file directly.
- **Avoid unnecessary comments.** Code should be self-explanatory; use comments only for clarifying intent in complex logic.
- **Enforce early returns.** Avoid nested conditionals; return early for cleaner code.
- **Prefer `const` over `let` and never use `var`.**
- **Use single quotes for strings.** Enforced by Prettier.
- **Always provide explicit return types for functions and hooks.**
- **Use union types for sets of related constants.** Never use enums.
- **Handle errors with try/catch and custom error types.** Never swallow errors silently.
- **Do not use magic numbers or strings.** Extract to constants or enums.
- **Avoid using `any`.** Use `unknown` if necessary, but always narrow types as soon as possible.
- **Use destructuring for props and state.**
- **No commented-out code in committed files.**
- **Follow the Single Responsibility Principle.** Each file/module should have one clear purpose.

## React component patterns

- **Use functional components exclusively.**
- **Prefer arrow functions for components.** Example: `const MyComponent = () => {}`.
- **Component files must use the `.tsx` extension.**
- **Props must be explicitly typed with a type.**
- **Mention children explicitly in the type definition when a component accepts children.** Never use `React.FC` or `React.FunctionComponent`.
- **Prefer composition to inheritance.** Use children and render props for extensibility.
- **Use hooks for state and side effects.** Never use class components or lifecycle methods.
- **Custom hooks must be prefixed with `use` and typed.**
- **Keep components small and focused.** Extract logic into hooks or utilities when possible.
- **Avoid prop drilling.** Use context or state management for deeply nested data.
- **Use memoization (`React.memo`, `useMemo`, `useCallback`) for performance when necessary.**
- **Always handle loading, error, and empty states in UI components.**
- **Use the `clsx` library for conditional class names.** Example: `clsx(styles.Root, { [styles.active]: isActive })`.
- **Accessibility (a11y) is mandatory:**
    - Use semantic HTML elements.
    - Use `aria-*` attributes as needed.
    - All interactive elements must be keyboard accessible.
    - Use `react-aria-components` for complex widgets.
- **Do not use inline styles except for dynamic values.** Prefer CSS Modules.
- **Avoid anonymous functions in JSX when possible.** Extract handlers to named functions.

**Example:**

```tsx
import useTrans from '../hooks/ui/useTrans';

import styles from './MyComponent.module.css';

type MyComponentProps = {
    title: string;
    onClick: () => void;
};

const MyComponent = ({ title, onClick }: MyComponentProps) => {
    return (
        <button className={styles.Root} onClick={onClick}>
            {title}
        </button>
    );
};

export default MyComponent;
```

## Graphics

- **Use SVG for all graphics.** Use PNG or JPG only when SVG is not possible.

## CSS and styling conventions

- **Use CSS Modules for all component styles.** File names must be `ComponentName.module.css`.
- **Class names in CSS Modules must follow these rules:**
    - The root element must use `.Root` as its class name.
    - Elements must use `PascalCase`. Example: `.Label`.
    - Modifiers must use `camelCase`. Example: `.active`.
    - Modifiers of an element must use this format: `.Label_active`.
- **Do not use global CSS except for resets and design tokens.**
- **No inline styles except for dynamic values.**
- **Use design tokens and variables for colors, spacing, and typography.** Integrate with the design system.
- **Responsive design is required:** Use CSS media queries or utility classes for breakpoints.
- **Animations and transitions:**
    - Use CSS transitions for simple effects.
    - Keep animations performant and accessible (respect `prefers-reduced-motion`).
- **Do not use `!important` in CSS.**
- **Avoid deep selector nesting.** Keep selectors flat and component-scoped. Extract to a new React component if necessary.
- **Theme support:** Use CSS variables or context for theming; do not hardcode theme values.
- **No hardcoded pixel values for layout.** Use rem, em, or design tokens.

**Example:**

```css
/* MyComponent.module.css */
.Root {
    background: var(--color-neutral-600);
    padding: var(--spacing-medium) var(--spacing-large);
    transition: background 0.2s;
}

.selected {
    background: var(--color-neutral-500);
}
```

## Security

- **Never interpolate untrusted data into the DOM.**
- **Escape all user-generated content.**
- **Avoid `dangerouslySetInnerHTML` unless absolutely necessary.**
- **Validate and sanitize all inputs.**
- **Do not expose sensitive data in the frontend code or network requests.**
