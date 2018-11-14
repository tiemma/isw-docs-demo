
<h1 id="visa-docs"> Visa Transactions </h1>

## POST_V3DSStart

<a id="opIdPOST_V3DSStart"></a>

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
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/V3DSStart", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

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
|osb|query|string|false|none|
|VAA|query|string|false|none|
|Content-Type|header|string|false|none|
|body|body|object|false|none|
|» TermUrl|body|string|false|none|
|» PaReq|body|string|false|none|
|» MD|body|string|false|none|

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
