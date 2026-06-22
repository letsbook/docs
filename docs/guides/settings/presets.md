---
title: Cost and discount presets
sidebar_position: 13
description: Save costs and discounts once, apply them in one click
---

# Cost and discount presets

[Manage presets](https://dashboard.letsbook.app/settings/presets)

Stop retyping the same cleaning fee or loyalty discount on every booking. Presets are reusable templates you drop onto a booking's Finance tab in one click.

Two types, two tabs:

- **[Cost presets](https://dashboard.letsbook.app/settings/cost-presets)** for recurring extra charges (cleaning, fuel, late-return fee, damage)
- **[Discount presets](https://dashboard.letsbook.app/settings/discount-presets)** for recurring discounts (loyalty, birthday, partner rate)

## Create a cost preset

1. Go to [**Cost presets**](https://dashboard.letsbook.app/settings/cost-presets)
2. Click **Add preset**
3. Choose **Fixed amount** or **Percentage**
4. Enter a description (e.g. "Cleaning fee")
5. Enter the value ($40, or 15%)
6. Select **Incl. tax** or **Excl. tax** and choose a tax rate
7. Click **Save preset**

The tax setting is part of the preset, so it lands on the booking already filled in. You can still adjust it before saving the cost.

:::danger[🎥 TODO]
Record and embed a flow video of creating a cost preset.
:::

## Create a discount preset

1. Go to [**Discount presets**](https://dashboard.letsbook.app/settings/discount-presets)
2. Click **Add preset**
3. Choose **Percentage** or **Fixed amount**
4. Enter a description (e.g. "Returning customer")
5. Enter the value ($25, or 10%)
6. Click **Save preset**

Discounts have no tax setting. They subtract straight from the booking total.

:::danger[🎥 TODO]
Record and embed a flow video of creating a discount preset.
:::

## Fixed amount vs percentage

- **Fixed amount** is a set dollar figure. A $40 cleaning fee is always $40.
- **Percentage** scales with the booking. A 25% cancellation fee adds $75 on a $300 booking and $125 on a $500 one, with no recalculating per booking.

Percentages shine for cancellation fees and loyalty discounts, where the charge or discount should track the booking size. They're calculated over the booking's total as it stands right then, including any costs or discounts you've already added. The amount is locked in the moment you save it, so later edits to the booking won't recalculate it.

## Reorder presets

Click **Rearrange** and drag presets into the order you want. That's the order they show up in the picker on the booking, so put your most-used ones on top.

## Edit or delete a preset

Click any preset to change it or delete it. Deleting a preset leaves existing bookings untouched: costs and discounts already applied stay exactly as they were.

## Apply a preset to a booking

Open a booking from [Bookings](https://dashboard.letsbook.app/bookings), go to the [Finance tab](/guides/day-to-day/bookings/manage-booking-finances), click **Add costs** or **Add discount**, and pick your preset from **Quick presets**. The whole form fills in one click.

:::danger[🎥 TODO]
Record and embed a flow video of picking a preset on the Add costs / Add discount form.
:::

## Presets worth setting up

If you've typed it twice, make it a preset.

**Cost presets**

- **Cleaning fee** ($40 fixed) for boats that come back less than spotless
- **Fuel surcharge** to refill a low tank
- **Late return fee** ($25 fixed, or a percentage per hour over)
- **Cancellation fee** (25% of the booking total when someone bails last minute)
- **Damage charge** for a scratched hull, lost paddle, or missing life jacket
- **No-show fee** as a fixed amount or a percentage of the booking

**Discount presets**

- **Returning customer** (10%) for your regulars
- **Off-season rate** to nudge weekday and shoulder-season bookings
- **Club or group rate** for partner and member pricing
- **Goodwill discount** as a fixed sweetener when something went sideways
