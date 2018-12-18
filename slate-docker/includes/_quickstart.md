
# Making a Quick Transaction

- Get an account on the payment gateway using the link [here](https://www.interswitchgroup.com/paymentgateway/)

There are various integration platforms availale

 - [Web Integration (Pop Up)]()

 - [Web Redirect]()

 - [API / SDK Integration]()

 - [QR Integration]()



## Web Integration Pop Up


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

## Web Redirect

> Code Samples are available

You can make a direct POST call instead of rendering a popup if you want to redirect to your payment gateway page. Set the amount by providing a value(in minor) to the amount parameter. Other payment options can be specified via other parameters(example below)

```html

<br />
<form method='post' action='https://webpay.interswitchng.com/collections/w/pay' style="margin-left: 28px">
<br />
<br />
  <strong>Redirect URL:</strong> <input name='site_redirect_url' value='./' />
  <br />
<br />

   <strong>Pay Item ID:</strong> <input name='pay_item_id' value='1767603' />
  <br />
<br />

   <strong>Transaction Reference:</strong> <input name='txn_ref' value='1545060437742' />
  <br />
<br />

   <strong>Amount:</strong> <input name='amount' value='10000' />
  <br />
<br />

   <strong>Currency:</strong> <input name='currency' value='566' />
  <br />
<br />

   <strong>Customer Name:</strong> <input name='cust_name' value='Blank Limited' />
  <br />
<br />

   <strong>Payment Item Name:</strong> <input name='pay_item_name' value='Item A' />
  <br />
<br />

   <strong>Display Mode:</strong> <input name='display_mode' value='PAGE' />
  <br />
<br />

   <strong>Merchant Code:</strong> <input name='merchant_code' value='MX10245' />
  <br />
<br />

   <strong>Hit submit and complete the transaction:</strong> <input type='submit' value='Submit Form' />
  <br />
<br />

</form>


```


<br />
<form method='post' action='https://webpay.interswitchng.com/collections/w/pay' style="margin-left: 28px">
<br />
<br />
  <strong>Redirect URL:</strong> <input name='site_redirect_url' value='./' />
  <br />
<br />

   <strong>Pay Item ID:</strong> <input name='pay_item_id' value='1767603' />
  <br />
<br />

   <strong>Transaction Reference:</strong> <input name='txn_ref' value='1545060437742' />
  <br />
<br />

   <strong>Amount:</strong> <input name='amount' value='10000' />
  <br />
<br />

   <strong>Currency:</strong> <input name='currency' value='566' />
  <br />
<br />

   <strong>Customer Name:</strong> <input name='cust_name' value='Blank Limited' />
  <br />
<br />

   <strong>Payment Item Name:</strong> <input name='pay_item_name' value='Item A' />
  <br />
<br />

   <strong>Display Mode:</strong> <input name='display_mode' value='PAGE' />
  <br />
<br />

   <strong>Merchant Code:</strong> <input name='merchant_code' value='MX10245' />
  <br />
<br />

   <strong>Hit submit and complete the transaction:</strong> <input type='submit' value='Submit Form' />
  <br />
<br />

</form>



## API / SDK Integration

Check out the full documentation [here](./docs) for more details



## QR Integration

- Get an account on the payment gateway using the link [here](https://www.interswitchgroup.com/paymentgateway/) and look for the QR integration option on the payment gateway section of the dashoard.
<br />
For more information about these possibilities, please send an email to [ipgsupport@interswitchgroup.com](mailto:ipgsupport@interswitchgroup.com)


<br />
<br />


![QR Image Dashboard](/images/qr.png)