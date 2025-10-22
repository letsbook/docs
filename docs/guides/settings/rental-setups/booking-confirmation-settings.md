# Booking confirmation settings

Control when and how customer bookings are confirmed in your system.

**Quick links:** [Pay to confirm](#pay-to-confirm) • [Down payment to confirm](#down-payment-to-confirm) • [Activate in rental setup](#activate-in-rental-setup)

Let's Book offers two confirmation methods:

- **Pay to confirm** - Requires full payment upfront (most secure, prevents no-shows)
- **Down payment to confirm** - Allows partial payment to secure bookings (lowers booking barrier for expensive or long rentals)

---

## Pay to confirm

Customers must pay the full amount before their booking is confirmed. This is the most secure method and prevents no-shows.

### Setup

1. Go to [Confirmation Methods](https://dashboard.letsbook.app/confirmation-methods)
2. Click **Add**
3. Select **when fully paid**
4. Give your method a name (e.g., "Standard confirmation")
5. Set the **draft booking timeout**: How long customers have to complete payment after starting their booking (default: 15 minutes)
6. Click **Save**

### How it works

Customer completes booking → pays full amount → booking confirmed → confirmation email sent.

### Draft booking timeout

When customers start entering their details in the booking form, the system temporarily reserves the boat. The timeout determines how long this reservation lasts.

- **15 minutes** (recommended) - Gives customers time to complete payment without holding boats too long
- Choose **Minutes/Hours/Days** based on your needs

After this period, the slot becomes available again if payment wasn't completed. This prevents boats from being unnecessarily blocked.

---

## Down payment to confirm

Customers make a partial payment to secure their booking, with the remainder due later. Use this for expensive rentals or to capture early bookings while giving customers payment flexibility.

### Setup

1. Go to [Confirmation Methods](https://dashboard.letsbook.app/confirmation-methods)
2. Click **Add**
3. Select **when a down payment is made**
4. Give your method a name (e.g., "Down payment confirmation" or "Partial payment")
5. Choose your down payment type:
    - **Percentage**: Enter a percentage of the total amount (e.g., 30%)
    - **Fixed amount**: Enter a specific amount in your currency (e.g., €50)
6. Set the **draft booking timeout** (same as pay to confirm)
7. Click **Save**

### How it works

Customer completes booking → pays down payment → booking confirmed → you collect remaining balance before the trip.

**Collecting the remaining balance:** You need to manually request payment for the remaining amount. Do this by:

- Opening the booking in your dashboard
- Going to the Finance tab
- Sending a payment request link to the customer

The customer receives an email with a secure payment link to complete their payment. Learn more about [receiving payments](/guides/settings/payments/receive-payments).

### Payment options explained

**Percentage**: Calculated over the total rental amount _excluding_ any separate deposit charges. For example, 30% of a €200 rental = €60 down payment.

**Fixed amount**: Same amount regardless of rental price. Useful for consistent booking fees across all rentals.

---

## Activate in rental setup

After creating a confirmation method, you need to activate it for specific dock-boat combinations:

1. Go to [Rental Setup](https://dashboard.letsbook.app/rental-setup)
2. Find the dock-boat combination you want to configure
3. Click on the combination to open its settings
4. In the **Confirmation method** dropdown, select your confirmation method
5. Click **Save**

Your confirmation method is now active for that specific dock-boat combination. You can use different confirmation methods for different combinations - for example, require full payment for premium boats but allow down payments for standard boats.

Learn more about how all these settings work together in [Understanding rental setup](/guides/settings/understanding-rental-setup).
