

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


## Timestamps


> Sample pseudo code

```
timestamp = $CURRENT_TIMESTAMP / 1000

```
The current time in [unix timestamps](https://www.unixtimestamp.com/) when the transaction happened divided by a 1000.


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


## Getting a Bearer Token

<a id="opIdPOST_passport-oauth-token"></a>

> Code samples

```objective_c
#import <Foundation/Foundation.h>  
  
NSDictionary *headers = @{ @"accept": @"application/x-www-form-urlencoded",  
                           @"content-type": @"SOME_STRING_VALUE",  
                           @"authorization": @"SOME_STRING_VALUE" };  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/passport/oauth/token"]  
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy  
                                                   timeoutInterval:10.0];  
[request setHTTPMethod:@"POST"];  
[request setAllHTTPHeaderFields:headers];  
  
NSURLSession *session = [NSURLSession sharedSession];  
NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request  
                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {  
                                                if (error) {  
                                                    NSLog(@"%@", error);  
                                                } else {  
                                                    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;  
                                                    NSLog(@"%@", httpResponse);  
                                                }  
                                            }];  
[dataTask resume];

```

```c
import Foundation  
  
let headers = [  
  "accept": "application/x-www-form-urlencoded",  
  "content-type": "SOME_STRING_VALUE",  
  "authorization": "SOME_STRING_VALUE"  
]  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/passport/oauth/token")!,  
                                        cachePolicy: .UseProtocolCachePolicy,  
                                    timeoutInterval: 10.0)  
request.HTTPMethod = "POST"  
request.allHTTPHeaderFields = headers  
  
let session = NSURLSession.sharedSession()  
let dataTask = session.dataTaskWithRequest(request, completionHandler: { (data, response, error) -> Void in  
  if (error != nil) {  
    println(error)  
  } else {  
    let httpResponse = response as? NSHTTPURLResponse  
    println(httpResponse)  
  }  
})  
  
dataTask.resume()
```


```php

<?php  
  
$curl = curl_init();  
  
curl_setopt_array($curl, array(  
  CURLOPT_URL => "/passport/oauth/token",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "POST",  
  CURLOPT_HTTPHEADER => array(  
    "accept: application/x-www-form-urlencoded",  
    "authorization: SOME_STRING_VALUE",  
    "content-type: SOME_STRING_VALUE"  
  ),  
));  
  
$response = curl_exec($curl);  
$err = curl_error($curl);  
  
curl_close($curl);  
  
if ($err) {  
  echo "cURL Error #:" . $err;  
} else {  
  echo $response;  
}
```

```csharp
var client = new RestClient("/passport/oauth/token");  
var request = new RestRequest(Method.POST);  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("accept", "application/x-www-form-urlencoded");  
IRestResponse response = client.Execute(request);
```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/x-www-form-urlencoded"},
        "Accept": []string{"*/*"},
        "Content-Type": []string{" application/x-www-form-urlencoded"},
        "Authorization": []string{" <<Authorization>>"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/passport/oauth/token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/passport/oauth/token");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Content-Type':' application/x-www-form-urlencoded',
  'Authorization':' <<Authorization>>'

};

$.ajax({
  url: '/passport/oauth/token',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Content-Type': ' application/x-www-form-urlencoded',
  'Authorization': ' <<Authorization>>'
}

r = requests.post('/passport/oauth/token', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Accept' => '*/*',
  'Content-Type' => ' application/x-www-form-urlencoded',
  'Authorization' => ' <<Authorization>>'
}

result = RestClient.post '/passport/oauth/token',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /passport/oauth/token`

Before making any request, you're required to generate a Bearer token using this endpoint. This will be the new Authorization header value when making a request.

> Body parameter

```yaml
grant_type: client_credentials

```

<h3 id="post_passport-oauth-token-headers">Headers</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|---|
|Content-Type|header|string|true|application/x-www-form-urlencoded|
|Authorization|header|string|true|The content here is a basic token coupled with the Base64 encoding of the string combination of the client ID and the secret key: <br > ***Basic Base64(clientId+":"+secretKey)***|

<h3 id="post_passport-oauth-token-body">Request Body</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|grant_type|body|string|true|By default, use ***client_credentials*** as its value|

> Response Sample

```
{
    "access_token": "<ACCESS_TOKEN>",
    "token_type": "bearer",
    "scope": "profile",
    "merchant_code": "MX187",
    "production_payment_code": "00164639854",
    "requestor_id": "00117614992",
    "payable_id": "2324",
    "payment_code": "042594130246",
    "jti": "487a338b-3290-4184-ad48-28a28f3838b6"
}
```

<h3 id="post_passport-oauth-token-responses">Response Body</h3>

|Parameter|In|Type|Description| 
|---|---|---|---|
|access_token|response|string|This is the bearer token that will be used in your transaction|
|token_type|response|string|Default is ***Bearer***|
|scope|response|string|Default is ***profile***|
|merchant_code|response|string|This is the short string representing your business identity|
|production_payment_code|response|string|Your merchant payment code|
|requestor_id|response|string|Your requestor identity code|
|payable_id|response|string|none|
|payment_code|response|string|none|
|jti|response|string|none|


<h3 id="post_passport-oauth-token-responseschema">Response Schema</h3>

<aside class="warning">
This operation requires authentication using the ***Basic Authorization*** header
</aside>





