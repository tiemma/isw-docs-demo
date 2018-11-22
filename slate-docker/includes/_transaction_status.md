
<h1 id="collections"> Verify Transaction Status </h1>


## Using [IPG]

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

> Sample responses

```
{
    "amount": "<<AMOUNT>>",
    "transactionRef": "<<TRANSACTION REF>>",
    "transactionDate": "2018-11-21T08:28:59",
    "message": "Approved by Financial Institution"
}

```


<h3 id="get_api-v3-purchases-responses">Response Body</h3>

|Parameter|In|Type|Description| 
|---|---|---|---|
|amount|response|number|The amount debited from the user|
|transactionRef|response|string|The transaction reference initially sent in the request|
|transactionDate|response|number|The date the transaction was performed|
|message|response|number|The status message of the transaction|


<aside class="warning">
This operation requires the following details to be configured properly.
<ol> 
<li>The exact amount debited from the user</li>
<li> [Bearer Authorization](#opIdPOST_passport-oauth-token) must have been obtained </li>
<li> The exact transaction reference for that session </li>
<li> Ensure you update the signature, more details [here](#signatures), same for the [nonce](#nonce)  </li>

</ol>
</aside>


## Using [WebPay]

<a id="opIdGET_collections-api-v1-gettransaction-json"></a>

> Code samples

```csharp
var client = new RestClient("/collections/api/v1/gettransaction.json?getacquirerdata=true&transactionreference=%3C%3CtransactionRef%3E%3E&amount=66666&merchantcode=MX187");  
var request = new RestRequest(Method.GET);  
request.AddHeader("accept", "text/plain");  
IRestResponse response = client.Execute(request);

```

```objective_c
#import <Foundation/Foundation.h>  
  
NSDictionary *headers = @{ @"accept": @"text/plain" };  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/collections/api/v1/gettransaction.json?getacquirerdata=true&transactionreference=%3C%3CtransactionRef%3E%3E&amount=66666&merchantcode=MX187"]  
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
  
let headers = ["accept": "text/plain"]  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/collections/api/v1/gettransaction.json?getacquirerdata=true&transactionreference=%3C%3CtransactionRef%3E%3E&amount=66666&merchantcode=MX187")!,  
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
  CURLOPT_URL => "/collections/api/v1/gettransaction.json?getacquirerdata=true&transactionreference=%3C%3CtransactionRef%3E%3E&amount=66666&merchantcode=MX187",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "GET",  
  CURLOPT_HTTPHEADER => array(  
    "accept: text/plain"  
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

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/collections/api/v1/gettransaction.json", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/collections/api/v1/gettransaction.json");
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
  'Accept':'*/*'

};

$.ajax({
  url: '/collections/api/v1/gettransaction.json',
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
  'Accept': '*/*'
}

r = requests.get('/collections/api/v1/gettransaction.json', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*'
}

result = RestClient.get '/collections/api/v1/gettransaction.json',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /collections/api/v1/gettransaction.json`

*Get Transaction 2.0 *

Returns Bank Code and Account Number.

This requires you use the webpay API endpoint if this is your suited choice for transaction validation in ***production***, table [here](#endpoints). Otherwise, use the IPG variant

<h3 id="get_collections-api-v1-gettransaction-json-parameters">Query Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|getacquirerdata|query|string|true|Flag to include the acquirer's data|
|transactionreference|query|string|true|The transaction reference which was defined in the initial purchase request|
|amount|query|string|true|The amount debited from the user|
|merchantcode|query|string|true|The identifiable code given to you as a merchant on the IPG dashboard after registration|

> Sample Response

> Error Response

<h3 id="get_collections-api-v1-gettransaction-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_collections-api-v1-gettransaction-json-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

