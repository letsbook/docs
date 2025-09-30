---
title: Set up flexible pricing
description: Create advanced formula-based pricing with complex conditions and rules
sidebar_position: 4
---

# Set up flexible pricing

Flexible pricing uses formulas and conditions to create dynamic rates based on multiple variables. Perfect for complex pricing strategies and seasonal adjustments.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/pricing/flexible/add" class="button button--primary" target="_blank" rel="noopener noreferrer">Create flexible pricing</a>
</div>

## Basic setup

**Name:** Choose an internal name for this pricing structure.

**Customer display line:** Customize what customers see on the booking form. Use the **+** button to add variables.

**Tax settings:** Choose whether prices include or exclude tax, and select your tax rate.

## Rental pricing

Set your base pricing calculation method:

### Pricing methods

**Formula:** Calculate rates based on variables

- Duration in hours
- Duration in days (24h periods)
- Number of passengers in booking
- Number of passengers on a boat
- Hours booked in advance
- Days booked in advance
- Number of nights

**Example:** €60 per hour = select "Duration in hours" and enter 60.

**Fixed amount:** One set price regardless of variables. Add conditions to make it dynamic.

**Table:** Create rate tables similar to simple pricing, with added condition support.

### Adding pricing conditions

Click **Add condition** to create complex rules:

**Available conditions:**

- **Booking duration:** Different rates for trip length
- **Number of boats:** Bulk discounts or premiums
- **Number of passengers:** Group size adjustments
- **Customer type:** Different rates for members vs guests
- **Days of the week:** Weekend vs weekday pricing
- **Time period:** Different rates for specific hours (e.g., 10 AM-1 PM)
- **Booked in advance:** Early bird or last-minute pricing
- **Every nth boat:** Apply discounts to every 2nd, 3rd boat, etc.
- **Nth boat:** Special rate for specific boat position (e.g., 3rd boat free)
- **Booked via partner:** Different rates for partner bookings

**Example conditions:**

- Monday and Wednesday: €10/hour discount
- 4-hour trips between 9 AM-2 PM: €300 discount
- Groups over 8 people: €5/person surcharge

## Pricing elements

Build complex pricing structures with multiple calculation parts:

**Add pricing element** to layer additional costs or discounts on top of base rates.

Each element can use different calculation methods (formula, fixed amount, table) and have its own conditions.

**Example structure:**

- Base rate: €50/hour
- Peak season element: +€15/hour (July-August condition)
- Group discount element: -€200 (8+ passengers condition)

## Additional charges

Add extra costs beyond base pricing:

**Name:** Internal reference for the charge
**Customer display:** What customers see during booking
**Tax settings:** Include/exclude tax and rate
**Display timing:** Show during booking or only at payment step

**Price calculation:**

- **Formula:** Calculate based on variables
- **Fixed amount:** Set fee (e.g., €30 cleaning charge)
- **Table:** Variable rates with conditions

Use **Advanced mode** for complex formulas with multiple variables.

## Deposits

Create sophisticated deposit requirements:

**Price calculation methods:**

- **Formula:** Calculate based on booking variables (e.g., 25% of total cost)
- **Fixed amount:** Set deposit amount
- **Table:** Different deposits for different scenarios

**Multiple deposit parts:** Create deposits with different calculation methods combined.

**Conditional deposits:** Apply deposits only when specific conditions are met:

- Seasonal requirements
- Booking value thresholds
- Customer type differences
- Advance booking periods

## Advanced features

**Multiple price parts:** Combine different calculation methods in one pricing structure for ultimate flexibility.

**Complex conditions:** Layer multiple conditions to create highly specific pricing rules.

**Advanced mode:** Access advanced formula options for complex mathematical calculations. See [Working with pricing formulas](../../dive-deeper/pricing-formulas) for detailed formula syntax and examples.

**Variable selection:** Use booking data in formulas:

- Duration measurements
- Passenger counts
- Dock/boat information
- Booking timing details
- Previous pricing results

## Completing setup

1. **Save** your flexible pricing structure
2. Test calculations with sample bookings to ensure formulas work correctly
3. Apply to boat-dock combinations in [rental setup](https://dashboard.letsbook.app/rental-setup)

Flexible pricing gives you complete control over dynamic rates but requires careful testing to ensure calculations work as expected across all booking scenarios.
