---
sidebar_position: 60
---

# Advanced translations

Through the system, you can easily insert variables into your text. This ensures that the correct details are automatically added to the content. We use the [ICU](https://en.wikipedia.org/wiki/International_Components_for_Unicode) standard.

## ICU message format in one page

ICU messages let you write one string that adapts to variables, grammar, and locale rules. If you ever used template strings like `Hello, {name}` this will feel familiar, with extra powers for plurals, choices, and date and time formatting.

Below are the essentials you need to read and write messages used in Let's Book.

### 1. Regular variables

- Syntax: `{variableName}`
- The value is injected as text. You can use many variables in one message.

**Examples:**

- `Hello {name}` → Hello Alex
- `Booking #{bookingReference} is confirmed` → Booking #A1B2C3 is confirmed
- `Your boat: {boatName}` → Your boat: Blue Lagoon

### 2. Plurals

Plural rules are locale-aware. You write one message, ICU picks the correct branch for the user’s language.

- Syntax: `{count, plural, =0 {...} one {...} other {...}}`
- Use `=0`, `=1`, etc. for exact matches when needed.
- Use named categories like `one`, `other` (and sometimes `few`, `many` in certain languages). At minimum include `other`.
- Inside plural branches, use `#` to print the formatted number.

**Examples:**

- Basic English plural:
  `{count, plural, one {You have # booking} other {You have # bookings}}`
    - 1 → You have 1 booking
    - 5 → You have 5 bookings

- With an explicit zero branch:
  `{count, plural, =0 {No bookings yet} one {# booking} other {# bookings}}`
    - 0 → No bookings yet
    - 1 → 1 booking
    - 2 → 2 bookings

- With embedded variable:
  `{count, plural, one {# seat left on {boat}} other {# seats left on {boat}}}`

Good to know: Languages like Russian or Arabic have more categories than English. Rely on `other` as a safe default and avoid hardcoding English-only grammar.

### 3. Selects

Select chooses a branch based on a string value. Use it for types, statuses, or any enumerated value.

- Syntax: `{var, select, key1 {...} key2 {...} other {...}}`
- Always include `other` as a fallback.

**Examples:**

- Status message:
  `{status, select,
  pending {Your booking is pending approval}
  confirmed {Your booking is confirmed}
  cancelled {Your booking was cancelled}
  other {Booking status: {status}}
}`

You can nest formats, for example a select inside a plural.

### 4. Dates and times

ICU can format dates and times according to the user’s locale. In Let’s Book we use react-intl, which supports the built-in styles. Prefer these styles over custom formats.

- Date syntax: `{value, date}` or `{value, date, short|medium|long|full}`
- Time syntax: `{value, time}` or `{value, time, short|medium|long|full}`
- Datetime syntax: combine date and time, e.g. `{value, date, medium} {value, time, short}`

**Examples (render depends on the viewer’s locale):**

- Dates (four different ways):
    - Short: `{start, date}` or `{start, date, short}` → e.g. 9/25/25
    - Medium: `{start, date, medium}` → e.g. Sep 25, 2025
    - Long: `{start, date, long}` → e.g. September 25, 2025
    - Full: `{start, date, full}` → e.g. Thursday, September 25, 2025

- Times (three different ways):
    - Short: `{start, time}` or `{start, time, short}` → e.g. 2:30 PM
    - Medium: `{start, time, medium}` → e.g. 2:30:00 PM
    - Long: `{start, time, long}` → e.g. 2:30:00 PM GMT+2

- Combined date and time:
    - Label + styles: `Pickup: {start, date, medium} at {start, time, short}` → e.g. Pickup: Sep 25, 2025 at 2:30 PM
    - Compact ticket style: `{start, date, short} · {start, time, short}` → e.g. 9/25/25 · 2:30 PM
    - Verbose confirmation: `{start, date, full} at {start, time, long}` → e.g. Thursday, September 25, 2025 at 2:30:00 PM GMT+2

### Putting it together

You can nest formats to cover real-world scenarios:

`{numberOfPassengers, plural,
  =0 {No guests}
  one {# guest}
  other {# guests}
} for {boatName} on {date, date, long} at {date, time, short}.`

Example render:

- 0 guests → No guests for Blue Lagoon on 25 September 2025 at 14:30.
- 3 guests → 3 guests for Blue Lagoon on 25 September 2025 at 14:30.

### Common pitfalls and tips

- Always include an `other` branch in `plural` and `select`.
- Avoid concatenation outside ICU. Put the entire sentence in one message for better translation quality.
- Test with multiple locales, counts 0/1/2/5, and a few enum values.
