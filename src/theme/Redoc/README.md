# Ejected Redoc theme component

This folder is an ejected copy of the `Redoc` component from
`docusaurus-theme-redoc` (swizzled with `docusaurus swizzle
docusaurus-theme-redoc Redoc --eject`). It shadows the stock component through
the `@theme/Redoc` alias.

## Why the eject is necessary

The stock theme causes a React hydration error (#418, "Hydration failed") on
every page that server-renders an API spec, such as `/api/`:

1. On the **server** build, the theme's webpack config swaps `Styles.tsx` for
   `ServerStyles.tsx` (a `NormalModuleReplacementPlugin` matches any module
   path that contains `theme/Redoc/Styles`). `ServerStyles` renders two
   `<style>` tags inside `<div class="redocusaurus-styles">` so the first
   paint has CSS before JavaScript loads.
2. On the **client** build, the stub in `Styles.tsx` renders that div empty.
3. During hydration, React 19 compares the two, treats the `<style>` children
   as a mismatch, logs error #418, and re-renders the whole Redoc tree on the
   client.

The upstream stub predates React 19. React 18 tolerated the mismatch
silently; React 19 reports it and discards the server-rendered tree.

## What is changed compared to upstream

Only `Styles.tsx` differs in behavior: the client stub now renders the div
with `dangerouslySetInnerHTML={{ __html: '' }}` plus
`suppressHydrationWarning`, so React adopts the server HTML without comparing
its children. Hydration completes cleanly.

The other files (`Redoc.tsx`, `ServerRedoc.tsx`, `index.ts`, `styles.css`)
are unmodified upstream copies, except that their relative imports now point
into `docusaurus-theme-redoc/dist/...` because the files live in this repo.
The server-side style swap keeps working: the webpack replacement matches
this folder's `Styles.tsx` path too.

## When the eject can be undone

Delete this folder (`src/theme/Redoc/`) to return to the stock theme as soon
as one of these is true:

- `docusaurus-theme-redoc` ships its own React 19 hydration fix for the
  `ServerStyles` stub (check the changelog of `redocusaurus` /
  `docusaurus-theme-redoc` on an upgrade, and look at their `Styles.tsx`).
- The `/api/` page shows no `onRecoverableError` / error #418 in the browser
  console on a production build (`npm run build && npm run serve`) after
  removing the folder.

Because this is a pinned copy, review it whenever `redocusaurus` gets a major
or minor upgrade: diff these files against the new
`node_modules/docusaurus-theme-redoc/src/theme/Redoc/` to pick up upstream
changes.
