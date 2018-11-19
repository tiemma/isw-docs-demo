

<h1 id="-default-notes"> Notes </h1>




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




