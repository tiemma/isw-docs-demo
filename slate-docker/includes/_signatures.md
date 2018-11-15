

# Signatures

> Request header sample is in JSON

```
{
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsidmF1bHQiXSwicHJvZHVjdGlvbl9wYXltZW50X2NvZGUiOiIwNDIzODcxMDE5OTUiLCJyZXF1ZXN0b3JfaWQiOiIw
    MDE4MzQzODA5MSIsInNjb3BlIjpbInByb2ZpbGUiXSwiZXhwIjoxNDUzMjM4NjY4LCJqdGkiOiIzMWYwNmJkOC04MTlhLTQ4OTMtOWM5NC1kMDhmMTgwOGY3NjgiLCJjbGllbnRfaWQiOiJ
    JS0lBNTFFNTI2MDkxNzFGNUMwMkQ2MzgzNTU2NkIwMTZBN0JEQ0EzRTc1MSIsInBheW1lbnRfY29kZSI6IjA1MTQxMzcxMTYyNDEifQ.KTwAdq55udg_CcZ7Q5hurvIwRTETm0fpWYSHBzG
    RlKA4vyMhJJn-1mvhxV79RC3VpaJc0W0hcTNEMQWmY4yrSzsyakzBzc_XrLVM8ZmBRNqalFY7IoJFCHONiGlxklujjK600aUBtKhLxwWEV6wUU_O8qZqI1ea4fJRHdAyUetsBUSqvYB1vBM
    T6luamaDOtaBDiikxy0giwP5oiOFjuBvd8a33ROaWE0DuQz7EfobfbZiXKdiEHV5c9bZmImIGwiLtJXBesPImn1eBrM5wWJ_gMLueCnBrisxXyTkLjVMBJJJy5AT8OjY1bAAn8cjwDLORO5
    -ejQxMMh15U59fWIQ",
    "Timestamp": "1361281946",
    "Nonce": "634968823463411609",
    "Signature": "2cFwCfkgRR7mlIOlcjTQXCUYpLmtlKJkCb8RUzIX0-k=",
    "SignatureMethod": "SHA-256"
}
```

Signature ciphers have to be generated before a request is sent. They are included in your request headers and act as a check for all requests sent to the API.


Different purchase requests have different signature contents. The signatures themselves are ***base64*** encoded versions of the string combinations.

As you'd notice from the request header on the right tab, the Signature contains a hash along with its hashing method.

The data for which the signature can be generated from for different requests is illustrated below


## Basic Purchase Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret + “&” + amount + “&” + authdata
```

## OTP Validation Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret + “&” + otp + “&” + authdata
```

## Transaction Validation Request (VISA)

 > Code Samples

 ```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret
 ```

## Card Enrollment Request

> Code Samples

```
signatureCipher = httpMethod + “&”+ url + “&” +timestamp + “&” + nonce + “&” + clientId + “&” + clientSecret
```



