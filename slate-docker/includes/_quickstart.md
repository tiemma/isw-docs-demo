
# Making a Quick Transaction

- Get an account on the payment gateway using the link [here](https://www.interswitchgroup.com/paymentgateway/)

There are various integration platforms availale

 - [Web Integration (Pop Up)]()

 - [Web Redirect]()

 - [API / SDK Integration]()

 - [QR Integration]()



 <h2>Web Integration Pop Up</h2>


 > Code samples are in javascript

You can request for a link to pop up a webpay payment terminal using a shortcode after registering on the payment gateway platform

Check out the documentation code panel to see a sample implementation


<a data-isw-payment-button data-isw-ref='yLQgIGZ3e'>
Pay using Pop Up
  <script type='text/javascript' 
    src='https://www.interswitchgroup.com/paymentgateway/public/js/webpay.js'
    data-isw-trans-amount='10000'
    data-isw-customer-ref='1545060437739'
    data-isw-customer-callback='customCallback'>
  </script>
</a>

```javascript
<a data-isw-payment-button data-isw-ref='yLQgIGZ3e'>
  <script type='text/javascript' 
    src='https://www.interswitchgroup.com/paymentgateway/public/js/webpay.js'
    data-isw-trans-amount='10000'
    data-isw-customer-ref='1545060437739'
    data-isw-customer-callback='customCallback'>
  </script>
</a>
<script>
  function customCallback(response){ 
    console.log(response);
  }
</script>
```