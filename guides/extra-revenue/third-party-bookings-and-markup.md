# Third-party bookings and markup

> **⚠️ FIRST DRAFT** - This article needs review and refinement.

👉 **[Booking form settings](https://dashboard.letsbook.app/settings/booking-form)**

Embed your booking form on partner websites and accommodation sites. Automatically charge higher prices for third-party bookings while tracking where bookings come from.

## Why use third-party integration

Reach customers through hotels, campsites, tourism boards, and partner websites. They send you bookings, you handle operations. Win-win if pricing reflects the channel.

## How markup works

Set different prices for different domains automatically. When your booking form loads on a partner site, it shows their pricing tier.

**Example scenario:**
- Your website: €100/hour (standard)
- Hotel partner: €120/hour (+20% commission built in)
- Tourism portal: €115/hour (+15%)

Customers see the partner-specific price. You set it once, system handles the rest.

## Setting up third-party pricing

1. Go to [advanced integration settings](https://dashboard.letsbook.app/settings/advanced-integration)
2. Add partner domain (e.g., `beachhotel.com`)
3. Set markup percentage or fixed amount
4. Save and test

The booking form automatically detects the referring domain and adjusts prices.

## Tracking booking sources

Every booking shows where it originated:
- Direct from your website
- Partner domain name
- Embedded on which page

Filter your booking overview by source to see which partnerships perform. Track partner conversion rates and revenue.

## Embedding options

### Standard embed
Simple iframe that works anywhere. Copy code, paste into partner's website. Full guide in [add booking form to website](/guides/settings/booking-form/add-to-website).

### Branded embed
Match partner's visual style. Customize colors, fonts, logo. Covered in [style booking form](/guides/settings/booking-form/match-branding).

### Direct link with tracking
Rather than embedding, give partners a direct link with tracking parameter. Shows up in booking source.

## Partner commission strategies

### Built-in markup
Include commission in displayed price. Clean for customers, simple for partners.

**Pros:** Customer sees one price, partner doesn't handle money.
**Cons:** Higher prices might reduce conversion.

### Split payment
Customer pays you directly, you invoice partner separately for commission.

**Pros:** Lower prices, better conversion.
**Cons:** More admin, trust required.

### Referral codes
Partners get coupon codes that give customers a discount while flagging the booking source. You pay commission based on code usage.

**Pros:** Trackable, flexible.
**Cons:** Requires coupon setup, manual commission calculation.

## Best partner types

**Accommodations:** Hotels, B&Bs, campsites near water. Guests already there, boat rental is add-on entertainment.

**Tourism sites:** Official tourism boards, activity booking platforms, regional portals.

**Concierge services:** Yacht clubs, marinas, waterfront restaurants.

**Event planners:** Corporate events, team building agencies, wedding planners.

## Setting markup levels

**20-30% markup:** Accommodations with captive audience (hotel guests with limited transport options).

**10-20% markup:** Tourism portals with comparison shopping (customers check multiple options).

**5-15% markup:** Partner marinas and yacht clubs (easier customer, premium audience, but they compare).

Test and adjust based on conversion rates. Monitor if higher prices kill too many bookings.

## Technical requirements

Partners need:
- Basic website with ability to embed iframe OR
- Direct link capability

No technical integration needed. Your booking form works standalone. Full customization options in [booking form tweaks](/guides/settings/booking-form/tweaks).

## Alternative: partner bookings

For partners who want to create bookings directly in your system (without customers using your form), check [partner bookings](/guides/dive-deeper/partner-bookings).

Gives partners dashboard access to create bookings at their commission rate. More control, more trust required.
