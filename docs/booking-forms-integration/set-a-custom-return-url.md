# Set a custom return URL

## Important: Analytics Integration Considerations

**Before setting up a custom return URL**, please note that Let's Book now offers [automatic Google Analytics integration](../analytics-reporting/connect-google-analytics.md) that tracks purchase events without requiring custom return URLs.

**If you're using the new analytics integration**: Custom return URLs will disable automatic `purchase` event tracking. For optimal analytics tracking, we recommend using the automatic integration instead of custom return URLs.

**If you still need a custom return URL** (for custom tracking implementations or specific business requirements), follow these steps:

1. Go to Settings and select General Info.
2. Look for the 'Custom return URL' option.
3. Enter the url where you want to send your customers after making a successful booking.

By following these instructions, you can configure a personalized page for your customers, but remember that this will require manual implementation of purchase event tracking if you want analytics data.

**Advanced**

This is a list of parameters to the return page. As a result, you can obtain more specific statistics. :

|                      |                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------- |
| lbBookingReference   | The booking reference                                                              |
| lbPaymentRequestId   | A unique ID for the paid payment request                                           |
| lbDockId             | The ID of the dock where the trip starts                                           |
| lbDockName           | The name of the dock                                                               |
| lbBoatModelId        | The ID of the boat model the booking is for                                        |
| lbBoatModelName      | The name of the boat model                                                         |
| lbNumberOfPassengers | The number of passengers. Can be `null` when not asked.                            |
| lbDurationInHours    | The duration of the booking in hours                                               |
| lbNumberOfBoats      | The number of boats the booking is for                                             |
| lbTotalIncVatInCents | The total amount paid including VAT/TAX, but excluding the deposit.                |
| lbCurrency           | The currency of the paid amount                                                    |
| lbCouponCode         | The applied coupon code. Will be `null` when no coupon is applied.                 |
| lbPartnerCode        | The used partner code. Will be `null` when the booking is not linked to a partner. |
