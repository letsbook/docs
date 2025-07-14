# Frontend Coding Standards

---

## General TypeScript/JavaScript Style

- **Use TypeScript for all code.** Prefer strict typing and always enable `strict` mode in `tsconfig.json`.
- **Use `type` over `interface` when possible.**
- **Name files, variables, and types consistently:**
  - Files: `PascalCase` for components (`MyComponent.tsx`), `camelCase` for hooks/utilities (`useMyHook.ts`, `formatDate.ts`).
  - Types/interfaces: `PascalCase` (`User`, `BookingDetails`).
  - Variables/functions: `camelCase`.
- **Import ordering is enforced by Prettier and `@trivago/prettier-plugin-sort-imports`.** Do not manually reorder imports.
- **Use default imports and exports.** Avoid named exports.
- **Don't create `index.ts`** Just import the exact file directly
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

---

## Build and debug

- **Building the app is done using docusaurus built-in bundler.** Use `npm run build` to build the app. Never use `npm run start`.
- **Never check prettier, just fix potential issues** Use `npm run prettier` to run it.
- **Always check the types after a change** Use `npx tsc` to run it.
- **Debugging the app is done using the browser's developer tools.** Use the "Sources" tab to view and debug the code.

---

## React Component Patterns

- **Use functional components exclusively.**
- **Prefer arrow functions for components.** Example: `const MyComponent = () => {}`.
- **Component files must use the `.tsx` extension.**
- **Props must be explicitly typed with a type.**
- **Mention children explicitly in the type definition when a component accepts children.** Never use React.FC or React.FunctionComponent.
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
        <button
            className={styles.Root}
            onClick={onClick}
        >
          {title}
        </button>
    );
}

export default MyComponent;
```

## Graphics

- **Use SVG for all graphics.** Use PNG or JPG only when SVG is not possible.

---

## CSS and Styling Conventions

- **Use CSS Modules for all component styles.** File names must be `ComponentName.module.css`.
- **Class names in CSS Modules must follow the following rules:**
  - The root element must use `.Root` as its class name.
  - Elements must use `PascalCase`. Example: `.Label`.
  - Modifiers must use `camelCase`. Example: `.active`.
  - Modifiers of element must this format: `.Label_active`.
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

---

## State Management

- **Use local state (`useState`, `useReducer`) for UI-specific state.**
- **Use custom hooks to encapsulate complex state logic.**
- **Form state:** Prioritize uncontrolled components.
- **Server state and caching:** Every form component must have a `errors?: ValidationErrors` prop.
- **Any field should receive an error from the `ValidationErrors` if available.**
- **Avoid unnecessary re-renders:** Use selectors, memoization, and split atoms/hooks as needed.

---

## Security

- **Never interpolate untrusted data into the DOM.**
- **Escape all user-generated content.**
- **Avoid `dangerouslySetInnerHTML` unless absolutely necessary.**
- **Validate and sanitize all inputs.**
- **Do not expose sensitive data in the frontend code or network requests.**

---

## Quality checks

**Make sure all generated code passes the Prettier check before completing the task**
