---
title: 1 - Merchant X V3
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="">1 - Merchant X V3 v</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="-default">Default</h1>

## POST_V3DSStart

<a id="opIdPOST_V3DSStart"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /V3DSStart \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/x-www-form-urlencoded'

```

```http
POST /V3DSStart HTTP/1.1

Content-Type: application/x-www-form-urlencoded
Accept: */*
Content-Type:  application/x-www-form-urlencoded

```

```javascript
var headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Content-Type':' application/x-www-form-urlencoded'

};

$.ajax({
  url: '/V3DSStart',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "TermUrl": "<<TermUrl>>",
  "PaReq": "<<PaReq>>",
  "MD": "<<MD>>"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Content-Type':' application/x-www-form-urlencoded'

};

fetch('/V3DSStart',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Accept' => '*/*',
  'Content-Type' => ' application/x-www-form-urlencoded'
}

result = RestClient.post '/V3DSStart',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Content-Type': ' application/x-www-form-urlencoded'
}

r = requests.post('/V3DSStart', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/V3DSStart");
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
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/V3DSStart", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /V3DSStart`

*VISA Auth Page (Load Page for iPIN)*

> Body parameter

```yaml
TermUrl: <<TermUrl>>
PaReq: <<PaReq>>
MD: <<MD>>

```

<h3 id="post_v3dsstart-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|osb|query|string|true|none|
|VAA|query|string|true|none|
|Content-Type|header|string|true|application/json|
|body|body|object|true|none|
|» TermUrl|body|string|true|none|
|» PaReq|body|string|true|none|
|» MD|body|string|true|none|

> Example responses

> default Response

<h3 id="post_v3dsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_v3dsstart-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## POST_api-v2-purchases-validations-recurrents

<a id="opIdPOST_api-v2-purchases-validations-recurrents"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/purchases/validations/recurrents \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v2/purchases/validations/recurrents HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "transactionRef": "JB-{{Timestamp}}-ReccValid",
  "authData": "mGR04cy8g7bKhGiF+2YdPB+2+mbZYrH90mrhc5DM1g/YpkHMbeuNWu1JpYzUpO/zRrhalAAudhp9+mlb/FmR+ihGxr7hk+GvrVWQRod+kuXPiooPStFHjU3tPYKiDkiiIWXhjWk92BkNkuKYWRqeo/Va8rkAF24BS45mjxWHbpRKEUysfDCRLTqPx2rwdt2lQ03J+eKriJ0Hf9U2FY8WHjQCp6axsSqF0sHGO8OVf2KjTDeFt2KyRmEaNWxjuNpFOgW9YG2BPrKs7YuefDqHmRJYWnyn5O1c+9N9Iz9RB7AK8z0gFBZI2rH+pxx7qaxpwx/CpTFiOWE+d9EKQliAnw=="
}';
const headers = {
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

fetch('/api/v2/purchases/validations/recurrents',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v2/purchases/validations/recurrents`

*Recurrent Get Token*

null

> Body parameter

<h3 id="post_api-v2-purchases-validations-recurrents-parameters">Parameters</h3>

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
|» transactionRef|body|string|true|none|
|» authData|body|string|true|none|

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

## POST_passport-oauth-token

<a id="opIdPOST_passport-oauth-token"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /passport/oauth/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/x-www-form-urlencoded' \
  -H 'Authorization:  <<Authorization>>'

```

```http
POST /passport/oauth/token HTTP/1.1

Content-Type: application/x-www-form-urlencoded
Accept: */*
Content-Type:  application/x-www-form-urlencoded
Authorization:  <<Authorization>>

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "grant_type": "client_credentials"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Content-Type':' application/x-www-form-urlencoded',
  'Authorization':' <<Authorization>>'

};

fetch('/passport/oauth/token',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /passport/oauth/token`

*/passport/oauth/token*

> Body parameter

```yaml
grant_type: client_credentials

```

<h3 id="post_passport-oauth-token-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|none|
|body|body|object|true|none|
|» grant_type|body|string|true|none|

> Example responses

> default Response

<h3 id="post_passport-oauth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_passport-oauth-token-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## POST_api-v3-purchases-otps-enrollments

<a id="opIdPOST_api-v3-purchases-otps-enrollments"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v3/purchases/otps/enrollments \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v3/purchases/otps/enrollments HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "paymentId": "{{paymentId}}",
  "mobilePhoneNumber": "+2348090673520",
  "transactionRef": "{{TransactionRef}}"
}';
const headers = {
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

fetch('/api/v3/purchases/otps/enrollments',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v3/purchases/otps/enrollments`

*Enroll card for OTP*

> Body parameter

<h3 id="post_api-v3-purchases-otps-enrollments-parameters">Parameters</h3>

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
|» paymentId|body|string|true|none|
|» mobilePhoneNumber|body|string|true|none|
|» transactionRef|body|string|true|none|

> Example responses

> default Response

<h3 id="post_api-v3-purchases-otps-enrollments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_api-v3-purchases-otps-enrollments-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## POST_api-v3-purchases-validations

<a id="opIdPOST_api-v3-purchases-validations"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v3/purchases/validations \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v3/purchases/validations HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "transactionRef": "JB-{{Timestamp}}-Validate",
  "authData": "UX1NSY0cF988psw+rSUYPy1mUyFWPjKztmUHujTORVgbSCWSKp4Ow5d4/1eq6/oZBRHHTV3SAnGALpwnbyHdjN943Ode65owhehqkJ8TAS/7ZNdRLl7hDRiU9TsZfLsDEMAYNEvPoFwye2BG0DIaLxPDAzPimpt5W5rJIjA7kMknOkHBwijkEM+F+UZGcLRB9Oj4QYlzK55bc2Wyhtqz29bAFQaL4hYqHuTQ+hD3IQnvGM7xKmRoxUTvii4LcGrXnRFbmdk7gJZf/gaabrRlbTSbo5WqYeUAm2ksy81aVgRBFVENaeSBA+OFDLmB2l1knRMJmboy96K6oe0IwXQwGQ=="
}';
const headers = {
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

fetch('/api/v3/purchases/validations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v3/purchases/validations`

*Validation Request*

> Body parameter

<h3 id="post_api-v3-purchases-validations-parameters">Parameters</h3>

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
|» transactionRef|body|string|true|none|
|» authData|body|string|true|none|

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

## POST_collections-api-v1-pay-cardinalCallBack

<a id="opIdPOST_collections-api-v1-pay-cardinalCallBack"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /collections/api/v1/pay/cardinalCallBack \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: */*' \
  -H 'Accept:  text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' \
  -H 'Accept-Encoding:  gzip, deflate, br' \
  -H 'Accept-Language:  fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5' \
  -H 'Content-Length:  4170' \
  -H 'Content-Type:  application/x-www-form-urlencoded' \
  -H 'User-Agent:  Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36'

```

```http
POST /collections/api/v1/pay/cardinalCallBack HTTP/1.1

Content-Type: application/x-www-form-urlencoded
Accept: */*
Accept:  text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding:  gzip, deflate, br
Accept-Language:  fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5
Content-Length:  4170
Content-Type:  application/x-www-form-urlencoded
User-Agent:  Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36

```

```javascript
var headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Accept':' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding':' gzip, deflate, br',
  'Accept-Language':' fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5',
  'Content-Length':' 4170',
  'Content-Type':' application/x-www-form-urlencoded',
  'User-Agent':' Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36'

};

$.ajax({
  url: '/collections/api/v1/pay/cardinalCallBack',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "MD": "240412",
  "PaRes": "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"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'*/*',
  'Accept':' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding':' gzip, deflate, br',
  'Accept-Language':' fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5',
  'Content-Length':' 4170',
  'Content-Type':' application/x-www-form-urlencoded',
  'User-Agent':' Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36'

};

fetch('/collections/api/v1/pay/cardinalCallBack',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Accept' => '*/*',
  'Accept' => ' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding' => ' gzip, deflate, br',
  'Accept-Language' => ' fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5',
  'Content-Length' => ' 4170',
  'Content-Type' => ' application/x-www-form-urlencoded',
  'User-Agent' => ' Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36'
}

result = RestClient.post '/collections/api/v1/pay/cardinalCallBack',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Accept': ' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding': ' gzip, deflate, br',
  'Accept-Language': ' fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5',
  'Content-Length': ' 4170',
  'Content-Type': ' application/x-www-form-urlencoded',
  'User-Agent': ' Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36'
}

r = requests.post('/collections/api/v1/pay/cardinalCallBack', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/collections/api/v1/pay/cardinalCallBack");
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
        "Accept": []string{" text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"},
        "Accept-Encoding": []string{" gzip, deflate, br"},
        "Accept-Language": []string{" fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,fr-CA;q=0.6,en-US;q=0.5"},
        "Content-Length": []string{" 4170"},
        "Content-Type": []string{" application/x-www-form-urlencoded"},
        "User-Agent": []string{" Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/collections/api/v1/pay/cardinalCallBack", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /collections/api/v1/pay/cardinalCallBack`

*VISA -> ISW CallBack*

null

> Body parameter

```yaml
MD: '240412'
PaRes: >-
  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

```

<h3 id="post_collections-api-v1-pay-cardinalcallback-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|
|Accept-Encoding|header|string|true|none|
|Accept-Language|header|string|true|none|
|Content-Length|header|string|true|none|
|Content-Type|header|string|true|application/json|
|User-Agent|header|string|true|none|
|body|body|object|true|none|
|» MD|body|string|true|none|
|» PaRes|body|string|true|none|

> Example responses

> default Response

<h3 id="post_collections-api-v1-pay-cardinalcallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="post_collections-api-v1-pay-cardinalcallback-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_collections-api-v1-gettransaction-json

<a id="opIdGET_collections-api-v1-gettransaction-json"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /collections/api/v1/gettransaction.json \
  -H 'Accept: */*'

```

```http
GET /collections/api/v1/gettransaction.json HTTP/1.1

Accept: */*

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

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'

};

fetch('/collections/api/v1/gettransaction.json',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/collections/api/v1/gettransaction.json', params={

}, headers = headers)

print r.json()

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

`GET /collections/api/v1/gettransaction.json`

*Get Transaction 2.0 *

Returns Bank Code and Account Number

<h3 id="get_collections-api-v1-gettransaction-json-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|getacquirerdata|query|string|true|none|
|transactionreference|query|string|true|none|
|amount|query|string|true|none|
|merchantcode|query|string|true|none|

> Example responses

> default Response

<h3 id="get_collections-api-v1-gettransaction-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_collections-api-v1-gettransaction-json-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## POST_api-v3-purchases

<a id="opIdPOST_api-v3-purchases"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v3/purchases \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v3/purchases HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "customerId": "JOnJazzy@gmail.com",
  "amount": "666.66",
  "authData": "IWrhQ49/8oe7Cs6TCSAHyz7V1KB9si63uAuY2H+SR1piYRLN3vHN8v/RFXSmirM1wfGQevRUZADtvUNEtkS007QtD5lINQCcZrpB2jOyX7GBLPRkVuhKUVJEA4HLbllAkCflasT/X4vP7jo+qokyYQW6I9VOqEfwvoLnduHpC1MqJuiruHMCflOYqtnw5ECDgUNYgoKUPbK4zrr8b663ZUJr8a4ENygOZOMOu7Ame7zo8UcnO7zxh6nI/q4crlT2YnuE/tFa/HN9Yh76pU3kcXd0q70+bh6xNDeH1JOSyqVB/OkbArsCHWjC1naxS6+PbEI5vf4gp/AU0ZN61QKvEg==",
  "currency": "NGN",
  "transactionRef": "JB-{{Timestamp}}-NoOTP"
}';
const headers = {
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

fetch('/api/v3/purchases',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v3/purchases`

*/api/v3/purchases*

null

> Body parameter

<h3 id="post_api-v3-purchases-parameters">Parameters</h3>

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
|» authData|body|string|true|none|
|» currency|body|string|true|none|
|» transactionRef|body|string|true|none|

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

```shell
# You can also use wget
curl -X GET /api/v3/purchases \
  -H 'Accept: */*' \
  -H 'Amount:  666.66' \
  -H 'transactionRef:  <<transactionRef>>' \
  -H '-----------------------------------------------------------------------------------------------:  ---------------------------------------------------------------------------------------' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
GET /api/v3/purchases HTTP/1.1

Accept: */*
Amount:  666.66
transactionRef:  <<transactionRef>>
-----------------------------------------------------------------------------------------------:  ---------------------------------------------------------------------------------------
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
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

fetch('/api/v3/purchases',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`GET /api/v3/purchases`

*/api/v3/purchases*

null

<h3 id="get_api-v3-purchases-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Amount|header|string|true|none|
|transactionRef|header|string|true|none|
|-----------------------------------------------------------------------------------------------|header|string|true|none|
|Content-Type|header|string|true|application/json|
|Authorization|header|string|true|none|
|Timestamp|header|string|true|none|
|Nonce|header|string|true|Reference [here](#nonce) for more info|
|Signature|header|string|true|none|
|SignatureMethod|header|string|true|none|
|AuthKeyVersion|header|string|true|none|

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

```shell
# You can also use wget
curl -X POST /api/v2/purchases/recurrents \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v2/purchases/recurrents HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "customerId": "CustID-{{Timestamp}}",
  "amount": "90",
  "currency": "NGN",
  "token": "{{token}}",
  "tokenExpiryDate": "{{tokenExpiryDate}}",
  "transactionRef": "JB-{{Timestamp}}-ReccPurch"
}';
const headers = {
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

fetch('/api/v2/purchases/recurrents',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

## POST_api-v3-purchases-validations-otps-auths

<a id="opIdPOST_api-v3-purchases-validations-otps-auths"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v3/purchases/validations/otps/auths \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v3/purchases/validations/otps/auths HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "transactionRef": "{{transactionRef}}",
  "otp": "770718"
}';
const headers = {
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

fetch('/api/v3/purchases/validations/otps/auths',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v3/purchases/validations/otps/auths`

*Validation Request - OTP*

> Body parameter

<h3 id="post_api-v3-purchases-validations-otps-auths-parameters">Parameters</h3>

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
|» transactionRef|body|string|true|none|
|» otp|body|string|true|none|

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

```shell
# You can also use wget
curl -X POST /api/v3/purchases/otps/auths \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*' \
  -H 'Content-Type:  application/json' \
  -H 'Authorization:  <<Access_token>>' \
  -H 'Timestamp:  <<Timestamp>>' \
  -H 'Nonce:  <<Nonce>>' \
  -H 'Signature:  <<Signature>>' \
  -H 'SignatureMethod:  <<SignatureMethod>>' \
  -H 'AuthKeyVersion:  1'

```

```http
POST /api/v3/purchases/otps/auths HTTP/1.1

Content-Type: text/plain
Accept: */*
Content-Type:  application/json
Authorization:  <<Access_token>>
Timestamp:  <<Timestamp>>
Nonce:  <<Nonce>>
Signature:  <<Signature>>
SignatureMethod:  <<SignatureMethod>>
AuthKeyVersion:  1

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

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "paymentId": "{{paymentId}}",
  "authData": "QQaOpQg9fqq0p8Q6IpZHdWSNacfkGnU04Woq7AMhvZG5Ev+VbQAKYHIv95IM9tG1uUwRYA4eWz9WJ8CbMntoegW7nunrnWei2dgeQ50CfM5kefk4IRcK7yyCaM7kz0ifNorRFFF3et4C+saZ3Hm7XzyxivAOAIfZsmNdbRYPSOYm66+9tJix8mRpC0DCRg6Bn7pSx/Gy3ewiataMTCX+0X9b3j0SiYNVUhP+BfpXZEX3XcqpThT4HJDTKaeBlFIrG4N53mw+eaHj2/cg6VxWoMnv4HpAKYnG1Pyi+lnBCmtwJEmEd0r8+v4yLOAvm8rR2cM+jGtBRwsSjwmJ4Nj3FQ==",
  "otp": "760437"
}';
const headers = {
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

fetch('/api/v3/purchases/otps/auths',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

`POST /api/v3/purchases/otps/auths`

*/api/v3/purchases/otps/auths*

> Body parameter

<h3 id="post_api-v3-purchases-otps-auths-parameters">Parameters</h3>

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
|» paymentId|body|string|true|none|
|» authData|body|string|true|none|
|» otp|body|string|true|none|

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

