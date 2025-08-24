# Set a custom return URL

## Important: Analytics Integration Considerations

**Before setting up a custom return URL**, please note that Let's Book now
offers [automatic Google Analytics integration](../analytics-reporting/connect-google-analytics.md) that tracks purchase
events without requiring custom return URLs.

**If you're using the new analytics integration**: Custom return URLs will disable automatic `purchase` event tracking.
For optimal analytics tracking, we recommend using the automatic integration instead of custom return URLs.

**If you still need a custom return URL** (for custom tracking implementations or specific business requirements),
follow these steps:

1. Go to Settings and select General Info.
2. Look for the 'Custom return URL' option.
3. Enter the URL where you want to send your customers after making a successful booking.

By following these instructions, you can configure a personalized page for your customers, but remember that this will
require manual implementation of purchase event tracking if you want analytics data.

## Return URL parameters

This is a list of parameters that are sent to the return page. These parameters allow you to obtain more specific
statistics and tracking data.

|                      |                                                                                  |
| -------------------- | -------------------------------------------------------------------------------- |
| lbBookingReference   | The booking reference                                                            |
| lbPaymentRequestId   | A unique ID for the paid payment request                                         |
| lbDockId             | The ID of the dock where the trip starts                                         |
| lbDockName           | The name of the dock                                                             |
| lbBoatModelId        | The ID of the boat model the booking is for                                      |
| lbBoatModelName      | The name of the boat model                                                       |
| lbNumberOfPassengers | The number of passengers. Can be `null` when not requested.                      |
| lbDurationInHours    | The duration of the booking in hours                                             |
| lbNumberOfBoats      | The number of boats the booking is for                                           |
| lbTotalIncVatInCents | The total amount paid including VAT/TAX, but excluding the deposit.              |
| lbCurrency           | The currency of the paid amount                                                  |
| lbCouponCode         | The applied coupon code. Will be `null` if no coupon is applied.                 |
| lbPartnerCode        | The used partner code. Will be `null` if the booking is not linked to a partner. |

## Manually tracking bookings with Google Analytics

We offer [out-of-the-box tracking](../analytics-reporting/connect-google-analytics.md) for overlay integrations.
However, when using custom return URLs, you need to track `purchase` events manually. You can do this by reading
the [parameters](#return-url-parameters) and implementing the script below, which automatically sends purchase events to
Google Analytics. Feel free to modify it to your needs.

```html
<script>
    (function () {
        var args = new URL(document.location).searchParams;
        // Do not record a purchase when there's no lbPaymentRequestId
        if (!args.get('lbPaymentRequestId')) {
            return;
        }
        var eventDetails = {
            transaction_id: args.get('lbPaymentRequestId'),
            value:
                args.get('lbTotalIncVatInCents').slice(0, -2) +
                '.' +
                args.get('lbTotalIncVatInCents').slice(-2),
            currency: args.get('lbCurrency'),
            coupon: args.get('lbCouponCode'),
            items: [
                {
                    item_id: args.get('lbBookingReference'),
                    item_name: 'Payment request',
                    item_category: args.get('lbDockName'),
                    item_category2: args.get('lbBoatModelName'),
                },
            ],
        };
        var purchaseEventSent = false;

        function sendPurchaseEvent() {
            if (purchaseEventSent) {
                return;
            }
            // Attempt to use gtag first (GA4)
            if (typeof gtag === 'function') {
                gtag('event', 'purchase', eventDetails);
                purchaseEventSent = true;
                return;
            }
            // If gtag is not available, use dataLayer which is part of GTM
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    event: 'purchase',
                    ecommerce: eventDetails,
                });
                purchaseEventSent = true;
            }
        }

        addEventListener('load', sendPurchaseEvent);
        sendPurchaseEvent();
    })();
</script>
```
