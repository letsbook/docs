# Setting up advanced booking conditions

## Introduction

Condition expressions are a powerful tool that allows you to create custom booking conditions using rules. This allows you to define complex and custom conditions for when your customers can book boats.

## Purpose

Condition expressions allow you to:

- Create custom booking restrictions based on various parameters
- Implement business rules specific to your rental operation
- Combine multiple conditions using logical operators

## Setting up

- Go to Customer Types and select the group you want to apply the condition to.
- Under the _Booking Conditions_ section, click **add condition** and choose **custom condition**.

From there, you use the syntax and variables described below.

## Available variables

You can use the following variables in your expressions:

- `booking.dock_id` : The ID of the dock where the booking is made

    **Example:** `booking.dock_id == "123e4567-e89b-12d3-a456-426614174000"`

- `booking.boat_model_id` : The ID of the boat model being booked

    **Example:** `booking.boat_model_id == "52248719-c7df-4762-b7b2-bf5867cafcd0"`

- `booking.passengers.total` : The total number of passengers for the booking

    **Example:** `booking.passengers.total <= 5`

- `booking.boats` : The boats included in the booking

    **Example:** `booking.boats > 0`

- `booking.booked_at` : The date and time when the booking was made

    **Example:** `is_after(booking.booked_at, "2025-06-01")`

### Rental Period

- `booking.rental_period.pickup` : The pickup date and time

    **Example:** `is_before(booking.rental_period.pickup, "2025-06-01")`

- `booking.rental_period.return` : The return date and time

    **Example:** `is_before(booking.rental_period.pickup, "2025-06-01")`

- `booking.rental_period.dates` : The dates included in the rental period

    **Example:** `"2023-06-15" in booking.rental_period.dates`

- `booking.rental_period.in_hours` : The rental period duration in hours

    **Example:** `booking.rental_period.in_hours <= 4`

- `booking.rental_period.in_days` : The rental period duration in days

    **Example:** `booking.rental_period.in_days <= 2`

- `booking.rental_period.day_count` : The number of days in the rental period

    **Example:** `booking.rental_period.day_count == 1`

- `booking.rental_period.days` : The days of the week in the rental period

    **Example:** `"sat" in booking.rental_period.days`

- `booking.rental_period.overlaps_weekend` : Whether the rental period includes weekend days

    **Example:** `booking.rental_period.overlaps_weekend and booking.passengers.total <= 5`

### Booking Timing

- `booked_ahead.in_hours` : How many hours in advance the booking was made

    **Example:** `booked_ahead.in_hours >= 24`

- `booked_ahead.in_days` : How many full days (24h) in advance the booking was made

    **Example:** `booked_ahead.in_days >= 1`

- `booked_ahead.day_count` : The number of days between booking and pickup

    **Example:** `booked_ahead.day_count >= 1`

- `time_until_pickup.in_hours` : Hours remaining until pickup

    **Example:** `time_until_pickup.in_hours >= 24`

- `time_until_pickup.in_days` : Days (of 24h) remaining until pickup

    **Example:** `time_until_pickup.in_days >= 1`

- `time_until_pickup.day_count` : Number of days until pickup

    **Example:** `time_until_pickup.day_count >= 1`

### Future Bookings

- `count_of_future_bookings` : Number of future bookings for the customer

    **Example:** `count_of_future_bookings < 3`

- `future_bookings.total_duration.in_hours` : Total duration of future bookings in hours

    **Example:** `future_bookings.total_duration.in_hours <= 12`

- `future_bookings.total_duration.in_days` : Total duration of future bookings in days (24h)

    **Example:** `future_bookings.total_duration.in_days <= 5`

- `future_bookings.total_duration.day_count` : Total number of days of future bookings

    **Example:** `future_bookings.total_duration.day_count <= 5`

### Future Bookings by Day

- `future_bookings.count_per_day.mon` : Number of future bookings on Mondays

    **Example:** `future_bookings.count_per_day.mon <= 1`

- `future_bookings.count_per_day.tue` : Number of future bookings on Tuesdays

    **Example:** `future_bookings.count_per_day.tue <= 1`

- `future_bookings.count_per_day.wed` : Number of future bookings on Wednesdays

    **Example:** `future_bookings.count_per_day.wed <= 1`

- `future_bookings.count_per_day.thu` : Number of future bookings on Thursdays

    **Example:** `future_bookings.count_per_day.thu <= 1`

- `future_bookings.count_per_day.fri` : Number of future bookings on Fridays

    **Example:** `future_bookings.count_per_day.fri <= 1`

- `future_bookings.count_per_day.sat` : Number of future bookings on Saturdays

    **Example:** `future_bookings.count_per_day.sat <= 1`

- `future_bookings.count_per_day.sun` : Number of future bookings on Sundays

    **Example:** `future_bookings.count_per_day.sun <= 1`

- `future_bookings.count_per_day.weekend` : Number of future bookings on weekends

    **Example:** `future_bookings.count_per_day.weekend <= 1`

- `future_bookings.count_per_day.weekday` : Number of future bookings on weekdays (mon thru fri)

    **Example:** `future_bookings.count_per_day.weekday <= 2`

### Future Booking Duration by Day

- `future_bookings.total_duration_per_day_in_hours.mon` : Total hours of future bookings taking place on a Monday

    **Example:** `future_bookings.total_duration_per_day_in_hours.mon <= 4`

- `future_bookings.total_duration_per_day_in_hours.tue` : Total hours of future bookings taking place on a Tuesday

    **Example:** `future_bookings.total_duration_per_day_in_hours.tue <= 4`

- `future_bookings.total_duration_per_day_in_hours.wed` : Total hours of future bookings taking place on a Wednesday

    **Example:** `future_bookings.total_duration_per_day_in_hours.wed <= 4`

- `future_bookings.total_duration_per_day_in_hours.thu` : Total hours of future bookings taking place on a Thursday

    **Example:** `future_bookings.total_duration_per_day_in_hours.thu <= 4`

- `future_bookings.total_duration_per_day_in_hours.fri` : Total hours of future bookings taking place on a Friday

    **Example:** `future_bookings.total_duration_per_day_in_hours.fri <= 4`

- `future_bookings.total_duration_per_day_in_hours.sat` : Total hours of future bookings taking place on a Saturday

    **Example:** `future_bookings.total_duration_per_day_in_hours.sat <= 4`

- `future_bookings.total_duration_per_day_in_hours.sun` : Total hours of future bookings taking place on a Sunday

    **Example:** `future_bookings.total_duration_per_day_in_hours.sun <= 4`

### Bookings in Same Month/Year

- `count_of_bookings_in_month_of_pickup` : Number of bookings in the same month as pickup

    **Example:** `count_of_bookings_in_month_of_pickup <= 5`

- `total_duration_of_bookings_in_month_of_pickup.day_count` : Total number of days of bookings in the same month as pickup

    **Example:** `total_duration_of_bookings_in_month_of_pickup.day_count <= 7`

- `total_duration_of_bookings_in_month_of_pickup.in_hours` : Total hours of bookings in the same month as pickup

    **Example:** `total_duration_of_bookings_in_month_of_pickup.in_hours <= 24`

- `total_duration_of_bookings_in_month_of_pickup.in_days` : Total days (24h) of bookings in the same month as pickup

    **Example:** `total_duration_of_bookings_in_month_of_pickup.in_days <= 3`

- `count_of_bookings_in_year_of_pickup` : Number of bookings in the same year as pickup

    **Example:** `count_of_bookings_in_year_of_pickup <= 20`

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

```
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
