# Third-party bookings and markup

> **⚠️ FIRST DRAFT** - Lola check deze nog even goed.

👉 **[Partner booking links](https://dashboard.letsbook.app/booking-form/integration-instructions)** | **[Partner guide](/guides/dive-deeper/partner-bookings)**

Embed your booking form on partner websites. Track which bookings come from which partner and set partner-specific pricing.

## Why work with partners

Reach customers through hotels, campsites, tourism boards, and partner websites. They send you bookings, you handle operations. Track performance per partner.

## Setting up partner bookings

1. Go to [booking form settings](https://dashboard.letsbook.app/booking-form/integration-instructions)
2. Toggle "Integrate on partner website" in step 2
3. Enter unique partner identifier (e.g., partner name)
4. Copy the generated link
5. Share link and [embedding instructions](/guides/settings/booking-form/add-to-website) with partner

Each partner gets their own trackable URL. System automatically tags bookings with partner identifier.

## Tracking partner performance

See which partners drive bookings in [bookings overview](https://dashboard.letsbook.app/bookings):

- Click filter icon → Partner → Select identifier
- View only that partner's bookings
- Export to Excel for analysis
- Open booking to see partner on booking details

Compare conversion rates, booking values, and seasonal patterns per partner.

## Setting partner-specific pricing

Charge different rates per partner using flexible or slot pricing:

1. Go to your [pricing setup](https://dashboard.letsbook.app/pricing)
2. Choose Slot pricing or Flexible pricing
3. Add or edit a price rule
4. Under Conditions, select "Booked via partner"
5. Pick the partner identifier
6. Save

**Example setup:**
- Base rate: €50/hour
- Hotel partner condition: +€10/hour (20% markup built in)
- Tourism board condition: +€7.50/hour (15% markup)

Partners see their specific pricing automatically. System applies correct rate based on booking source.

## Embedding options

**Standard embed:** Partner embeds your form using iframe. Works on any website. Full guide in [add booking form to website](/guides/settings/booking-form/add-to-website).

**Branded embed:** Match partner's visual style. Customize colors, fonts, logo in [style booking form](/guides/settings/booking-form/match-branding).

**Direct link:** Share trackable URL instead of embedding. Partner links to your booking form. Still tracks booking source.

## Partner pricing strategies

**Built-in markup:** Include commission in displayed price. Customer sees one price, partner doesn't handle money. Simple for everyone.

**Split payment:** Customer pays standard rate, you invoice partner separately for commission. Lower prices, better conversion. More admin.

**Referral codes:** Combine partner links with [discount codes](/guides/extra-revenue/discount-codes-and-coupon-setup). Give customers discount while tracking source.

## Best partner types

**Accommodations:** Hotels, B&Bs, campsites near water. Guests already there, boat rental is convenient add-on.

**Tourism sites:** Official tourism boards, activity portals, regional information sites.

**Concierge services:** Yacht clubs, marinas, waterfront restaurants. Premium audience.

**Event planners:** Corporate events, team building, weddings. Group bookings.

## Markup levels

Test these ranges based on partner value:

**20-30%:** Accommodations with captive audience (hotel guests, limited alternatives)

**10-20%:** Tourism portals with comparison shopping (customers browse multiple options)

**5-15%:** Marinas and yacht clubs (premium audience but price-sensitive)

Monitor conversion rates. Adjust if higher prices reduce bookings too much.

## Advanced options

Need more control? Check [custom integrations](/guides/dive-deeper/advanced-integration) for advanced partner setups.

Want partners to create bookings directly? See [partner dashboard access](/guides/dive-deeper/partner-bookings) for giving partners backend access at their commission rate.
