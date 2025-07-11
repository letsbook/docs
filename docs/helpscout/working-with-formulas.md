# Working with formulas

In Let's Book, you can enter formulas for discounts, commissions, and other calculations. To ensure everything works correctly, it's important to use the proper notation. Below, we explain how to do this.

## Use a period (.) as the decimal separator

Let's Book only supports the use of a period (.) as a decimal separator. Do not use a comma (,), as it will cause errors in the calculation.

**Example:**

- Correct: `1.5`
- Incorrect: `1,5`

## Enter percentages as decimal numbers

When entering a percentage, you must convert it into a decimal number.

**Formula:**

**Examples:**

- 7.25% (typical U.S. sales tax) becomes `0.0725`
- 15% (standard service tip) becomes `0.15`
- 6% (common state tax) becomes `0.06`

## Using mathematical operators

You can perform basic calculations in Let's Book using the following operators:

- **Addition:** `+`
- **Subtraction:** `-`
- **Multiplication:** `*`
- **Division:** `/`

**Example:** If you want to calculate a price of $100 with 7.25% sales tax, use the following formula: `100 * 1.0725`

## Use parentheses for clear calculations

If you combine multiple calculations in one formula, use parentheses to indicate the correct order of operations.

**Example:** Suppose you want to apply a $50 discount first and then add 7.25% tax: `(100 - 50) * 1.0725`

## Using functions

For more advanced uses, you can use functions. They work very similarly to how functions work in Excel.

#### `min(value1, value2, ...)`

Returns the smallest value from the given list of numbers.

**Example:**

```
min(10, 5, 8)  // Returns 5

```

Use this function when you need to ensure a value does not exceed a certain lower limit.

#### `max(value1, value2, ...)`

Returns the largest value from the given list of numbers.

**Example:**

```
max(10, 5, 8)  // Returns 10

```

Use this function when you need to ensure a value does not go below a certain upper limit.

## Avoid common mistakes

- Do not use commas; use periods instead.
- Always enter percentages as decimal numbers.
- Ensure you use the correct mathematical operators.
- Use parentheses where necessary to maintain the correct order of operations.

Following these guidelines will ensure your formulas always work correctly in Let's Book!

Still need help?
Contact Us
Contact Us

Last updated on June 27, 2025

Toggle Search

### Categories

- Getting Started
- Bookings
- Inventory
- Rental Method
- Settings
- Account
- How to use
