---
title: Manage customer types
description: Create, edit, and organize customer types for your boat rental business
sidebar_position: 1
---

# Manage customer types

Create and manage different customer types to segment your audience and apply specific rules to each group.

<div class="button-container">
  <a href="https://dashboard.letsbook.app/customer-types" class="button button--primary" target="_blank" rel="noopener noreferrer">View customer types</a>
</div>

## Understanding the default types

**Guest** - The default customer type for anyone booking without an account. This type cannot be removed as it's essential for the booking system.

**Member** - Automatically assigned when a guest creates an account. Members can log in to manage their bookings and view their history.

These two types form the foundation of your customer management system. You can create additional custom types, which can be edited, removed, or reordered.

## Creating a new customer type

1. Go to [Customer types](https://dashboard.letsbook.app/customer-types)
2. Click **Add** in the bottom right
3. Configure the customer type details

### Basic information

**Name** - Choose a clear, descriptive name (e.g., "Boat Club Member", "Corporate Client", "VIP Customer")

**Abbreviation** - Short code for internal reference, maximum 3 characters (e.g., "BCM", "COR", "VIP")

**Description** - Internal note explaining who this type is for and what makes them different

### Additional settings

**Customer only has to confirm the booking** - Enable this if customers don't need to pay during booking. Useful for:

- Boat club members with monthly billing
- Corporate accounts with invoicing
- Staff bookings or test reservations

Payment can be collected later through the booking's finance tab.

## Configuring booking and cancellation rules

Each customer type can have specific booking conditions and cancellation policies. See [Set booking and cancellation rules](booking-cancellation-rules) for detailed setup instructions.

## Assigning customer types

**During booking:**

- Guests automatically get "Guest" type
- When they create an account, they become "Member" type

**Manual assignment:**

1. Go to [Customers](https://dashboard.letsbook.app/customers)
2. Find the customer and click their name
3. Click **Edit** button
4. Select the customer type from the dropdown
5. Click **Save**

**Bulk operations:**
You can't bulk-change customer types. Each customer must be updated individually.

## Using customer types with pricing

You can create different pricing for different customer types using pricing conditions. For example, give members a 20% discount or charge corporate clients different rates.

See [adding pricing conditions](../rental-setups/pricing/flexible-pricing#adding-pricing-conditions) for instructions on setting up customer type-based pricing.

## Common use cases

**Boat clubs:**

- Member type with flexible booking, no deposits, priority access
- Guest type with stricter rules and higher pricing

**Mixed operations:**

- Corporate clients with monthly billing and extended booking windows
- Walk-in customers with immediate payment and shorter durations
- Season pass holders with unlimited bookings within time slots

**Tiered memberships:**

- Silver members: book 7 days ahead, 4-hour max
- Gold members: book 14 days ahead, 8-hour max
- Platinum members: book 30 days ahead, no time limit

---

Customer types give you flexibility to serve different audiences while maintaining operational control. Start with the defaults and expand as your business grows.
