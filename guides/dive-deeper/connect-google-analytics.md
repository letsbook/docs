# Google Analytics Integration

Let's Book now provides seamless Google Analytics (GA4) integration that automatically tracks page views, custom events,
and ecommerce events without requiring custom [return URLs](../booking-form/set-a-custom-return-url.md) or
manual script implementation.

## Updated Embed Script

Replace your existing Let's Book embed script with the following updated version that includes analytics functionality:

```html
<!-- Start of Let's Book widget -->
<script
    src="https://cdn.letsbook.app/assets/lb-analytics.min.js"
    type="module"
    defer
></script>
<script
    src="https://cdn.letsbook.app/assets/lb-widgets.min.js"
    type="module"
    defer
></script>
<!-- End of Let's Book widget -->
```

The key addition is the `lb-analytics.min.js` script, which enables automatic event tracking to your Google Analytics (
GA4) property.

## Automatic Event Tracking

Once the updated embed script is installed, you'll automatically receive the following events in your GA4 dashboard:

### Custom Events

- **`booking_form_open`**: Triggered when the booking form is opened
- **`booking_form_close`**: Triggered when the booking form is closed

### Page View Tracking

- **`page_view`**: Tracks navigation within the booking form using the hash as the path format:
  `<your_website_url>#<path_within_letsbook>`

### Ecommerce Events

The following standard GA4 ecommerce events are automatically tracked throughout the booking process. Each of these
events contain all financial information relevant to GA4:

- **`begin_checkout`**: When a customer starts the checkout process by completing the draft booking
- **`add_shipping_info`**: When a customer entered their personal details
- **`add_payment_info`**: When payment information is provided
- **`purchase`**: When a booking is successfully completed

## Important Changes

### No Custom Return URL Required

**Important**: Custom [return URLs](../booking-form/set-a-custom-return-url.md) (thank you pages) are no
longer needed with the new analytics integration. In fact, if you still have a custom return URL configured, the
automatic `purchase` event tracking will not work, and you would
need to implement the tracking manually.

For optimal analytics tracking, we recommend removing any custom return URLs you may have previously configured.

## Debug Mode

To troubleshoot and verify what events are being sent to Google Analytics, you can enable debug mode by adding
`?debug=true` to the analytics script URL:

```html
<script
    src="https://cdn.letsbook.app/assets/lb-analytics.min.js?debug=true"
    type="module"
    defer
></script>
```

When debug mode is active, you'll see detailed information about the events being tracked in your browser's developer
console.

## Setup Requirements

1. **Ensure GA4 or GTM is installed**: The script will automatically detect your Tag Manager (GTM) or Analytics (GA4)
   configuration you already have on your site.
2. **Update embed script**: Replace your existing Let's Book embed script with the new version above
3. **Remove custom return URLs**: If you have any custom return URLs configured, consider removing them to enable
   automatic purchase tracking
4. **Test the integration**: Use debug mode to verify events are being tracked correctly
