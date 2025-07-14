# Embedding the booking form

Jump to: Embed the form • Manual configuration • Multiple widgets on a page

## Embed the booking form

Embedding the Let's Book booking form on your website takes just three steps. Using WordPress or Squarespace? We’ve got specific guides for those platforms.

1. **Add this code to your website.**

    Place the following script in your website, ideally in the`<head>` section, but it also works elsewhere.

```
<!-- Start of Let's Book widget -->
<script src="https://cdn.letsbook.app/assets/lb-widgets.min.js" type="module" defer></script>
<!-- End of Let's Book widget -->

```

2. **Link to your booking form.**

Create a button, image, or text link to your unique booking form URL. You can find this link in Step 2 of your booking form settings.

### Preselect options

Additionally, you can generate URLs that preselect certain options like language, boat model, or dock. You can also show things like the login panel or coupon code form immediately when showing the booking form.

**Partner Bookings**

Allow partners to embed the booking form directly onto their website. This makes it easy for you to track bookings coming from their website. Learn more

## Advanced configuration

If you require a more advanced integration, here's a more elaborate explanation.

Embedding the booking form consists of 3 parts: the script tag which loads the required Javascript, the optional container which holds the booking form once it is loaded, and the trigger which shows the booking form when clicked.

The trigger is nothing more than a regular anchor and may look like this : `<a href="https://<your-slug>.letsbook.app/en-us/form">Book now</a>`

### URL parameters

You can pass many parameters to the URL to bring the booking form into a specific state. Here's a list of all supported URL parameters;

| Name               | Type                                   | Description                                                                                                                                  |
| ------------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| pickupDate         | string (YYYY-MM-DD format)             | Start date of the booking. You cannot pass the time as this depends on availability and schedule settings.                                   |
| dockId             | string (UUID)                          | Dock ID (found under dock settings > Show ID)                                                                                                |
| boatModelId        | string (UUID)                          | Boat model ID (found under Inventory > Boats > [Boat model] > Show ID)                                                                       |
| numberOfBoats      | integer                                | Number of boats to preselect. Mind that they may not be available. In this case, an error will be displayed later in the booking form steps. |
| numberOfPassengers | integer                                | Number of passengers (if enabled).                                                                                                           |
| couponCode         | string                                 | Coupon code to pre-fill. It will be validated.                                                                                               |
| showCouponForm     | boolean (1 or 0)                       | Show the coupon code form immediately when opening the booking form.                                                                         |
| showLoginForm      | boolean (1 or 0)                       | Show the login panel when opening the booking form                                                                                           |
| forceLogin         | boolean (1 or 0)                       | Force login before any interaction. Useful for membership setups.                                                                            |
| filterDocks        | string (comma separated list of UUIDs) | You can find the ID by selecting a dock, and clicking on 'show ID' at the top of the dock detail page.                                       |
| filterBoatModels   | string (comma separated list of UUIDs) | You can find the ID by selecting a boat model, and clicking on 'show ID' at the top of the boat model detail page.                           |

### Container configuration

By default, all booking form configuration is encapsulated by the trigger URL. You can however, also configure the embed by placing data attributes on the container. By doing so you can configure the form for certain pages on your site instead of per trigger.

### JavaScript control

If you want advanced control over the embed, you can use JavaScript. The API is exposed through a global variable called `LetsBook` . It is available once the `lb-ready` event has fired.

**Methods**

|                         |                                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show(config): void`    | Show the booking form. Optionally pass the configuration as an object. The configuration may contain the same properties as documented under "URL parameters". |
| `hide(): void`          | Hide the booking form.                                                                                                                                         |
| `destroy(): () => void` | Remove the booking form and the `LetsBook` global variable.                                                                                                    |

**Listening to events**

Events are dispatched on the `window` . If you want to show the booking form as soon as it is loaded, you can do the following:

`window.addEventListener('lb-ready', function() { LetsBook.show(); });`

**Event types**

|               |                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `lb-ready`    | The booking form has loaded and the LetsBook variable is available                                                                        |
| `lb-show`     | The booking form is shown. The event contains the id inside `event.details`                                                               |
| `lb-hide`     | The booking form is hidden. The event contains the id inside `event.details`                                                              |
| `lb-navigate` | The user navigates within the booking form. You can listen to this event to and pass the data to the analytics software of your choosing. |

### Using multiple booking forms on a single page

It may sometimes be necessary to load multiple forms on one page. If you have multiple booking forms on the same page, you can add a `data-id` to both the container and the trigger. It can be any ID as long as they match.
