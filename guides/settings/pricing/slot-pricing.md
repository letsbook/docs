---
title: Set up slot pricing
description: Create fixed prices for specific time slots and packages
sidebar_position: 3
---

# Set up slot pricing

Slot pricing sets fixed rates for specific time slots and packages. Connect prices directly to your slot schedules for structured rental offerings.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/pricing/slots/add" class="button button--primary" target="_blank" rel="noopener noreferrer">Create slot pricing</a>
</div>

## Prerequisites

Create a [slot schedule](../schedules/slot-schedule) first. Slot pricing connects to existing schedules and sets rates for each time slot.

## Basic setup

**Name:** Choose an internal name for this pricing structure (e.g., "Summer weekend packages").

**Slot schedule:** Select which slot schedule these prices apply to. Yellow dots indicate slots without pricing.

**Tax settings:** Choose whether prices include or exclude tax, and select your tax rate.

## Setting slot prices

Click on each slot to set its individual price. Each time slot in your schedule needs its own rate.

**Single day slots:** Set one price per slot (e.g., €120 for "Morning adventure" 9 AM-1 PM).

**Multi-day slots:** Set the full package price (e.g., €450 for "Weekend escape" Friday 4 PM-Sunday 6 PM).

## Pricing elements

Add costs on top of base slot prices:

**Per passenger charges:** Extra cost for each person (e.g., €5 per passenger).
**Multi-boat discounts:** Reduced rates when booking multiple boats simultaneously.
**Equipment fees:** Additional gear or service charges.

### Adding pricing elements

1. Click **Add pricing element** 
2. Choose calculation type:
   - **Formula:** Based on variables like passenger count
   - **Fixed amount:** Set fee per booking  
   - **Table:** Different rates for different scenarios
3. Add conditions if needed (e.g., only apply for groups over 6 people)

## Additional charges

Calculate extra costs beyond slot and element pricing:

**Name:** Internal reference
**Customer display:** What customers see (e.g., "Equipment rental")
**Tax settings:** Include/exclude tax and rate

**Charge options:**
- **Formula:** Calculate based on booking variables
- **Fixed amount:** Set price (e.g., €25 equipment fee)  
- **Table:** Variable rates based on conditions

Add conditions to apply charges selectively (e.g., cleaning fee only for rentals over 4 hours).

## Deposits

Secure slot bookings with deposits:

**Price calculation:**
- **Formula:** Percentage of total booking (e.g., 30% deposit)
- **Fixed amount:** Set amount (e.g., €200 deposit)
- **Table:** Different deposits for different slots/conditions

**Customer display:** Explain deposit terms (e.g., "Deposit; will be refunded within 5 days").

Use **Add condition** to require deposits only for specific slots, seasons, or booking conditions.

## Advanced features

**Multiple price parts:** Create complex pricing structures with different calculation methods combined.

**Conditional pricing:** Apply different rates based on:
- Booking duration or advance time
- Customer type (member vs guest)  
- Number of passengers or boats
- Seasonal periods
- Days of the week

## Completing setup

1. **Save** your slot pricing structure
2. Apply it to boat-dock combinations in [rental setup](https://dashboard.letsbook.app/rental-setup)
3. Test the booking flow to ensure slot prices display correctly

Slot pricing automatically prevents double-booking and gives you complete control over package rates and availability.
