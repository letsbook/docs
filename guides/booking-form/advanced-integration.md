# Advanced website integration

So you need a more advanced integration, we got your back. This guide is mostly aimed at developers, so be warned though :) 

When using the [embed script](./add-to-website.md), any link that points to your booking form URL works as a trigger to open the form over your website. Example: 
```html
<a href="https://<your-slug>.letsbook.app/en-us/form">Book now</a>
```

### URL parameters

You can pass many parameters to the URL to bring the booking form into a specific state. Here's a list of all supported URL parameters;

| Name                 | Type                                   | Description                                                                                                                                  |
|----------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `pickupDate`         | string (YYYY-MM-DD format)             | Start date of the booking. You cannot pass the time as this depends on availability and schedule settings.                                   |
| `dockId`             | string (UUID)                          | Dock ID (found under dock settings > Show ID)                                                                                                |
| `boatModelId`        | string (UUID)                          | Boat model ID (found under Inventory > Boats > [Boat model] > Show ID)                                                                       |
| `numberOfBoats`      | integer                                | Number of boats to preselect. Mind that they may not be available. In this case, an error will be displayed later in the booking form steps. |
| `numberOfPassengers` | integer                                | Number of passengers (if enabled).                                                                                                           |
| `couponCode`         | string                                 | Coupon code to pre-fill. It will be validated.                                                                                               |
| `partnerCode`        | string                                 | Tracks bookings made trough partner sites or referred from partner websites.                                                                 |
| `showCouponForm`     | boolean (1 or 0)                       | Show the coupon code form immediately when opening the booking form.                                                                         |
| `showLoginForm`      | boolean (1 or 0)                       | Show the login panel when opening the booking form                                                                                           |
| `forceLogin`         | boolean (1 or 0)                       | Force login before any interaction. Useful for membership setups.                                                                            |
| `filterDocks`        | string (comma separated list of UUIDs) | You can find the ID by selecting a dock, and clicking on 'show ID' at the top of the dock detail page.                                       |
| `filterBoatModels`   | string (comma separated list of UUIDs) | You can find the ID by selecting a boat model, and clicking on 'show ID' at the top of the boat model detail page.                           |

### JavaScript control

If you want advanced control over the embed, you can use JavaScript. The API is exposed through a global variable called `LetsBook` . It is available once the `lb-ready` event has fired.

**Methods**

| Method name             | Description                                                                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `show(config): void`    | Show the booking form. Optionally pass the configuration as an object. The configuration may contain the same properties as documented under "URL parameters". |
| `hide(): void`          | Hide the booking form.                                                                                                                                         |
| `destroy(): () => void` | Remove the booking form embed and the `LetsBook` global variable. The returned function should be used to reinitialize the booking form embed.                 |

**Listening to events**

Events are dispatched on the `window` . If you want to show the booking form as soon as it is loaded, you can do the following:

```js
window.addEventListener('lb-ready', function() { LetsBook.show(); });
```

**Event types**

| Event type          | Description                                                                                                                               |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `lb-ready`          | The booking form has loaded and the LetsBook variable is available                                                                        |
| `lb-show`           | The booking form is shown. The event contains the id inside `event.details`                                                               |
| `lb-hide`           | The booking form is hidden. The event contains the id inside `event.details`                                                              |
| `lb-navigate`       | The user navigates within the booking form. You can listen to this event to and pass the data to the analytics software of your choosing. |
| `lb-payment-method` | The user has chosen their payment method.                                                                                                 |
| `lb-complete`       | The user has completed the booking.                                                                                                       |