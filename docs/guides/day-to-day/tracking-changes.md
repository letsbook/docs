---
sidebar_position: 10
---

# Track changes and activity

See exactly what changed on any booking. The timeline shows who changed it and when it happened. No guesswork. Just facts.

The timeline shows:

- Who made the change (teammate, customer, or system)
- When it happened (date and time)
- What changed (with the before and after where it matters)

## Check activity on the booking

See the full history for any booking in a few clicks.

1. Open the [booking overview](https://dashboard.letsbook.app/bookings).
2. Find a booking and open it.
3. Click the Timeline tab.
4. Scroll to see every event in order, newest first.

<video autoPlay loop muted playsInline width="100%" style={{maxWidth: '100%', borderRadius: '8px', margin: '1.5rem 0', display: 'block'}}>

  <source src={require('./graphics/booking_timeline.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## What is being tracked

- **Booking created**: When a new booking is created from checkout, the dashboard or API.
- **Booking expired**: When an unpaid booking reaches its expiration and auto-cancels.
- **Booking recovered**: When a booking is paid after it expired and there was still availability.
- **Booking details updated**: When someone edits details like dock, boat, duration, etc.
- **Booking confirmed**: When the booking is confirmed by full payment, or you mark it confirmed.
- **Booking canceled**: When the booking is canceled by a teammate or the customer.
- **Booking completed**: When the rental ends and it auto-completes after the end time.
- **Coupon attached to booking**: When a coupon code is applied to the booking.
- **Coupon detached from booking**: When a coupon code is removed from the booking.
- **Labels updated**: When booking labels are updated for this booking.
- **Answers updated**: When custom question answers for the booking are changed.
