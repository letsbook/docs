---
title: Set up weekly schedule
description: Create flexible booking windows with customizable trip durations
sidebar_position: 2
---

# Set up weekly schedule

Weekly schedules let customers book trips within your operating hours. Set the times boats are available and define trip duration options.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/schedules/week/add" class="button button--primary" target="_blank" rel="noopener noreferrer">Create new weekly schedule</a>
</div>

## Schedule name

Choose a clear internal name for your schedule. This helps you organize multiple schedules but customers won't see this name.

**Examples:** "Summer hours", "Weekend schedule", "Main dock availability"

## Set your timeline

Define when boats can be picked up and returned using the timeline interface.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '14px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('../../graphics/schedules_opening_times.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Operating hours:** Set your opening and closing times for when boats are available.

**Example:** 10 AM to 6 PM means customers can pick up anytime from 10:00 but must return by 18:00.

**Split schedule (lunch break):** Create separate time blocks for morning and afternoon (like 9 AM-12 PM and 2 PM-6 PM). Click **Add time** to add additional slots. This prevents new pickups during your break while allowing existing rentals to continue.

**Different days:** Configure each day of the week separately or copy settings across multiple days.

## Trip duration options

Choose how customers select trip length:

### Fixed lengths

Offer specific duration choices like 2, 3, 4, or 6 hours.

**Highlighted options:** Mark your preferred durations to stand out on the booking form.

**Pickup frequency:** Set how often trips can start (every 15, 30, or 60 minutes).

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '14px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('../../graphics/Schedules_fixed_lenghts.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Within range

Let the system generate all possible durations between your minimum and maximum.

**Example:** 2-6 hour range creates options for 2, 3, 4, 5, and 6-hour trips.

Choose fixed lengths for simpler choice, or within range for maximum flexibility.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '14px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('../../graphics/schedules_within_range.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Advanced settings

### Early pickup

Allow customers to collect boats before their scheduled pickup time. Useful for eager customers or operational flexibility.

### Margins around bookings

Add buffer time after each trip for boat cleaning or late returns.

**Example:** 30-minute margin gives you cleanup time between rentals and handles boats returned slightly late.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '14px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('../../graphics/schedule_advanced_settings.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Finishing setup

1. **Save** your weekly schedule
2. Go to [rental setup](https://dashboard.letsbook.app/rental-setup) to connect this schedule to specific boat and dock combinations
3. Test the booking flow to ensure times and durations work as expected

Your schedule becomes active immediately after connecting to boats and docks in rental setup.
