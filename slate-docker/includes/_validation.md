<h1 id="validation"> Transaction Validation </h1>

## POST_api-v3-purchases-validations

<a id="opIdPOST_api-v3-purchases-validations"></a>

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
    req, err := http.NewRequest("POST", "/api/v3/purchases/validations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases/validations");
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
  url: '/api/v3/purchases/validations',
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

r = requests.post('/api/v3/purchases/validations', params={

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

result = RestClient.post '/api/v3/purchases/validations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v3/purchases/validations`

*Validation Request*

> Body parameter

<h3 id="post_api-v3-purchases-validations-parameters">Parameters</h3>

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
|» transactionRef|body|string|false|none|
|» authData|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-validations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-validations-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>



## POST_api-v2-purchases-validations-recurrents

<a id="opIdPOST_api-v2-purchases-validations-recurrents"></a>

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
    req, err := http.NewRequest("POST", "/api/v2/purchases/validations/recurrents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v2/purchases/validations/recurrents");
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
  url: '/api/v2/purchases/validations/recurrents',
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

r = requests.post('/api/v2/purchases/validations/recurrents', params={

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

result = RestClient.post '/api/v2/purchases/validations/recurrents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v2/purchases/validations/recurrents`

*Recurrent Get Token*

null

> Body parameter

<h3 id="post_api-v2-purchases-validations-recurrents-parameters">Parameters</h3>

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
|» transactionRef|body|string|false|none|
|» authData|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v2-purchases-validations-recurrents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v2-purchases-validations-recurrents-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>


## POST_api-v3-purchases-validations-otps-auths

<a id="opIdPOST_api-v3-purchases-validations-otps-auths"></a>

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
    req, err := http.NewRequest("POST", "/api/v3/purchases/validations/otps/auths", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases/validations/otps/auths");
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
  url: '/api/v3/purchases/validations/otps/auths',
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

r = requests.post('/api/v3/purchases/validations/otps/auths', params={

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

result = RestClient.post '/api/v3/purchases/validations/otps/auths',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v3/purchases/validations/otps/auths`

*Validation Request - OTP*

> Body parameter

<h3 id="post_api-v3-purchases-validations-otps-auths-parameters">Parameters</h3>

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
|» transactionRef|body|string|false|none|
|» otp|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-validations-otps-auths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-validations-otps-auths-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>


## POST_api-v3-purchases-otps-auths

<a id="opIdPOST_api-v3-purchases-otps-auths"></a>

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
    req, err := http.NewRequest("POST", "/api/v3/purchases/otps/auths", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v3/purchases/otps/auths");
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
  url: '/api/v3/purchases/otps/auths',
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

r = requests.post('/api/v3/purchases/otps/auths', params={

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

result = RestClient.post '/api/v3/purchases/otps/auths',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v3/purchases/otps/auths`

*/api/v3/purchases/otps/auths*

> Body parameter

<h3 id="post_api-v3-purchases-otps-auths-parameters">Parameters</h3>

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
|» authData|body|string|false|none|
|» otp|body|string|false|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-otps-auths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-otps-auths-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

