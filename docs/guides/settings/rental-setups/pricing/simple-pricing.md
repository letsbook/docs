---
title: Set up simple pricing
description: Create time-based pricing with optional passenger group rates
sidebar_position: 2
---

# Set up simple pricing

Simple pricing charges based on sailing time with optional passenger group tiers. Perfect for straightforward hourly or daily rental operations.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/pricing/simple/add" class="button button--primary" target="_blank" rel="noopener noreferrer">Create simple pricing</a>
</div>

## Basic setup

**Name:** Choose an internal name for this pricing structure (customers won't see this).

**Customer display line:** Customize what customers see on the booking form. Use the **+** button to add variables like boat model name or dock name.

**Tax settings:** Choose whether prices include or exclude tax, and select your tax rate from the dropdown.

## Rental pricing

Set your base rates based on trip duration:

**Pricing basis:** Choose what drives your rates:

- **Minutes:** Per-minute pricing
- **Hours:** Hourly rates (most common)
- **Days of 24h:** Daily rates

**Time-based rates:** Enter prices for different rental lengths. If someone books an unusual duration (like 3.5 hours), the system charges the next highest rate you've set.

### Passenger group pricing

Add different rates based on group size:

1. Toggle **"Number of passengers matters"**
2. Set passenger group ranges (e.g., 1-4 people, 5-9 people, 10+ people)
3. **Add row** to create additional price tiers

**Example:** Charge €40/hour for groups of 1-5 people, €50/hour for 6-10 people.

## Additional charges

Add extra costs on top of base rental rates:

- **Name:** Internal reference for the charge
- **Customer display:** What customers see (e.g., "Cleaning fee")
- **Tax settings:** Include/exclude tax and rate
- **Display timing:** Show during booking or only at payment

### Charge types

- **Formula:** Calculate based on variables like duration, passengers, or booking conditions
- **Fixed amount:** Set price (e.g., €20 cleaning fee)
- **Table:** Create rate tables similar to rental pricing

### Advanced conditions

Click **Add condition** to create complex pricing rules:

- Booking duration requirements
- Number of boats/passengers thresholds
- Customer type differences
- Day of week variations
- Time period restrictions
- Advance booking requirements

## Deposits

Secure bookings with refundable deposits:

- **Name:** Internal reference
- **Customer display:** What appears on booking form
- **Tax settings:** Include/exclude tax and rate

**Price options:**

- **Formula:** Calculate based on variables (e.g., 20% of total cost)
- **Fixed amount:** Set amount (e.g., €150 deposit)
- **Table:** Different deposits for different scenarios

Add conditions to apply deposits only in specific situations.

## Completing setup

1. **Save** your simple pricing structure
2. Apply it to boat-dock combinations in [rental setup](https://dashboard.letsbook.app/rental-setup)
3. Test booking flow to ensure rates calculate correctly

Create multiple simple pricing structures for different seasons, boat types, or dock locations.
