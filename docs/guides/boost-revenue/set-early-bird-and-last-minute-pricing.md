---
sidebar_position: 5
---

# Set early bird and last minute pricing

Reward early bookers with discounts or charge premium rates for last-minute bookings. Time-based pricing adjusts rates automatically based on how far ahead customers book.

## How it works

Use flexible pricing with "Additional charges" to create time-based rates. Add conditions like "Booked in advance" to apply discounts or surcharges based on booking timing.

**Early bird example:** €10/hour off for bookings made 30+ days ahead.

**Last minute example:** €15/hour extra for bookings within 24 hours of departure.

## Setting up early bird discounts

1. Go to [flexible pricing](https://dashboard.letsbook.app/pricing/flexible/add)
2. Set your base rental pricing (e.g., Duration in hours × €50)
3. Scroll to **Additional charges** section and click **Add**
4. Enter name: "Early Bird discount" (internal reference)
5. Enter customer-facing line: "Early Bird discount" (what customers see)
6. Under Price, choose **Formula**
7. Set to: Duration in hours × **-10.0** (negative = discount)
8. Click **Add condition** and select **Booked in advance**
9. Choose "exactly or longer than" → **30** → **Days (30 × 24h)** before departure
10. Click **Add charge** and save your pricing structure

Customers booking 30+ days ahead automatically see "Early Bird discount -€20" on a 2-hour booking.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '8px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('./graphics/early_bird.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Setting up last minute surcharges

1. Go to [flexible pricing](https://dashboard.letsbook.app/pricing/flexible/add)
2. Set your base rental pricing
3. Under **Additional charges**, click **Add**
4. Enter name: "Last minute surcharge"
5. Enter customer-facing line: "Last minute surcharge"
6. Under Price, choose **Formula**
7. Set to: Duration in hours × **15.0** (positive = surcharge)
8. Click **Add condition** and select **Booked in advance**
9. Choose "exactly or shorter than" → **24** → **Hours** before departure
10. Click **Add charge** and save

The surcharge applies automatically for bookings under 24 hours notice.

## Prevent last-minute bookings

Rather block last-minute chaos entirely? Set minimum advance booking requirements in your [booking and cancellation rules](/guides/settings/booking-cancellation-rules#control-advance-booking-time).

## Combining strategies

Stack multiple charges in one flexible pricing structure:

**Base rate:** Duration in hours × €50

**Additional charges:**

- Early bird discount: Duration in hours × €-10 (condition: 30+ days ahead)
- Last minute surcharge: Duration in hours × €15 (condition: under 24 hours)

Result:

- **30+ days ahead:** €40/hour (discount shows on booking)
- **1-29 days ahead:** €50/hour (standard)
- **Under 24 hours:** €65/hour (surcharge shows on booking)

Each charge has its own condition. System applies all matching charges automatically.

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

Access advanced mode when setting up the charge formula. See [pricing formulas](/guides/dive-deeper/pricing-formulas) for formula syntax.

## Testing your setup

Before going live:

- Create test bookings at different advance times
- Verify calculations match expected prices
- Check booking form displays charges with correct names
- Test edge cases (exactly 30 days, exactly 24 hours)
