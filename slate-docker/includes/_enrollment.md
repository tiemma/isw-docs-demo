
<h1 id="enrollment"> Enrollments </h1>

## Enroll Card For OTP
<a id="opIdPOST_api-v3-purchases-otps-enrollments"></a>

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
NSDictionary *parameters = @{ @"paymentId": @"<ADD STRING VALUE>",  
                              @"mobilePhoneNumber": @"<ADD STRING VALUE>",  
                              @"transactionRef": @"<ADD STRING VALUE>" };  
  
NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];  
  
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"/api/v3/purchases/otps/enrollments"]  
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
  "paymentId": "<ADD STRING VALUE>",  
  "mobilePhoneNumber": "<ADD STRING VALUE>",  
  "transactionRef": "<ADD STRING VALUE>"  
]  
  
let postData = NSJSONSerialization.dataWithJSONObject(parameters, options: nil, error: nil)  
  
var request = NSMutableURLRequest(URL: NSURL(string: "/api/v3/purchases/otps/enrollments")!,  
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
  CURLOPT_URL => "/api/v3/purchases/otps/enrollments",  
  CURLOPT_RETURNTRANSFER => true,  
  CURLOPT_ENCODING => "",  
  CURLOPT_MAXREDIRS => 10,  
  CURLOPT_TIMEOUT => 30,  
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  
  CURLOPT_CUSTOMREQUEST => "POST",  
  CURLOPT_POSTFIELDS => "{\\"paymentId\\":\\"<ADD STRING VALUE>\\",\\"mobilePhoneNumber\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}",  
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
var client = new RestClient("/api/v3/purchases/otps/enrollments");  
var request = new RestRequest(Method.POST);  
request.AddHeader("authkeyversion", "SOME_STRING_VALUE");  
request.AddHeader("signaturemethod", "SOME_STRING_VALUE");  
request.AddHeader("signature", "SOME_STRING_VALUE");  
request.AddHeader("nonce", "SOME_STRING_VALUE");  
request.AddHeader("timestamp", "SOME_STRING_VALUE");  
request.AddHeader("authorization", "SOME_STRING_VALUE");  
request.AddHeader("content-type", "SOME_STRING_VALUE");  
request.AddHeader("accept", "text/plain");  
request.AddParameter("SOME_STRING_VALUE", "{\\"paymentId\\":\\"<ADD STRING VALUE>\\",\\"mobilePhoneNumber\\":\\"<ADD STRING VALUE>\\",\\"transactionRef\\":\\"<ADD STRING VALUE>\\"}", ParameterType.RequestBody);  
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
    req, err := http.NewRequest("POST", "/api/v3/purchases/otps/enrollments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases/otps/enrollments");
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
  url: '/api/v3/purchases/otps/enrollments',
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

r = requests.post('/api/v3/purchases/otps/enrollments', params={

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

result = RestClient.post '/api/v3/purchases/otps/enrollments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v3/purchases/otps/enrollments`

This API is used to make requests to enroll a card so that it can then use OTP as its 2FA.

> Body parameter

```
{
    "paymentId":"{{paymentId}}",
    "mobilePhoneNumber":"{{PhoneNumber}}",
    "transactionRef":"{{TransactionRef}}"
}

```

<h3 id="post_api-v3-purchases-otps-enrollments-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|Reference [here](#getting-a-bearer-token) to get started on setting up a Bearer Authorization token|
|Timestamp|header|string|true|The current time in [unix timestamps](https://www.unixtimestamp.com/) when the transaction happened|
|Nonce|header|string|true|Reference [here](#nonce) for more info|
|Signature|header|string|true|Reference [here](#signatures) for more info|
|SignatureMethod|header|string|true|The hashing method the signature is encoded in.|
|AuthKeyVersion|header|string|true|By default, ***1.0***|


   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 

|Parameter|In|Type|Description| 
|---|---|---|---|
|paymentId|body|number|The payment identifier for the transaction|
|mobilePhoneNumber|body|number|The mobile number of the person |
|transactionRef|body|string|The transaction reference for this particular transaction|



> Sample responses

```

```

> Error Response

```
{
    "errors": [
        {
            "code": "-2",
            "message": "An OTP related error has occured, please contact support."
        }
    ],
    "transactionRef": "JB-1532673233-Enrol",
    "paymentId": ""
}


// Occurs if the number is already enrolled
{
    "errors": [
        {
            "code": "10403",
            "message": "Payments is not allowed for auto enrollment"
        }
    ],
    "transactionRef": "JB-1542891523-Enrol",
    "paymentId": "266274"
}
```

<h3 id="post_api-v3-purchases-otps-enrollments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-otps-enrollments-responseschema">Response Schema</h3>

<aside class="warning">
This operation requires authentication using the Authorization header.
</aside>

