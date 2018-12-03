

# Signatures

> Request header sample is in JSON

```
Signature = url_encode(access_url+endpoint)


{
    "Authorization": "<ACCESS_TOKEN>",
    "Timestamp": "1361281946",
    "Nonce": "634968823463411609",
    "Signature": "2cFwCfkgRR7mlIOlcjTQXCUYpLmtlKJkCb8RUzIX0-k=",
    "SignatureMethod": "SHA-256"
}
```

Signature ciphers have to be generated before a request is sent. They are included in your request headers and act as a check for all requests sent to the API.

All signatures must be hashed in base64 before they are sent. The hashing method presented here will be used to hash the string combination which will also be encoded in base64 before it is sent.

Different purchase requests have different signature contents. The signatures themselves are ***Base64*** encoded versions of the encrypted string combinations in the hashing method of your choice.

As you'd notice from the request header on the right tab, the ***Signature*** contains a hash along with its ***Signature Method***.

The data for which the signature can be generated from for different requests is illustrated below. The http method for the request is one of either ***POST, GET etc.***

The ***url*** is the encoded url version of the access url and the endpoint used. An example is stated here for any request.
<br />
<h3>***https://{ACCESS_URL}/{WHATEVER_ENDPOINT_YOU_CHOOSE}***</h3>
<br/>

You can check for the access url for testing and production [here](#endpoints)



## Basic Purchase Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret + “&” + amount + “&” + authdata
```

The signature can be generated from the ***Base64*** encoding of the cipher on the right.

## OTP Validation Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret + “&” + otp + “&” + authdata
```

The signature can be generated from the ***Base64*** encoding of the cipher on the right.

## Transaction Validation Request (VISA)

 > Code Samples

 ```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret
 ```

 The signature can be generated from the ***Base64*** encoding of the cipher on the right.

## Card Enrollment Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret
```

The signature can be generated from the ***Base64*** encoding of the cipher on the right.



