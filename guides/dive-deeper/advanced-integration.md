---
sidebar_label: Advanced website integration
sidebar_position: 60
---

# Advanced website integration

Need more control over the embed? This short guide is for developers.

When you use the [embed script](./add-to-website.md), any link that points to your booking form URL opens the form over your site. Example:

```html
<a href="https://<your-slug>.letsbook.app/en-us/form">Book now</a>
```

### URL parameters

Pass URL parameters to prefill and filter the form.

| Name                 | Type                           | Description                                                                                    |
| -------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| `pickupDate`         | string (YYYY-MM-DD)            | Start date of the booking. Time is selected later based on availability and schedule.          |
| `dockId`             | string (UUID)                  | Dock ID (Dock settings > Show ID).                                                             |
| `boatModelId`        | string (UUID)                  | Boat model ID (Inventory > Boats > [Boat model] > Show ID).                                    |
| `numberOfBoats`      | integer                        | Number of boats to preselect. If not available, the form will show an error later in the flow. |
| `numberOfPassengers` | integer                        | Number of passengers (if enabled).                                                             |
| `couponCode`         | string                         | Coupon code to prefill. It will be validated.                                                  |
| `partnerCode`        | string                         | Tracks bookings made through partner or referral sites.                                        |
| `showCouponForm`     | boolean (1 or 0)               | Show the coupon code form immediately on open.                                                 |
| `showLoginForm`      | boolean (1 or 0)               | Show the login panel on open.                                                                  |
| `forceLogin`         | boolean (1 or 0)               | Require login before any interaction. Useful for memberships.                                  |
| `filterDocks`        | string (comma separated UUIDs) | Restrict visible docks. Find IDs in Dock detail > Show ID.                                     |
| `filterBoatModels`   | string (comma separated UUIDs) | Restrict visible boat models. Find IDs in Boat model detail > Show ID.                         |

### JavaScript control

Use JavaScript for advanced control. The API is exposed via a global `LetsBook` after the `lb-ready` event fires.

**Methods**

| Method name             | Description                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `show(config): void`    | Show the booking form. Optionally pass a config object. The config supports the same keys as the URL parameters above.                           |
| `hide(): void`          | Hide the booking form.                                                                                                                           |
| `destroy(): () => void` | Remove the booking form embed and the `LetsBook` global. The returned function can be called to reinitialize the booking form embed when needed. |

**Listening to events**

Events are dispatched on `window`. To show the form as soon as it loads:

```js
window.addEventListener('lb-ready', function () {
    LetsBook.show();
});
```

**Event types**

| Event type          | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `lb-ready`          | The booking form loaded and `LetsBook` is available.                               |
| `lb-show`           | The booking form is shown. The id is available on `event.detail`.                  |
| `lb-hide`           | The booking form is hidden. The id is available on `event.detail`.                 |
| `lb-navigate`       | The user navigates within the form. Use it to forward data to your analytics tool. |
| `lb-payment-method` | The user chose a payment method.                                                   |
| `lb-complete`       | The user completed the booking.                                                    |
