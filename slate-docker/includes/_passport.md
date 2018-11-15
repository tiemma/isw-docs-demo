

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

Before making any request, you're required to generate a Bearer token using this endpoint. 

> Body parameter

```yaml
grant_type: client_credentials

```

<h3 id="post_passport-oauth-token-headers">Headers</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|application/x-www-form-urlencoded|
|Authorization|header|string|true|The content here is a basic token coupled with the Base64 encoding of the string combination of the client ID and the secret key <br> ```Basic Base64(clientId+":"+secretKey)```|

<h3 id="post_passport-oauth-token-body">Request Body</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|grant_type|body|string|true|By default, use ***client_credentials*** as its value|

> Example responses



> default Response

<h3 id="post_passport-oauth-token-responses">Responses</h3>

|Parameter|In|Type|Description|
|---|---|---|---|---|
|access_token|response|string|This is the bearer token that will be used in your transaction|
|token_type|response|string|Default is ***Bearer***|
|scope|response|string|Default is ***profile***|
|merchant_code|response|string|This is the short string representing your business identity|
|production_payment_code|response|string|Your merchant payment code|
|requestor_id|response|string|Your requestor identity code|




<h3 id="post_passport-oauth-token-responseschema">Response Schema</h3>

<aside class="warning">
This operation requires authentication using the Authorization header
</aside>
