---
title: Set up slot schedule
description: Create fixed departure times and durations for structured rental packages
sidebar_position: 3
---

# Set up slot schedule

Slot schedules offer fixed departure times and trip durations. Perfect for multi-day rentals, guided trips, or structured packages.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/schedules/slot/add" class="button button--primary" target="_blank" rel="noopener noreferrer">Create new slot schedule</a>
</div>

## Schedule name

Choose a descriptive internal name for your schedule. Customers won't see this name - it's purely for your organization.

**Example names:** "Summer slots", "Winter slots", "Weekend packages"

## Adding slots

Click **Add new** to create individual time slots for your schedule.

### Slot name

Give each slot a descriptive name that helps you organize different options.

**Examples for Summer slots:**
- "Morning cruise" - Early start (9:00-12:00)
- "Afternoon adventure" - Midday departure (13:00-17:00)
- "Sundowner" - Evening trip (18:00-21:00)
- "Full day explorer" - All-day rental (9:00-19:00)
- "Weekend getaway" - Multi-day (Saturday 10:00 - Sunday 18:00)

### Single day vs Multi-day slots

Choose the slot type using the toggle buttons:

**Single day:** Fixed start and end times on the same day

- **Pickup time:** When customers collect their boat (e.g., 10:00 AM)
- **Return time:** When they must bring it back (e.g., 6:00 PM)
- **Duration:** Automatically calculated (8 hours in this example)

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '8px', margin: '1.5rem 0', display: 'block'}}>
  <source src={require('../../graphics/schedules_slots_add.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Multi-day:** Rentals spanning multiple days

- **Pickup time:** Start time on first day (e.g., Friday 10:00 AM)
- **Return options:** Choose from preset options like "one night later", "2 nights later", up to "21 nights later"
- **Return time:** Final return time (e.g., Sunday 6:00 PM)
- **Example:** "Weekend getaway" slot - Saturday 10:00 AM pickup, Sunday 18:00 return (one night later)

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '8px', margin: '1.5rem 0', display: 'block'}}>
  <source src={require('../../graphics/schedules_slots_multiday.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Availability days

Set which days this slot is available:

- **Every day of the week:** Slot available daily
- **Specific days:** Choose particular days (Sunday through Saturday)

### Early pickup

Toggle to allow customers to collect boats before the scheduled pickup time:

- **Time options:** Set how early (5 minutes, hours, or days)
- **Units:** Choose Minutes, Hours, or Days (5 × 24h)
- **Example:** "5 minutes early pickup" means a 10:00 AM slot allows 9:55 AM collection.

## Completing setup

1. **Save** your slot schedule after adding all desired slots
2. Set pricing for your slots in the [pricing section](https://dashboard.letsbook.app/pricing/slots/add)
3. Connect the schedule to boats and docks in [rental setup](https://dashboard.letsbook.app/rental-setup)

Slot schedules automatically prevent overlapping bookings and give you precise control over departure times and trip lengths.
