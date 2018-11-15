

## Getting a Bearer Token

<a id="opIdPOST_passport-oauth-token"></a>

> Code samples

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
