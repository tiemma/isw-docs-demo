
# Purchases

This holds APIs for all purchase and payment related endpoints covering the following post payment processes involving OTP and Pin processing.

## Basic Purchase

<a id="opIdPOST_api-v3-purchases"></a>

> Code samples



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

*/api/v3/purchases*

null

> Body parameter

<h3 id="post_api-v3-purchases-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|none|
|Authorization|header|string|false|none|
|Timestamp|header|string|false|none|
|Nonce|header|string|false|none|
|Signature|header|string|false|none|
|SignatureMethod|header|string|false|none|
|AuthKeyVersion|header|string|false|none|
|body|body|object|false|none|
|» customerId|body|string|false|none|
|» amount|body|string|false|none|
|» authData|body|string|false|none|
|» currency|body|string|false|none|
|» transactionRef|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_api-v3-purchases

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
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"http://undefinedundefined/api/v3/purchases"]  
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
  "-----------------------------------------------------------------------------------------------": "SOME_STRING_VALUE",  
  "content-type": "SOME_STRING_VALUE",  
  "authorization": "SOME_STRING_VALUE",  
  "timestamp": "SOME_STRING_VALUE",  
  "nonce": "SOME_STRING_VALUE",  
  "signature": "SOME_STRING_VALUE",  
  "signaturemethod": "SOME_STRING_VALUE",  
  "authkeyversion": "SOME_STRING_VALUE"  
]  
  
var request = NSMutableURLRequest(URL: NSURL(string: "http://undefinedundefined/api/v3/purchases")!,  
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
  CURLOPT_URL => "http://undefinedundefined/api/v3/purchases",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "GET",  
  CURLOPT_HTTPHEADER => array(  
    "-----------------------------------------------------------------------------------------------: SOME_STRING_VALUE",  
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
var client = new RestClient("http://undefinedundefined/api/v3/purchases");  
var request = new RestRequest(Method.GET);  
request.AddHeader("authkeyversion", "SOME_STRING_VALUE");  
request.AddHeader("signaturemethod", "SOME_STRING_VALUE");  
request.AddHeader("signature", "SOME_STRING_VALUE");  
request.AddHeader("nonce", "SOME_STRING_VALUE");  
request.AddHeader("timestamp", "SOME_STRING_VALUE");  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("-----------------------------------------------------------------------------------------------", "SOME_STRING_VALUE");  
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
        "-----------------------------------------------------------------------------------------------": []string{" ---------------------------------------------------------------------------------------"},
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
  '-----------------------------------------------------------------------------------------------':' ---------------------------------------------------------------------------------------',
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
  '-----------------------------------------------------------------------------------------------': ' ---------------------------------------------------------------------------------------',
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
  '-----------------------------------------------------------------------------------------------' => ' ---------------------------------------------------------------------------------------',
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

*/api/v3/purchases*

null

<h3 id="get_api-v3-purchases-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Amount|header|string|false|none|
|transactionRef|header|string|false|none|
|Content-Type|header|string|false|none|
|Authorization|header|string|false|none|
|Timestamp|header|string|false|none|
|Nonce|header|string|false|none|
|Signature|header|string|false|none|
|SignatureMethod|header|string|false|none|
|AuthKeyVersion|header|string|false|none|

> Example responses

> default Response

<h3 id="get_api-v3-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_api-v3-purchases-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## POST_api-v2-purchases-recurrents

<a id="opIdPOST_api-v2-purchases-recurrents"></a>

> Code samples

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
|Content-Type|header|string|false|none|
|Authorization|header|string|false|none|
|Timestamp|header|string|false|none|
|Nonce|header|string|false|none|
|Signature|header|string|false|none|
|SignatureMethod|header|string|false|none|
|AuthKeyVersion|header|string|false|none|
|body|body|object|false|none|
|» customerId|body|string|false|none|
|» amount|body|string|false|none|
|» currency|body|string|false|none|
|» token|body|string|false|none|
|» tokenExpiryDate|body|string|false|none|
|» transactionRef|body|string|false|none|

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
