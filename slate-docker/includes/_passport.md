

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

> Response Sample

```
{
    "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsiY2FyZGxlc3Mtc2VydmljZSIsImluY29nbml0byIsImlzdy1jb2xsZWN0aW9ucyIsImlzdy1jb3JlIiwiaXN3LWxlbmRpbmctc2VydmljZSIsImlzdy1wYXltZW50Z2F0ZXdheSIsInBhc3Nwb3J0IiwicGF5bWVudC1zZXJ2aWNlIiwicHJvamVjdC14LW1lcmNoYW50IiwidmF1bHQiXSwibWVyY2hhbnRfY29kZSI6Ik1YMTg3IiwicHJvZHVjdGlvbl9wYXltZW50X2NvZGUiOiIwMDE2NDYzOTg1NCIsInJlcXVlc3Rvcl9pZCI6IjAwMTE3NjE0OTkyIiwic2NvcGUiOlsicHJvZmlsZSJdLCJqdGkiOiI0ODdhMzM4Yi0zMjkwLTQxODQtYWQ0OC0yOGEyOGYzODM4YjYiLCJwYXlhYmxlX2lkIjoiMjMyNCIsImNsaWVudF9pZCI6IklLSUE5NjE0QjgyMDY0RDYzMkU5QjY0MThERjM1OEE2QTRBRUE4NEQ3MjE4IiwicGF5bWVudF9jb2RlIjoiMDQyNTk0MTMwMjQ2In0.dnybJSGaWkSujqqC0aSSCPwpI2ROLfv2mTiFAnqQiq56A8_3uUS7veRwIZU2zQfHn1sI9UQJ-2Dl-TA7ktWoP9EMVW-6AP1DlDEPQuQtXCuhYFHQNAdw6WlYQYYbaekakvv4hzj0VuGTUiQomS_jPJOq3ajoIXH639Ly8wvx7cjzelprWIyFRCgiXJII6LAXer2Rk_idPCcBRnsFI_uK94KxdnQ7vejMyg34EvXK3AnhmrYAifPTk3lMZEHNTti_T7bS1kjhMTxAlQ01Yxsf19Cah7mU1e8SDcO9RYlbHSZqlGsKyLSOUcCwaOYBCaqGrkblXyli4XSFHiMX94Sm7w",
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
