
# Purchases

This holds APIs for all purchase and payment related endpoints covering the following post payment processes involving OTP and Pin processing.


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


    For example, JB-124334323-OTPPurchase
 ```

 This is used to state what type of transaction you'd be performing.

 Generally, it has a format as shown on the other side.


## Basic Purchase[V3]

<a id="opIdPOST_api-v3-purchases"></a>

> Code samples

```csharp
var client = new RestClient("/api/v3/purchases");  
var request = new RestRequest(Method.POST);  
request.AddHeader("authkeyversion", "SOME_STRING_VALUE");  
request.AddHeader("signaturemethod", "SOME_STRING_VALUE");  
request.AddHeader("signature", "SOME_STRING_VALUE");  
request.AddHeader("nonce", "SOME_STRING_VALUE");  
request.AddHeader("timestamp", "SOME_STRING_VALUE");  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("accept", "text/plain");  
request.AddParameter("SOME_STRING_VALUE", "{\\"customerId\\":\\"<ADD STRING VALUE>\\",\\"amount\\":\\"<ADD STRING VALUE>\\",\\"authData\\":\\"<ADD STRING VALUE>\\",\\"currency\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}", ParameterType.RequestBody);  
IRestResponse response = client.Execute(request);

```


```php
<?php  
  
$curl = curl_init();  
  
curl_setopt_array($curl, array(  
  CURLOPT_URL => "/api/v3/purchases",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "POST",  
  CURLOPT_POSTFIELDS => "{\\"customerId\\":\\"<ADD STRING VALUE>\\",\\"amount\\":\\"<ADD STRING VALUE>\\",\\"authData\\":\\"<ADD STRING VALUE>\\",\\"currency\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}",  
  CURLOPT_HTTPHEADER => array(  
    "accept: text/plain",  
    "authkeyversion: SOME_STRING_VALUE",  
    "authorization: SOME_STRING_VALUE",  
    "content-type: SOME_STRING_VALUE",  
    "nonce: SOME_STRING_VALUE",  
    "signature: SOME_STRING_VALUE",  
    "signaturemethod: SOME_STRING_VALUE",  
    "timestamp: SOME_STRING_VALUE"  
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


```objective_c
#import <Foundation/Foundation.h>  
  
NSDictionary *headers = @{ @"accept": @"text/plain",  
                           @"content-type": @"SOME_STRING_VALUE",  
                           @"authorization": @"SOME_STRING_VALUE",  
                           @"timestamp": @"SOME_STRING_VALUE",  
                           @"nonce": @"SOME_STRING_VALUE",  
                           @"signature": @"SOME_STRING_VALUE",  
                           @"signaturemethod": @"SOME_STRING_VALUE",  
                           @"authkeyversion": @"SOME_STRING_VALUE" };  
NSDictionary *parameters = @{ @"customerId": @"<ADD STRING VALUE>",  
                              @"amount": @"<ADD STRING VALUE>",  
                              @"authData": @"<ADD STRING VALUE>",  
                              @"currency": @"<ADD STRING VALUE>",  
                              @"transactionRef": @"<ADD STRING VALUE>" };  
  
NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/api/v3/purchases"]  
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy  
                                                   timeoutInterval:10.0];  
[request setHTTPMethod:@"POST"];  
[request setAllHTTPHeaderFields:headers];  
[request setHTTPBody:postData];  
  
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
  "accept": "text/plain",  
  "content-type": "SOME_STRING_VALUE",  
  "authorization": "SOME_STRING_VALUE",  
  "timestamp": "SOME_STRING_VALUE",  
  "nonce": "SOME_STRING_VALUE",  
  "signature": "SOME_STRING_VALUE",  
  "signaturemethod": "SOME_STRING_VALUE",  
  "authkeyversion": "SOME_STRING_VALUE"  
]  
let parameters = [  
  "customerId": "<ADD STRING VALUE>",  
  "amount": "<ADD STRING VALUE>",  
  "authData": "<ADD STRING VALUE>",  
  "currency": "<ADD STRING VALUE>",  
  "transactionRef": "<ADD STRING VALUE>"  
]  
  
let postData = NSJSONSerialization.dataWithJSONObject(parameters, options: nil, error: nil)  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/api/v3/purchases")!,  
                                        cachePolicy: .UseProtocolCachePolicy,  
                                    timeoutInterval: 10.0)  
request.HTTPMethod = "POST"  
request.allHTTPHeaderFields = headers  
request.HTTPBody = postData  
  
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



```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"text/plain"},
        "Accept": []string{"*/*"},
        "Content-Type": []string{" application/json"},
        "Authorization": []string{" <<Access_token>>"},
        "Timestamp": []string{" <<Timestamp>>"},
        "Nonce": []string{" <<Nonce>>"},
        "Signature": []string{" <<Signature>>"},
        "SignatureMethod": []string{" <<SignatureMethod>>"},
        "AuthKeyVersion": []string{" 1"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v3/purchases", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases");
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
  'Content-Type':'text/plain',
  'Accept':'*/*',
  'Content-Type':' application/json',
  'Authorization':' <<Access_token>>',
  'Timestamp':' <<Timestamp>>',
  'Nonce':' <<Nonce>>',
  'Signature':' <<Signature>>',
  'SignatureMethod':' <<SignatureMethod>>',
  'AuthKeyVersion':' 1'

};

$.ajax({
  url: '/api/v3/purchases',
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
  'Content-Type': 'text/plain',
  'Accept': '*/*',
  'Content-Type': ' application/json',
  'Authorization': ' <<Access_token>>',
  'Timestamp': ' <<Timestamp>>',
  'Nonce': ' <<Nonce>>',
  'Signature': ' <<Signature>>',
  'SignatureMethod': ' <<SignatureMethod>>',
  'AuthKeyVersion': ' 1'
}

r = requests.post('/api/v3/purchases', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'text/plain',
  'Accept' => '*/*',
  'Content-Type' => ' application/json',
  'Authorization' => ' <<Access_token>>',
  'Timestamp' => ' <<Timestamp>>',
  'Nonce' => ' <<Nonce>>',
  'Signature' => ' <<Signature>>',
  'SignatureMethod' => ' <<SignatureMethod>>',
  'AuthKeyVersion' => ' 1'
}

result = RestClient.post '/api/v3/purchases',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v3/purchases`

This API manages an API transaction for performing debits on a user's card data. 

> Body parameter

```
{
    "customerId": "<<USER_ID>>",
    "amount": "<<AMOUNT>>",
    "authData": "<<AMOUNT>>",
    "currency": "NGN",
    "transactionRef": "JB-{{Timestamp}}-NoOTP"
}

```

<h3 id="post_api-v3-purchases-parameters">Headers</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|Reference [here](#getting-a-bearer-token) to get started on setting up a Bearer Authorization token|
|Timestamp|header|string|true|Time the transaction was performed|
|Nonce|header|string|true|Reference [here](#nonce) for more info|
|Signature|header|string|true|Reference [here](#signatures) for more info|
|SignatureMethod|header|string|true|The hashing method the signature is encoded in.|
|AuthKeyVersion|header|string|true|By default, ***1.0***|

<h3 id="post_api-v3-purchases-parameters">Request Body</h3>
|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|body|string|true|Identifier for the user e.g. email|
|amount|body|string|true|Debitable amount on the user side|
|authData|body|string|true|Reference [here](#authdata) for details on generating the authData hash|
|currency|body|string|true|Currency code for the transaction, for now use NGN |
|transactionRef|body|string|true|These are used to specify the transaction type reference e.g OTP, NoOTP. Kindly check for the documentation regarding this [here](#transaction-references)|

> Example responses

```
{
    "transactionIdentifier": "UBA|API|MX187|21-11-2018|266074|217513",
    "message": "Approved by Financial Institution",
    "amount": "666.66",
    "transactionRef": "JB-1542785291-NoOTP"
}
```

<h3 id="post_api-v3-purchases-responses">Response Body</h3>

|Parameter|In|Type|Description|
|---|---|---|---|
|transactionIdentifier|response|string|This is the response code from the bank which can be used to track a successful transaction|
|message|response|string|Default should be ***Approved by Financial Institution***|A basic acknowledgement response message|
|amount|response|string|The amount of the transaction|
|transactionRef|response|string|The transaction reference initially sent in the request|


> Error responses

```
{
    "errors": [
        {
            "code": "<<ERROR CODE>>",
            "message": "The service provider is unreachable at the moment, please try again later."
        }
    ],
    "transactionRef": "<<TRANSACTION REF>>"
}
```

<aside class="warning">
This operation requires the following details to be configured properly.
<ol> 
<li>[Auth Data](#authdata)</li>
<li> [Bearer Authorization](#opIdPOST_passport-oauth-token) must have been obtained </li>
<li> Ensure you update the signature, more details [here](#signatures) </li>
<li> Ensure the right [transaction reference](#transaction-references) is set to ensure post request authentication is properly continued </li>
</ol>
</aside>

## Verify Transaction Status

<a id="opIdGET_api-v3-purchases"></a>

> Code samples


```objective_c
#import <Foundation/Foundation.h>  
  
NSDictionary *headers = @{ @"accept": @"text/plain",  
                           @"amount": @"SOME_STRING_VALUE",  
                           @"transactionref": @"SOME_STRING_VALUE",  
                           @"-----------------------------------------------------------------------------------------------": @"SOME_STRING_VALUE",  
                           @"content-type": @"SOME_STRING_VALUE",  
                           @"authorization": @"SOME_STRING_VALUE",  
                           @"timestamp": @"SOME_STRING_VALUE",  
                           @"nonce": @"SOME_STRING_VALUE",  
                           @"signature": @"SOME_STRING_VALUE",  
                           @"signaturemethod": @"SOME_STRING_VALUE",  
                           @"authkeyversion": @"SOME_STRING_VALUE" };  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/api/v3/purchases"]  
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy  
                                                   timeoutInterval:10.0];  
[request setHTTPMethod:@"GET"];  
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
  "accept": "text/plain",  
  "amount": "SOME_STRING_VALUE",  
  "transactionref": "SOME_STRING_VALUE",   
  "content-type": "SOME_STRING_VALUE",  
  "authorization": "SOME_STRING_VALUE",  
  "timestamp": "SOME_STRING_VALUE",  
  "nonce": "SOME_STRING_VALUE",  
  "signature": "SOME_STRING_VALUE",  
  "signaturemethod": "SOME_STRING_VALUE",  
  "authkeyversion": "SOME_STRING_VALUE"  
]  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/api/v3/purchases")!,  
                                        cachePolicy: .UseProtocolCachePolicy,  
                                    timeoutInterval: 10.0)  
request.HTTPMethod = "GET"  
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
  CURLOPT_URL => "/api/v3/purchases",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "GET",  
  CURLOPT_HTTPHEADER => array(   
    "accept: text/plain",  
    "amount: SOME_STRING_VALUE",  
    "authkeyversion: SOME_STRING_VALUE",  
    "authorization: SOME_STRING_VALUE",  
    "content-type: SOME_STRING_VALUE",  
    "nonce: SOME_STRING_VALUE",  
    "signature: SOME_STRING_VALUE",  
    "signaturemethod: SOME_STRING_VALUE",  
    "timestamp: SOME_STRING_VALUE",  
    "transactionref: SOME_STRING_VALUE"  
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
var client = new RestClient("/api/v3/purchases");  
var request = new RestRequest(Method.GET);  
request.AddHeader("authkeyversion", "SOME_STRING_VALUE");  
request.AddHeader("signaturemethod", "SOME_STRING_VALUE");  
request.AddHeader("signature", "SOME_STRING_VALUE");  
request.AddHeader("nonce", "SOME_STRING_VALUE");  
request.AddHeader("timestamp", "SOME_STRING_VALUE");  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("transactionref", "SOME_STRING_VALUE");  
request.AddHeader("amount", "SOME_STRING_VALUE");  
request.AddHeader("accept", "text/plain");  
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
        "Accept": []string{"*/*"},
        "Amount": []string{" 666.66"},
        "transactionRef": []string{" <<transactionRef>>"},
        "Content-Type": []string{" application/json"},
        "Authorization": []string{" <<Access_token>>"},
        "Timestamp": []string{" <<Timestamp>>"},
        "Nonce": []string{" <<Nonce>>"},
        "Signature": []string{" <<Signature>>"},
        "SignatureMethod": []string{" <<SignatureMethod>>"},
        "AuthKeyVersion": []string{" 1"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v3/purchases", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
  'Accept':'*/*',
  'Amount':' 666.66',
  'transactionRef':' <<transactionRef>>',
  'Content-Type':' application/json',
  'Authorization':' <<Access_token>>',
  'Timestamp':' <<Timestamp>>',
  'Nonce':' <<Nonce>>',
  'Signature':' <<Signature>>',
  'SignatureMethod':' <<SignatureMethod>>',
  'AuthKeyVersion':' 1'

};

$.ajax({
  url: '/api/v3/purchases',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': '*/*',
  'Amount': ' 666.66',
  'transactionRef': ' <<transactionRef>>',
  'Content-Type': ' application/json',
  'Authorization': ' <<Access_token>>',
  'Timestamp': ' <<Timestamp>>',
  'Nonce': ' <<Nonce>>',
  'Signature': ' <<Signature>>',
  'SignatureMethod': ' <<SignatureMethod>>',
  'AuthKeyVersion': ' 1'
}

r = requests.get('/api/v3/purchases', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Amount' => ' 666.66',
  'transactionRef' => ' <<transactionRef>>',
  'Content-Type' => ' application/json',
  'Authorization' => ' <<Access_token>>',
  'Timestamp' => ' <<Timestamp>>',
  'Nonce' => ' <<Nonce>>',
  'Signature' => ' <<Signature>>',
  'SignatureMethod' => ' <<SignatureMethod>>',
  'AuthKeyVersion' => ' 1'
}

result = RestClient.get '/api/v3/purchases',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/v3/purchases`

This is an API which fetches the transactions status using the transaction reference and the amount debited from the user.

<h3 id="get_api-v3-purchases-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Amount|header|string|true|The amount debited from the user|
|transactionRef|header|string|true|The transaction reference which was defined in the initial purchase request|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|Reference [here](#getting-a-bearer-token) to get started on setting up a Bearer Authorization token|
|Timestamp|header|string|true|The current time in [unix timestamps](https://www.unixtimestamp.com/) when the transaction happened|
|Nonce|header|string|true|Reference [here](#nonce) for more info|
|Signature|header|string|true|Reference [here](#signatures) for more info|
|SignatureMethod|header|string|true|The hashing method the signature is encoded in.|
|AuthKeyVersion|header|string|true|By default, ***1.0***|

> Example responses


<h3 id="get_api-v3-purchases-responses">Response Body</h3>

|Parameter|In|Type|Description|
|---|---|---|---|
|default|Default|Default response|Inline|


<aside class="warning">
This operation requires the following details to be configured properly.
<ol> 
<li>The exact amount debited from the user</li>
<li> [Bearer Authorization](#opIdPOST_passport-oauth-token) must have been obtained </li>
<li> The exact transaction reference for that session </li>
<li> Ensure you update the signature, more details [here](#signatures) </li>

</ol>
</aside>

## Recurrent Purchases [V2]

<a id="opIdPOST_api-v2-purchases-recurrents"></a>

> Code samples


```objective_c
#import <Foundation/Foundation.h>  
  
NSDictionary *headers = @{ @"accept": @"text/plain",  
                           @"content-type": @"SOME_STRING_VALUE",  
                           @"authorization": @"SOME_STRING_VALUE",  
                           @"timestamp": @"SOME_STRING_VALUE",  
                           @"nonce": @"SOME_STRING_VALUE",  
                           @"signature": @"SOME_STRING_VALUE",  
                           @"signaturemethod": @"SOME_STRING_VALUE",  
                           @"authkeyversion": @"SOME_STRING_VALUE" };  
NSDictionary *parameters = @{ @"customerId": @"<ADD STRING VALUE>",  
                              @"amount": @"<ADD STRING VALUE>",  
                              @"currency": @"<ADD STRING VALUE>",  
                              @"token": @"<ADD STRING VALUE>",  
                              @"tokenExpiryDate": @"<ADD STRING VALUE>",  
                              @"transactionRef": @"<ADD STRING VALUE>" };  
  
NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/api/v2/purchases/recurrents"]  
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy  
                                                   timeoutInterval:10.0];  
[request setHTTPMethod:@"POST"];  
[request setAllHTTPHeaderFields:headers];  
[request setHTTPBody:postData];  
  
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
  "accept": "text/plain",  
  "content-type": "SOME_STRING_VALUE",  
  "authorization": "SOME_STRING_VALUE",  
  "timestamp": "SOME_STRING_VALUE",  
  "nonce": "SOME_STRING_VALUE",  
  "signature": "SOME_STRING_VALUE",  
  "signaturemethod": "SOME_STRING_VALUE",  
  "authkeyversion": "SOME_STRING_VALUE"  
]  
let parameters = [  
  "customerId": "<ADD STRING VALUE>",  
  "amount": "<ADD STRING VALUE>",  
  "currency": "<ADD STRING VALUE>",  
  "token": "<ADD STRING VALUE>",  
  "tokenExpiryDate": "<ADD STRING VALUE>",  
  "transactionRef": "<ADD STRING VALUE>"  
]  
  
let postData = NSJSONSerialization.dataWithJSONObject(parameters, options: nil, error: nil)  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/api/v2/purchases/recurrents")!,  
                                        cachePolicy: .UseProtocolCachePolicy,  
                                    timeoutInterval: 10.0)  
request.HTTPMethod = "POST"  
request.allHTTPHeaderFields = headers  
request.HTTPBody = postData  
  
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
  CURLOPT_URL => "/api/v2/purchases/recurrents",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "POST",  
  CURLOPT_POSTFIELDS => "{\\"customerId\\":\\"<ADD STRING VALUE>\\",\\"amount\\":\\"<ADD STRING VALUE>\\",\\"currency\\":\\"<ADD STRING VALUE>\\",\\"token\\":\\"<ADD STRING VALUE>\\",\\"tokenExpiryDate\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}",  
  CURLOPT_HTTPHEADER => array(  
    "accept: text/plain",  
    "authkeyversion: SOME_STRING_VALUE",  
    "authorization: SOME_STRING_VALUE",  
    "content-type: SOME_STRING_VALUE",  
    "nonce: SOME_STRING_VALUE",  
    "signature: SOME_STRING_VALUE",  
    "signaturemethod: SOME_STRING_VALUE",  
    "timestamp: SOME_STRING_VALUE"  
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
var client = new RestClient("/api/v2/purchases/recurrents");  
var request = new RestRequest(Method.POST);  
request.AddHeader("authkeyversion", "SOME_STRING_VALUE");  
request.AddHeader("signaturemethod", "SOME_STRING_VALUE");  
request.AddHeader("signature", "SOME_STRING_VALUE");  
request.AddHeader("nonce", "SOME_STRING_VALUE");  
request.AddHeader("timestamp", "SOME_STRING_VALUE");  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("accept", "text/plain");  
request.AddParameter("SOME_STRING_VALUE", "{\\"customerId\\":\\"<ADD STRING VALUE>\\",\\"amount\\":\\"<ADD STRING VALUE>\\",\\"currency\\":\\"<ADD STRING VALUE>\\",\\"token\\":\\"<ADD STRING VALUE>\\",\\"tokenExpiryDate\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}", ParameterType.RequestBody);  
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
        "Content-Type": []string{"text/plain"},
        "Accept": []string{"*/*"},
        "Content-Type": []string{" application/json"},
        "Authorization": []string{" <<Access_token>>"},
        "Timestamp": []string{" <<Timestamp>>"},
        "Nonce": []string{" <<Nonce>>"},
        "Signature": []string{" <<Signature>>"},
        "SignatureMethod": []string{" <<SignatureMethod>>"},
        "AuthKeyVersion": []string{" 1"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v2/purchases/recurrents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v2/purchases/recurrents");
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
  'Content-Type':'text/plain',
  'Accept':'*/*',
  'Content-Type':' application/json',
  'Authorization':' <<Access_token>>',
  'Timestamp':' <<Timestamp>>',
  'Nonce':' <<Nonce>>',
  'Signature':' <<Signature>>',
  'SignatureMethod':' <<SignatureMethod>>',
  'AuthKeyVersion':' 1'

};

$.ajax({
  url: '/api/v2/purchases/recurrents',
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
  'Content-Type': 'text/plain',
  'Accept': '*/*',
  'Content-Type': ' application/json',
  'Authorization': ' <<Access_token>>',
  'Timestamp': ' <<Timestamp>>',
  'Nonce': ' <<Nonce>>',
  'Signature': ' <<Signature>>',
  'SignatureMethod': ' <<SignatureMethod>>',
  'AuthKeyVersion': ' 1'
}

r = requests.post('/api/v2/purchases/recurrents', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'text/plain',
  'Accept' => '*/*',
  'Content-Type' => ' application/json',
  'Authorization' => ' <<Access_token>>',
  'Timestamp' => ' <<Timestamp>>',
  'Nonce' => ' <<Nonce>>',
  'Signature' => ' <<Signature>>',
  'SignatureMethod' => ' <<SignatureMethod>>',
  'AuthKeyVersion' => ' 1'
}

result = RestClient.post '/api/v2/purchases/recurrents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v2/purchases/recurrents`

*Recurrent Purchase*

null

> Body parameter

<h3 id="post_api-v2-purchases-recurrents-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|none|
|Timestamp|header|string|true|none|
|Nonce|header|string|true|Reference [here](#nonce) for more info|
|Signature|header|string|true|none|
|SignatureMethod|header|string|true|none|
|AuthKeyVersion|header|string|true|none|
|body|body|object|true|none|
|» customerId|body|string|true|none|
|» amount|body|string|true|none|
|» currency|body|string|true|none|
|» token|body|string|true|none|
|» tokenExpiryDate|body|string|true|none|
|» transactionRef|body|string|true|none|

> Example responses

> default Response

<h3 id="post_api-v2-purchases-recurrents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v2-purchases-recurrents-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>
