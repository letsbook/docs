---
title: Set roles and permissions
description: Control what team members can access and modify in your Let's Book system
sidebar_position: 2
---

# Set roles and permissions

Control what team members can access and modify in your Let's Book system by creating team roles with specific rights and limitations.

## Default team roles

Let's Book comes with several predefined roles:

- **Administrator:** Has all permissions and cannot have their permissions changed
- **Operations Manager:** Responsible for managing global planning, incoming bookings, rental settings, and payments
- **Planner:** Responsible for managing the current booking schedule
- **Dock Host:** Welcomes customers, gives instructions, and handles day-to-day operations

### Role differences

**Administrator** has unrestricted access to all system features including settings, integrations, user management, and financial reporting.

**Operations Manager** can handle nearly all operational tasks - full booking management, financial operations, customer management, and sales reporting - but cannot access system settings, user management, or account configuration.

**Planner** focuses on daily operations with booking management, customer service, and financial tasks like processing deposits and payments, but cannot manage fleet settings, add-ons, or view sales reports.

**Dock Host** handles front-line customer interactions with basic booking operations, cash payments, and trip management, but has read-only access to most areas and cannot access settings, view sales statistics, process refunds or manage revenue.

## Managing roles

### Edit existing roles

1. Go to [users](https://dashboard.letsbook.app/users) and click [roles & permissions](https://dashboard.letsbook.app/roles)
2. Select a team role and adjust the settings

### Add new role

1. Go to [users](https://dashboard.letsbook.app/users) and click [roles & permissions](https://dashboard.letsbook.app/roles)
2. Click 'Add' and adjust the settings according to your needs

### Edit role hierarchy

Determine which roles can create and delete other roles. Roles lower in the list cannot remove roles above them. Administrator is the most important role and will always exist.

1. Go to [edit hierarchy](https://dashboard.letsbook.app/roles/hierarchy)
2. Drag the roles into the desired order

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '8px', margin: '1.5rem 0', display: 'block'}}>
  <source src={require('../graphics/roles_adding_role.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

This role-based system protects your business data while ensuring your team has the access they need to provide excellent customer service.
