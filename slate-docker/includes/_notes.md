

<h1 id="-default-notes"> Notes </h1>

## Endpoints

Base endpoints for this documentation can be referenced from this table:

|Function|Sandbox|Production|
|---|---|---|
|**Passport / Access Token**|https://sandbox.interswitchng.com|https://passport.interswitchng.com|
|**Transactions and Purchases**|https://sandbox.interswitchng.com|https://saturn.interswitchng.com|
|***Querying Transaction Status using Webpay*** <br \> Reference API docs [here](#opIdGET_collections-api-v1-gettransaction-json)|https://sandbox.interswitchng.com|https://webpay.interswitchng.com|
|***Visa Transactions***|All endpoints are returned in the purchase response|Ditto|

## AuthData

> Code Samples are in Java

```java
  String authDataVersion = "1";
  String pan = "5060990580000217499";        // Payment Card
  String expiryDate = "2004";                //Card Expiry date: April (04), 2020 (20) - YYMM
  String cvv2 = "111";                       // Card CVV2
  String pin = "1111";                       // Card pin
  String authData = getAuthData(authDataVersion, pan, pin, expiryDate, cvv2);
  System.out.println("AuthData : " + authData);
 
  public static String getAuthData(String version, String pan, String pin, String expiryDate, String cvv2) throws Exception {
        String authData = "";
        String authDataCipher = version + "Z" + pan + "Z" + pin + "Z" + expiryDate + "Z" + cvv2;
        // The Modulus and Public Exponent will be supplied by Interswitch. please ask for one
        String modulus = "XXXXXXX";
        String publicExponent = "XXXXXXX";
        Security.addProvider(new BouncyCastleProvider());
        RSAPublicKeySpec publicKeyspec = new RSAPublicKeySpec(new BigInteger(modulus, 16), new BigInteger(publicExponent, 16));
        KeyFactory factory = KeyFactory.getInstance("RSA"); //, "JHBCI");
        PublicKey publicKey = factory.generatePublic(publicKeyspec);
        Cipher encryptCipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "BC");
        encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] authDataBytes = encryptCipher.doFinal(authDataCipher.getBytes("UTF8"));
        authData = Base64.getEncoder().encodeToString(authDataBytes).replaceAll("\\r|\\n", "");
        return authData;
    }
```

AuthData is a combination of your payment’s sensitive data mainly: 

- PAN
- PIN
- Expiry Date
- CVV2
- Auth Data Version ***by default, 1***

The BouncyCastle library is required for this.

 Kindly download the appropriate BouncyCastle library for your platform.  
 
 You will also be provided with a public key exponent as well as a modulus.

 For more information about these possibilities, please send an email to [ipgsupport@interswitchgroup.com](mailto:ipgsupport@interswitchgroup.com)



## Nonce

> Sample implementation in PHP

```php
	
function nonce()
{
     return substr(str_shuffle(MD5(microtime())), 0, 20);
}
```
Nonce is a unique generated value for each request. It should not be repeated, i.e. a unique nonce should be sent for each and every request. Length of the nonce should NOT be more than 64 characters.



## Transaction References

 <a id="transaction-references"></a>

 > Implementation

 ```
    JB-{{Insert Timestamp here}}-{{Transaction Type}}

    Transaction can have the formats of either one of the types declared below:

    // For transactions that do not require OTP authentication
    - NoOTP  

    // For transactions that require OTP authentication
    - OTPPurchase 

    //For VISA transaction
    - VISA 

    //For enrolling cards to use OTP for authentication
    - Enrol 

    //Used to obtain the token for  a recurring transaction
    - ReccValid

    //Used to make a recurrent purchase [Requires a token]
    - ReccPurch


    For Sample, JB-124334323-OTPPurchase
 ```

 This is used to state what type of transaction you'd be performing.

 Generally, it has a format as shown on the other side.

 Using this format is not compulsory but it does aid in debugging fail transactions and assessing what kind is being used.

