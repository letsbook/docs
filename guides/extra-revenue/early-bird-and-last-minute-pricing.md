# Early bird and last minute pricing

> **⚠️ FIRST DRAFT** - Lola check deze nog even goed.

👉 **[Create flexible pricing](https://dashboard.letsbook.app/pricing/flexible/add)**

Reward early bookers with discounts or charge premium rates for last-minute bookings. Time-based pricing adjusts rates automatically based on how far ahead customers book.

## How it works

Use flexible pricing with the "Booked in advance" condition to create time-based rates. The system calculates days or hours between booking and departure, then applies your pricing rules.

**Early bird example:** €10/hour off for bookings made 30+ days ahead.

**Last minute example:** €15/hour extra for bookings within 24 hours of departure.

## Setting up early bird discounts

1. Go to [flexible pricing](https://dashboard.letsbook.app/pricing/flexible/add)
2. Set your base rental pricing (e.g., Duration in hours × €50)
3. Click **Add price part**
4. Choose **Formula** and set to Duration in hours × **-10** (negative for discount)
5. Click **Add condition** and select **Booked in advance**
6. Choose "exactly or longer than"
7. Enter **30** and select **Days (30 × 24h)** before departure
8. Save and connect to your rental setup

The system automatically applies the discount when customers book 30+ days ahead.

## Setting up last minute surcharges

1. Go to [flexible pricing](https://dashboard.letsbook.app/pricing/flexible/add)
2. Set your base rental pricing
3. Click **Add price part**
4. Choose **Formula** and set to Duration in hours × **15** (positive for surcharge)
5. Click **Add condition** and select **Booked in advance**
6. Choose "exactly or shorter than"
7. Enter **24** and select **Hours** before departure
8. Save and connect to your rental setup

The surcharge applies automatically for bookings made less than 24 hours before departure.

## Prevent last-minute bookings

Rather block last-minute chaos entirely? Set minimum advance booking requirements in your [booking and cancellation rules](/guides/settings/booking-cancellation-rules#control-advance-booking-time).

## Combining strategies

Stack multiple price parts in one flexible pricing structure:

**Base rate:** Duration in hours × €50

**Price parts:**
- Early bird: Duration in hours × €-10 (condition: 30+ days ahead)
- Last minute: Duration in hours × €15 (condition: under 24 hours)

Result:
- **30+ days ahead:** €40/hour
- **1-29 days ahead:** €50/hour (standard)
- **Under 24 hours:** €65/hour

Each price part has its own condition. System applies all matching parts automatically.

## Using percentages instead

For percentage-based pricing, use **Advanced mode**:

**15% early bird discount:**
```
Duration in hours * Base price * -0.15
```

**20% last minute surcharge:**
```
Duration in hours * Base price * 0.20
```

Access advanced mode when creating price parts for percentage calculations. See [pricing formulas](/guides/dive-deeper/pricing-formulas) for formula syntax.

## Testing your setup

Before going live:

1. Create test bookings at different advance times
2. Verify calculations match expected prices
3. Check booking form displays correct rates
4. Test edge cases (exactly 30 days, exactly 24 hours)

Flexible pricing calculates in real-time based on booking moment and departure time.
