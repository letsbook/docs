Tracking conversion with Google analytics
=========================================

You can let Google measure how many successful bookings you achieve with, for example, an ads campaign.

  

**Here's how:**

1. Make sure you're using Google Analytics (GA4) on your website already.
2. Create a 'Thank you' page on your own website. Then use the URL to that page to set up a custom return URL that customers will see when their payment was successful. Let's Book adds info about the booking and payment to that URL.
3. Create a campaign via https://ads.google.com/. Is this new to you? Maybe these tips from Google can help you.
4. Copy and paste the following script onto your 'Thank you' page. Make sure it is placed after the GA4 or GTM script. You can change this script to your liking, but it essentially forwards the relevant data, which was added to the URL by Let's Book, to Google Analytics.

  

```
<script>



(function() {



var args = new URL(document.location).searchParams;

  


// Do not record a purchase when there's no lbPaymentRequestId



if (! args.get('lbPaymentRequestId')) {



return;



}

  


var eventDetails = {



transaction_id: args.get('lbPaymentRequestId'),



value: args.get('lbTotalIncVatInCents').slice(0, -2) + '.' + args.get('lbTotalIncVatInCents').slice(-2),



currency: args.get('lbCurrency'),



coupon: args.get('lbCouponCode'),



items: [{



item_id: args.get('lbBookingReference'),



item_name: 'Payment request',



item_category: args.get('lbDockName'),



item_category2: args.get('lbBoatModelName'),



}]



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



dataLayer.push({ event: 'purchase', ecommerce: eventDetails });



purchaseEventSent = true;



}



}

  


addEventListener('load', sendPurchaseEvent);



sendPurchaseEvent();



})();



</script>


```

Still need help?
Contact Us
Contact Us

Last updated on October 12, 2023






Toggle Search

### Categories

* Getting Started
* Bookings
* Inventory
* Rental Method
* Settings
* Account
* How to use