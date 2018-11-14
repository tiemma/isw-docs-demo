
<h1 id="enrollment"> Enrollments </h1>

## POST_api-v3-purchases-otps-enrollments

<a id="opIdPOST_api-v3-purchases-otps-enrollments"></a>

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

*Enroll card for OTP*

> Body parameter

<h3 id="post_api-v3-purchases-otps-enrollments-parameters">Parameters</h3>

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
|» paymentId|body|string|false|none|
|» mobilePhoneNumber|body|string|false|none|
|» transactionRef|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-otps-enrollments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-otps-enrollments-responseschema">Response Schema</h3>

<aside class="warning">
This operation requires authentication using the Authorization header.
</aside>

