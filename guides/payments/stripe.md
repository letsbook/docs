# Set up Stripe integration

Collect online payments with Stripe Connect directly from your Let's Book checkout.

## How to connect Stripe

### 1. Create your Stripe account {#create-your-stripe-account}

New to Stripe? Create an account. It unlocks cards, wallets like Apple Pay and Google Pay, and local methods like iDEAL depending on your region.

- Sign up at https://dashboard.stripe.com/register
- Confirm your email and complete basic business details

### 2. Log in to the Stripe dashboard {#log-in-to-the-stripe-dashboard}

You will approve the connection from Stripe.

- Open https://dashboard.stripe.com and sign in
- Keep this tab open while you connect from Let's Book

### 3. Open Let's Book integrations {#open-lets-book-integrations}

Connect from your Let's Book dashboard.

- Go to https://dashboard.letsbook.app/integrations
- Click Connect via Stripe

### 4. Approve the Stripe Connect screen {#approve-the-stripe-connect-screen}

Authorize Let's Book to manage payments on your behalf using Stripe Connect. This creates a secure connection as described in the Stripe Connect docs: https://docs.stripe.com/connect.

### 5. Return to Let's Book {#return-to-lets-book}

Stripe redirects you back to your Let's Book dashboard once the connection succeeds.

- You see Stripe listed under Connected integrations
- New online bookings can now use Stripe checkout

### 6. Complete Stripe onboarding if prompted {#complete-stripe-onboarding-if-prompted}

Stripe might need more information to enable live payouts due to KYC. You can typically accept payments immediately, but payouts start only after onboarding is finished.

- If you see a message about completing verification, follow the Stripe link and finish onboarding
- Provide any requested company documents and bank account details

### 7. Understand verification and payouts {#understand-verification-and-payouts}

Payments can succeed while verification is pending. Payouts start after Stripe approves your account.

- Keep taking bookings without interruption
- Expect your first payout once Stripe completes checks

### 8. Go live {#go-live}

When you are ready to accept real payments, set the integration to Live.

- Go to https://dashboard.letsbook.app/integrations
- Select Stripe as the current payment provider and hit Save
- Your checkout now charges real cards and supported local methods

## How payment methods show up in checkout

Your checkout shows payment methods based on two things: your [Stripe account](https://dashboard.stripe.com/settings/payment_methods), the customer's context, and our settings.

### Customer context

Stripe tailors options to the customer country, currency, and device. For example, iDEAL appears for customers in the Netherlands paying in EUR, Apple Pay appears on supported devices and browsers that pass domain verification.

**Examples**

- Charge EUR for a Dutch customer. Expect iDEAL and cards.
- Charge USD from a US customer. Expect cards and wallets like Apple Pay or Google Pay if available.
- SEPA Direct Debit appears for EUR bank debits once enabled and supported for the account.

:::info[Tip]
If a method you expect is missing, check all three layers: the Stripe account's payment method activation and capabilities, the customer's country and currency, and the device your on (ApplePay only works on Apple devices).
:::

## Learn more

- Stripe Connect overview: https://docs.stripe.com/connect
- Payment methods by country and currency: https://docs.stripe.com/connect/payment-methods
