---
sidebar_label: Tweak custom conditions
---

# Tweak custom booking conditions

## Introduction

A new and advanced feature are the custom conditions. Condition expressions are a powerful tool that allows you to create custom booking conditions using rules. This allows you to define complex and custom conditions for when your customers can book boats.

## Purpose

Condition expressions allow you to:

- Create custom booking restrictions based on various parameters
- Implement business rules specific to your rental operation
- Combine multiple conditions using logical operators

## Setting up

- Go to [Customer Types](https://dashboard.letsbook.app/customer-types) and select the type you want to apply the condition to.
- Under the _Booking Conditions_ section, click **add condition** and choose **custom condition**.

From there, you use the syntax and variables described below. You can copy paste the variables manually or select them by pressing the green plus icon in the top right.

## Available variables

Prefix: `booking.`

| Variable           | Description                                    | Example                                                           |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------------- |
| `dock_id`          | The ID of the dock where the booking is made   | `booking.dock_id == "123e4567-e89b-12d3-a456-426614174000"`       |
| `boat_model_id`    | The ID of the boat model being booked          | `booking.boat_model_id == "52248719-c7df-4762-b7b2-bf5867cafcd0"` |
| `passengers.total` | The total number of passengers for the booking | `booking.passengers.total <= 5`                                   |
| `boats`            | The boats included in the booking              | `booking.boats > 0`                                               |
| `booked_at`        | The date and time when the booking was made    | `is_after(booking.booked_at, "2025-06-01")`                       |

### Rental period

Prefix: `booking.rental_period.`

| Variable           | Description                                     | Example                                                                    |
| ------------------ | ----------------------------------------------- | -------------------------------------------------------------------------- |
| `pickup`           | The pickup date and time                        | `is_before(booking.rental_period.pickup, "2025-06-01")`                    |
| `return`           | The return date and time                        | `is_before(booking.rental_period.pickup, "2025-06-01")`                    |
| `dates`            | The dates included in the rental period         | `"2023-06-15" in booking.rental_period.dates`                              |
| `in_hours`         | The rental period duration in hours             | `booking.rental_period.in_hours <= 4`                                      |
| `in_days`          | The rental period duration in days              | `booking.rental_period.in_days <= 2`                                       |
| `day_count`        | The number of days in the rental period         | `booking.rental_period.day_count == 1`                                     |
| `days`             | The days of the week in the rental period       | `"sat" in booking.rental_period.days`                                      |
| `overlaps_weekend` | Whether the rental period includes weekend days | `booking.rental_period.overlaps_weekend and booking.passengers.total <= 5` |

### Booking timing

Prefix: `booked_ahead.`

| Variable    | Description                                              | Example                       |
| ----------- | -------------------------------------------------------- | ----------------------------- |
| `in_hours`  | How many hours in advance the booking was made           | `booked_ahead.in_hours >= 24` |
| `in_days`   | How many full days (24h) in advance the booking was made | `booked_ahead.in_days >= 1`   |
| `day_count` | The number of days between booking and pickup            | `booked_ahead.day_count >= 1` |

Prefix: `time_until_pickup.`

| Variable    | Description                          | Example                            |
| ----------- | ------------------------------------ | ---------------------------------- |
| `in_hours`  | Hours remaining until pickup         | `time_until_pickup.in_hours >= 24` |
| `in_days`   | Days (of 24h) remaining until pickup | `time_until_pickup.in_days >= 1`   |
| `day_count` | Number of days until pickup          | `time_until_pickup.day_count >= 1` |

### Future bookings

Prefix: `future_bookings.`

| Variable                   | Description                                     | Example                                         |
| -------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `count_of`                 | Number of future bookings for the customer      | `count_of_future_bookings < 3`                  |
| `total_duration.in_hours`  | Total duration of future bookings in hours      | `future_bookings.total_duration.in_hours <= 12` |
| `total_duration.in_days`   | Total duration of future bookings in days (24h) | `future_bookings.total_duration.in_days <= 5`   |
| `total_duration.day_count` | Total number of days of future bookings         | `future_bookings.total_duration.day_count <= 5` |

### Future bookings by day

Prefix: `future_bookings.count_per_day.`

| Variable  | Description                                          | Example                                      |
| --------- | ---------------------------------------------------- | -------------------------------------------- |
| `mon`     | Number of future bookings on Mondays                 | `future_bookings.count_per_day.mon <= 1`     |
| `tue`     | Number of future bookings on Tuesdays                | `future_bookings.count_per_day.tue <= 1`     |
| `wed`     | Number of future bookings on Wednesdays              | `future_bookings.count_per_day.wed <= 1`     |
| `thu`     | Number of future bookings on Thursdays               | `future_bookings.count_per_day.thu <= 1`     |
| `fri`     | Number of future bookings on Fridays                 | `future_bookings.count_per_day.fri <= 1`     |
| `sat`     | Number of future bookings on Saturdays               | `future_bookings.count_per_day.sat <= 1`     |
| `sun`     | Number of future bookings on Sundays                 | `future_bookings.count_per_day.sun <= 1`     |
| `weekend` | Number of future bookings on weekends                | `future_bookings.count_per_day.weekend <= 1` |
| `weekday` | Number of future bookings on weekdays (mon thru fri) | `future_bookings.count_per_day.weekday <= 2` |

### Future booking duration by day

Prefix: `future_bookings.total_duration_per_day_in_hours.`

| Variable | Description                                                | Example                                                    |
| -------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `mon`    | Total hours of future bookings taking place on a Monday    | `future_bookings.total_duration_per_day_in_hours.mon <= 4` |
| `tue`    | Total hours of future bookings taking place on a Tuesday   | `future_bookings.total_duration_per_day_in_hours.tue <= 4` |
| `wed`    | Total hours of future bookings taking place on a Wednesday | `future_bookings.total_duration_per_day_in_hours.wed <= 4` |
| `thu`    | Total hours of future bookings taking place on a Thursday  | `future_bookings.total_duration_per_day_in_hours.thu <= 4` |
| `fri`    | Total hours of future bookings taking place on a Friday    | `future_bookings.total_duration_per_day_in_hours.fri <= 4` |
| `sat`    | Total hours of future bookings taking place on a Saturday  | `future_bookings.total_duration_per_day_in_hours.sat <= 4` |
| `sun`    | Total hours of future bookings taking place on a Sunday    | `future_bookings.total_duration_per_day_in_hours.sun <= 4` |

### Bookings in same month/year

| Variable                                                  | Description                                                  | Example                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| `count_of_bookings_in_month_of_pickup`                    | Number of bookings in the same month as pickup               | `count_of_bookings_in_month_of_pickup <= 5`                    |
| `total_duration_of_bookings_in_month_of_pickup.day_count` | Total number of days of bookings in the same month as pickup | `total_duration_of_bookings_in_month_of_pickup.day_count <= 7` |
| `total_duration_of_bookings_in_month_of_pickup.in_hours`  | Total hours of bookings in the same month as pickup          | `total_duration_of_bookings_in_month_of_pickup.in_hours <= 24` |
| `total_duration_of_bookings_in_month_of_pickup.in_days`   | Total days (24h) of bookings in the same month as pickup     | `total_duration_of_bookings_in_month_of_pickup.in_days <= 3`   |
| `count_of_bookings_in_year_of_pickup`                     | Number of bookings in the same year as pickup                | `count_of_bookings_in_year_of_pickup <= 20`                    |

## Variable availability

When creating condition expressions, it's important to understand that a condition cannot be evaluated if not all variables used in the expression are known. This is especially important when using logical operators like `and` and `or` .

For example: - With `and` operators: If one part of the condition uses an unknown variable, the entire condition might not be evaluable, even if other parts could be determined. - With `or` operators: Similarly, if one part of the condition uses an unknown variable, the entire condition might not be evaluable.

When the expression cannot be evaluated, we'll assume the condition passes.

## Syntax and operators

The following operators are supported:

### Comparison operators

- `==` : Equal to
- `!=` : Not equal to
- `<` : Less than
- `>` : Greater than
- `<=` : Less than or equal to
- `>=` : Greater than or equal to

### Logical operators

- `and` : Logical AND
- `or` : Logical OR
- `not` : Logical NOT

### Mathematical operators

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulo (remainder) - Note: This is not a percentage sign, but represents the remainder after division

### Range or list operators

- `in` : Checks if a value is in an array or a range
- Example with array: `booking.dock_id in ["123e4567-e89b-12d3-a456-426614174000", "f47ac10b-58cc-4372-a567-0e02b2c3d479"]`
- `..` : Creates a range between two numbers.
- Example with range: `count_of_future_bookings in 0..2`

### Time comparison functions

- `is_before(date_time, comparison_value)` : Checks if a date and time is before another date/time
    - Example with date: `is_before(booking.booked_at, "2025-06-16")` - checks if booking was made before June 16, 2025
    - Example with time: `is_before(booking.rental_period.pickup, "11:59")` - checks if pickup is before 11:59 AM
    - Example with date-time: `is_before(booking.booked_at, "2025-06-16 11:59")` - checks if booking was made before 11:59 AM on June 16, 2025
- `is_after(date_time, comparison_value)` : Checks if a date and time is after another date/time
    - Example with date: `is_after(booking.booked_at, "2025-06-16")` - checks if booking was made after June 16, 2025
    - Example with time: `is_after(booking.rental_period.pickup, "11:59")` - checks if pickup is after 11:59 AM
    - Example with date-time: `is_after(booking.booked_at, "2025-06-16 11:59")` - checks if booking was made after 11:59 AM on June 16, 2025

## Comments

You can write comments in the expressions using this syntax; `/* this is a comment */`

## Complex examples

Let's implement the scenario described in the introduction:

> Members can have 1 booking in the future on a weekend day and 1 on a weekday. > However, if they book a boat for the next day and they book before 3PM, they should always be able to book a boat, > regardless of whether it's for a weekend or a weekday.

This can be written as

```python
(future_bookings.count_per_day.weekend <= 1
    and
  future_bookings.count_per_day.weekday <= 1)
or
(booked_ahead.day_count == 1 and is_before(booking.booked_at, '15:00'))

```

## Best practices

1. **Start simple**: Begin with simple conditions and gradually add complexity.
2. **Test thoroughly**: Test your expressions with different scenarios to ensure they work as expected.
3. **Use parentheses**: When combining multiple conditions, use parentheses to make the order of operations clear.
4. **Consider edge cases**: Think about special cases and how your expression should handle them.
5. **Document your expressions**: Add comments or documentation to explain complex expressions to your future self.

## Troubleshooting

If your expression isn't working as expected:

1. Check the expression for errors
2. Verify that you're using the correct variable names
3. Test with simpler expressions to isolate the issue
4. Ensure that the values you're comparing are of the same type (e.g., don't compare a date to a number)
5. Make sure the number formatting uses the English format (`.` as a decimal separator)

## Conclusion

Expressions provide a flexible way to create custom booking conditions. By combining variables, operators, and functions, you can implement complex business rules without writing code.
