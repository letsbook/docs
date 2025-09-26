---
title: Manage docks
description: Set up and configure dock locations where customers pick up boats
sidebar_position: 4
---

# Manage docks

Docks are pickup locations where customers collect their boats. Each dock has its own settings, photos, and capacity limits to help you manage operations effectively.

## Creating a dock

1. Go to your [docks overview](https://dashboard.letsbook.app/docks)
2. Click **Add** to create a new dock
3. Configure the dock details:

### Basic information

**Name:** Choose a clear, descriptive name that customers will recognize (e.g., "Marina Bay Harbor", "Downtown Waterfront")

**Description:** Add details that appear on the booking form and in customer communications - include pickup instructions, parking info, or special notes

### Location details

**Address:** Enter the complete address including:
- Country selection
- Street address (Address line 1 and optional line 2)
- City and postal code

**Map location:** The system automatically places a marker based on your address. Customers see this location in their booking confirmations. The address also determines the dock's timezone, allowing Let's Book to handle operations across multiple timezones when you have docks in different locations.

### Visual elements

**Photos:** Upload horizontal images (JPG, PNG, or WebP format) showing:
- Dock entrance and signage
- Parking area
- Key landmarks customers should look for

### Contact information

**Dock-specific contacts:** Optionally set different contact details for this location if it differs from your main business contact

### Capacity management

**Pickup and return limits:** Set the maximum number of simultaneous pickups and/or returns to manage dock congestion and workload

This prevents too many customers arriving at once and helps maintain smooth operations during busy periods.

## Viewing docked boats

On each dock's detail page, you can see:

- **Current boat placement:** Which boats are currently stationed at this dock
- **Future placements:** Check specific dates to see boat availability
- **Timeline view:** When boats will arrive or depart from this location

To modify which boats are at which dock, use the boat placement tools in the [boat management section](../boats/assign-boats-to-docks.md).

## Getting your dock ID

Each dock has a unique identifier useful for API integration and booking form customization:

1. Open the dock details page
2. Click **Show ID** 
3. Copy the dock ID for use in integrations or custom booking links

Proper dock setup ensures customers can find your location easily while giving you operational control over pickup and return scheduling.
