---
title: Understanding rental setup
description: Connect schedules, pricing, and notifications to dock-boat combinations for complete rental control
sidebar_position: 1
---

# Understanding rental setup

Rental setup is where everything comes together. Connect your schedules, pricing, confirmation methods, and notifications to specific dock and boat model combinations.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/rental-setup" class="button button--primary" target="_blank" rel="noopener noreferrer">Open rental setup</a>
</div>

## How rental setup works

Rental setup connects your components into working rental operations:

### Required components

- **[Docks](/guides/settings/manage-docks)** - Pickup and return locations
- **[Boat models](/guides/settings/boats/manage-boats)** - Types of boats customers can rent

### Connect to each dock-boat combination

- **[Schedules](/guides/settings/rental-setups/schedules)** - When boats are available for rental
- **[Pricing](/guides/settings/rental-setups/pricing)** - Rental rates and deposit structures
- **[Confirmation methods](/guides/settings/rental-setups/booking-confirmation-settings)** - How bookings get approved
- **[Notifications](https://dashboard.letsbook.app/notifications)** - Which emails customers receive

### Optional extras

- **Waivers** - Documents customers must sign (WaiverForever integration)
- **Time periods** - Different settings for different seasons

Each dock-boat combination gets its own **rental method** containing these settings. Create multiple rental methods for seasonal pricing, different schedules, or dock-specific rules.

## Setting up rental methods

### 1. Find your dock-boat combination

In [rental setup](https://dashboard.letsbook.app/rental-setup), locate the combination you want to configure. Each row represents a dock-boat pairing.

### 2. Configure the rental method

Click on a combination to set up:

- **Time period:** When these rules apply (start and end dates)
- **Schedule:** Which schedule controls availability
- **Pricing:** Which pricing structure to use
- **Confirmation method:** How bookings get confirmed
- **Notifications:** Which message flow customers receive

### 3. Save and test

Save your configuration and test the booking form to ensure everything works correctly.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '14px', margin: '1.5rem 0', display: 'block'}}>
  <source src={require('../graphics/rental_setup.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Advanced features

### Transition periods

Handle schedule changes smoothly by allowing trips from the previous period to continue:

1. Click on a dock-boat combination
2. In **Transition period**, check "Allow trips from the previous period to continue"
3. Set overflow time (e.g., 7 days)

**Example:** Multi-day bookings picked up in June can return until August 7th, even though the new schedule starts August 1st.

### Seasonal configurations

Create different rental methods for different seasons:

- **Summer schedule + peak pricing** (June-August)
- **Winter schedule + off-season pricing** (December-February)
- **Maintenance periods** with blocked availability

### Document requirements

If you use WaiverForever integration, specify which waivers customers must sign for each dock-boat combination.

## Common patterns

- **Simple setup:** One schedule, one pricing structure for all combinations
- **Seasonal operation:** Different schedules and pricing for peak vs off-peak
- **Dock-specific rules:** Marina boats have different pricing than harbor boats
- **Boat-specific schedules:** Speedboats available daily, sailboats weekends only

## Troubleshooting

- **No availability showing?** Check that your rental method has an active time period covering today's date
- **Wrong prices?** Verify the correct pricing structure is connected to your combination
- **Missing boats?** Ensure boat models are assigned to the right docks via [boat management](/guides/settings/boats/assign-boats-to-docks)

Rental setup gives you complete control over how each dock-boat combination operates throughout the year. Start simple with one configuration, then add complexity as your business grows.
