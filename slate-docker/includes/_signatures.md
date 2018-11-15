

# Signatures

> Request header sample is in JSON

```
{
    "Authorization": "<ACCESS_TOKEN>",
    "Timestamp": "1361281946",
    "Nonce": "634968823463411609",
    "Signature": "2cFwCfkgRR7mlIOlcjTQXCUYpLmtlKJkCb8RUzIX0-k=",
    "SignatureMethod": "SHA-256"
}
```

Signature ciphers have to be generated before a request is sent. They are included in your request headers and act as a check for all requests sent to the API.


Different purchase requests have different signature contents. The signatures themselves are ***Base64*** encoded versions of the string combinations.

As you'd notice from the request header on the right tab, the ***Signature*** contains a hash along with its ***Signature Method***.

The data for which the signature can be generated from for different requests is illustrated below. The http method for the request is one of either ***POST, GET etc.***


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



