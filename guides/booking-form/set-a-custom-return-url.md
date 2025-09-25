---
sidebar_position: 40
sidebar_label: Redirect after booking
---

# Set a custom return URL

:::note[Analytics Integration Considerations]
Use our [automatic Google Analytics integration](../dive-deeper/connect-google-analytics.md). It tracks purchases without a return URL. Only use a custom return URL if you need a custom confirmation page.
:::

## Set it up

1. Open [Settings → General Info](https://dashboard.letsbook.app/general-info).
1. Find Custom return URL.
1. Enter the URL of your confirmation page.

:::note
When you use a custom return URL, you are responsible for sending purchase events to your analytics tool.
:::

## Return URL parameters

We append these query parameters to your return URL. Use them for receipts and analytics.

| Parameter name         | Explanation                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `lbBookingReference`   | The booking reference                                                            |
| `lbPaymentRequestId`   | A unique ID for the paid payment request                                         |
| `lbDockId`             | The ID of the dock where the trip starts                                         |
| `lbDockName`           | The name of the dock                                                             |
| `lbBoatModelId`        | The ID of the boat model the booking is for                                      |
| `lbBoatModelName`      | The name of the boat model                                                       |
| `lbNumberOfPassengers` | The number of passengers. Can be `null` when not requested.                      |
| `lbDurationInHours`    | The duration of the booking in hours                                             |
| `lbNumberOfBoats`      | The number of boats the booking is for                                           |
| `lbTotalIncVatInCents` | Total paid amount in cents, incl. VAT/tax. Excludes deposit.                     |
| `lbCurrency`           | The currency of the paid amount                                                  |
| `lbCouponCode`         | The applied coupon code. Will be `null` if no coupon is applied.                 |
| `lbPartnerCode`        | The used partner code. Will be `null` if the booking is not linked to a partner. |

## Track purchases manually (Google Analytics)

Overlay integrations have [built‑in tracking](../dive-deeper/connect-google-analytics.md). With a custom return URL, send the purchase event yourself using the query parameters above. Start with this example and adapt it to your setup.

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
