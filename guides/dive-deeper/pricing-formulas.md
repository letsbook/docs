# Working with pricing formulas

In Let's Book, you can enter formulas for discounts, commissions, and other calculations. they work very similar to how you'd use formulas / expressions in Excel. To ensure everything works correctly, it's important to use the proper notation. Below, we explain how to do this.


## Using mathematical operators

You can write formulas much like Excel. These operators are available:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`

Example: Add 7.25% sales tax to $100: `100 * 1.0725`

## Keep order with parentheses

When your formula has several steps, group them so the calculation reads the way you intend.

Example: Apply a $50 discount, then add 7.25% tax: `(100 - 50) * 1.0725`

## Use functions for caps and floors

Functions work like Excel and help you set simple guardrails.

`min(value1, value2, ...)`

Returns the smallest number.

**Example:** `min(10, 5, 8)` returns `5`.

Use it to cap a value. For example, cap a discount at $50: `min(subtotal * 0.2, 50)`

`max(value1, value2, ...)`

Returns the largest number.

**Example:** `max(10, 5, 8)` returns 10

Use it to set a floor. For example, never charge less than $100: `max(calculated_total, 100)`

## Use a period for decimals

Enter decimals with a period. Commas cause errors.

- Correct: `1.5`
- Incorrect: `1,5`

## Enter percentages as decimals

Convert percentages to decimal numbers before you use them in a formula.

- 7.25% becomes `0.0725`
- 15% becomes `0.15`
- 6% becomes `0.06`

## Quick examples you can copy

- $200 boat with 10% weekend surcharge: `200 * 1.10`
- 15% member discount capped at $75: `min(total * 0.15, 75)`
- Commission of 12% after $25 cleaning fee: `(total + 25) * 0.12`

## Common pitfalls

- Use periods, not commas, for decimals.
- Enter percentages as decimals.
- Use the right operators.
- Add parentheses when you mix steps.

Your customers will thank you, and the math adds up every time.