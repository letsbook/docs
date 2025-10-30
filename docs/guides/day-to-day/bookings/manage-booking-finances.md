---
sidebar_position: 3
---

# Manage booking finances

:::danger[Draft page]
This page is still being written and may contain incomplete or inaccurate information.
:::

Handle payments, refunds, and financial records for individual bookings through the Finance tab.

## Send a payment request

Request payment for unpaid or partially paid bookings.

1. Open the booking
2. Go to the **Finance** tab
3. Click **Send payment request**
4. Set the payment deadline
5. Click **Send**

The customer receives an email with a secure payment link. You can track payment status in the Finance tab.

:::tip[When to use payment requests]

- Collecting remaining balance after a down payment
- Requesting payment for manually added bookings
- After editing a booking that changed the price
  :::

## Add payment link to confirmation email

When manually adding a booking, include a payment link directly in the confirmation email:

1. Create the booking (steps 1-4 in [add booking](/guides/day-to-day/bookings/add-booking))
2. At confirmation, toggle **Add payment link in email**
3. Set the **Payment deadline**
4. Click **Confirm Booking**

The customer gets the confirmation email with an embedded payment link.

## Record cash or bank transfer payments

If customers pay outside the system (cash, direct bank transfer), register it manually:

1. Open the booking
2. Go to **Finance** tab
3. Click **Register payment**
4. Select payment method (cash, bank transfer, etc.)
5. Enter amount and any notes
6. Click **Save**

The booking status updates automatically based on the amount paid.

## Process refunds

Refund customers directly from your payment provider's dashboard:

1. Open the booking
2. Go to **Finance** tab
3. Click on the payment or deposit you want to refund
4. This opens your payment provider's dashboard (Stripe or Mollie)
5. Process the refund there

The refund appears in the Finance tab once processed. Learn more about [refunds and disputes](/guides/settings/payments/receive-payments#refunds-and-disputes).

## View payment history

The Finance tab shows all financial activity for a booking:

- Payment attempts and status
- Successful payments with timestamps
- Refunds and chargebacks
- Outstanding balances
- Deposit status

## Handle pricing changes

When editing a booking changes the price:

1. Save the edited booking
2. Check the new total in Finance tab
3. Choose your next step:
    - Send a payment request for additional amount
    - Register a cash payment if already collected
    - Process a refund if the price decreased

Learn more in [edit or cancel a booking](/guides/day-to-day/bookings/edit-or-cancel-a-booking).
