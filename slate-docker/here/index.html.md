---
title: Interswitch Documentation
# language_tabs:
#   - go: Go
#   - java: Java
#   - javascript: JavaScript
#   - python: Python
#   - ruby: Ruby
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="">Places API v</h1>

> Scroll down for code samples, Sample requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The **HERE Places (Search) API** is a web service which allows users to search and explore locations, buildings and other points of interest.

The Places (Search) API has a number of endpoints that center around two major features:

* Place discovery – search for places near your users
* Place description - get detailed information about the places your users are interested in

Within place discovery, the API has endpoints supporting a number of use cases, from which you can select according to the needs of your application:

* search – location-aware search for places based on user-provided search terms
* explore – find interesting places in an area (either near the user or selected by the user)
* here – identify what place is at a given location
* around – similar to explore, but optimised for augmented reality visual exploration applications such as LiveSight.

This Sample set works with version **1.0** or higher

Additional information can be found on [developer.here.com](https://developer.here.com/rest-apis/documentation/places)

<h1 id="-default">Default</h1>

## GET_places-v1-discover-here

<a id="opIdGET_places-v1-discover-here"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"*/*"},
        "Accept": []string{" application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/places/v1/discover/here", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/places/v1/discover/here");
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
  'Content-Type':'multipart/form-data',
  'Accept':'*/*',
  'Accept':' application/json'

};

$.ajax({
  url: '/places/v1/discover/here',
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
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*',
  'Accept': ' application/json'
}

r = requests.get('/places/v1/discover/here', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => '*/*',
  'Accept' => ' application/json'
}

result = RestClient.get '/places/v1/discover/here',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /places/v1/discover/here`

*Explore Nearby Places*

*Request a list of places close to a location *

The `discover/here` endpoint allow users to request a list of places near to a given point, based on a location precision parameter (in this case the `at` parameter) which must be provided. If the precision is high, the places around that point are returned in order of proximity. Otherwise a set of recommended places in the area is returned.

* **at**  `latlng`
 \- Location of the central point for the places search.    e.g. `52.515,13.377`

* **app_id**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_id` with every request.

* **app_code**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_code` with every request.

* **Accept**  `header`

  Format to request from the server

> Body parameter

```yaml
at: '37.7942,-122.4070'
app_id: <<YOUR_APP_ID>>
app_code: <<YOUR_APP_CODE>>

```

<h3 id="get_places-v1-discover-here-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|at|query|string|true|none|
|app_id|query|string|true|none|
|app_code|query|string|true|none|
|Accept|header|string|true|none|
   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 

|Parameter|In|Type|Description| 
 |---|---|---|---|
|at|body|string|true|none|
|app_id|body|string|true|none|
|app_code|body|string|true|none|

> Sample responses

> default Response

<h3 id="get_places-v1-discover-here-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_places-v1-discover-here-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_places-v1-discover-explore

<a id="opIdGET_places-v1-discover-explore"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"*/*"},
        "Accept": []string{" application/json"},
        "Accept-Language": []string{" fr-FR"},
        "Geolocation": []string{" geo"},
        "X-Map-Viewport": []string{" -122.408,37.793,-122.4070,37.7942"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/places/v1/discover/explore", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/places/v1/discover/explore");
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
  'Content-Type':'multipart/form-data',
  'Accept':'*/*',
  'Accept':' application/json',
  'Accept-Language':' fr-FR',
  'Geolocation':' geo',
  'X-Map-Viewport':' -122.408,37.793,-122.4070,37.7942'

};

$.ajax({
  url: '/places/v1/discover/explore',
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
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*',
  'Accept': ' application/json',
  'Accept-Language': ' fr-FR',
  'Geolocation': ' geo',
  'X-Map-Viewport': ' -122.408,37.793,-122.4070,37.7942'
}

r = requests.get('/places/v1/discover/explore', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => '*/*',
  'Accept' => ' application/json',
  'Accept-Language' => ' fr-FR',
  'Geolocation' => ' geo',
  'X-Map-Viewport' => ' -122.408,37.793,-122.4070,37.7942'
}

result = RestClient.get '/places/v1/discover/explore',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /places/v1/discover/explore`

*/places/v1/discover/explore*

*Request a list of popular places around a location using a foreign language*

Pass the the `Accept-Language` header to specify the user's preferred language.

* **at**  `latlng`
 \- Location of the central point for the places search.    e.g. `52.515,13.377`

* **app_id**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_id` with every request.

* **app_code**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_code` with every request.

* **Accept**  `header`

  Format to request from the server

* **Accept-Language**  `header`

  The user or client's preferred languages  

> Body parameter

```yaml
at: '48.858,2.2945'
app_id: <<YOUR_APP_ID>>
app_code: <<YOUR_APP_CODE>>

```

<h3 id="get_places-v1-discover-explore-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|at|query|string|true|none|
|app_id|query|string|true|none|
|app_code|query|string|true|none|
|cat|query|string|true|none|
|in|query|string|true|none|
|Accept|header|string|true|none|
|Accept-Language|header|string|true|none|
|Geolocation|header|string|true|none|
|X-Map-Viewport|header|string|true|none|
   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 
> Sample Response 
  
 ```  


  
 ```  

|Parameter|In|Type|Description| 
|---|---|---|---|
|at|body|string|true|none|
|app_id|body|string|true|none|
|app_code|body|string|true|none|

> Sample responses

> default Response

<h3 id="get_places-v1-discover-explore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_places-v1-discover-explore-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_places-v1-categories-places

<a id="opIdGET_places-v1-categories-places"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"*/*"},
        "Accept": []string{" application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/places/v1/categories/places", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/places/v1/categories/places");
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
  'Content-Type':'multipart/form-data',
  'Accept':'*/*',
  'Accept':' application/json'

};

$.ajax({
  url: '/places/v1/categories/places',
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
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*',
  'Accept': ' application/json'
}

r = requests.get('/places/v1/categories/places', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => '*/*',
  'Accept' => ' application/json'
}

result = RestClient.get '/places/v1/categories/places',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /places/v1/categories/places`

*Place Categories*

*Request a list of place categories available for a given location*

A place category request can be made using the `categories/places` endpoint in the request URL and specifying the  focal point using the `at` parameter.

* **at**  `latlng`
 \- Location of the central point for the places search.    e.g. `52.515,13.377`

* **app_id**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_id` with every request.

* **app_code**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_code` with every request.

* **Accept**  `header`

  Format to request from the server

> Body parameter

```yaml
at: '41.8369,-87.684'
app_id: <<YOUR_APP_ID>>
app_code: <<YOUR_APP_CODE>>

```

<h3 id="get_places-v1-categories-places-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|at|query|string|true|none|
|app_id|query|string|true|none|
|app_code|query|string|true|none|
|Accept|header|string|true|none|
   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 
> Sample Response 
  
 ```  


  
 ```  

|Parameter|In|Type|Description| 
|---|---|---|---|
|at|body|string|true|none|
|app_id|body|string|true|none|
|app_code|body|string|true|none|

> Sample responses

> default Response

<h3 id="get_places-v1-categories-places-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_places-v1-categories-places-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_places-v1-suggest

<a id="opIdGET_places-v1-suggest"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"*/*"},
        "Accept": []string{" application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/places/v1/suggest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/places/v1/suggest");
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
  'Content-Type':'multipart/form-data',
  'Accept':'*/*',
  'Accept':' application/json'

};

$.ajax({
  url: '/places/v1/suggest',
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
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*',
  'Accept': ' application/json'
}

r = requests.get('/places/v1/suggest', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => '*/*',
  'Accept' => ' application/json'
}

result = RestClient.get '/places/v1/suggest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /places/v1/suggest`

*Search Suggestions*

*Request a list of suggestions based on a partial query string*

A suggestions request can be made using the `suggest` endpoint in the request URL and adding the `q` parameter with the partial query string. The focal point for the suggestion service is defined using the `at` parameter.

* **at**  `latlng`
 \- Location of the central point for the places search.    e.g. `52.515,13.377`

* **q**  `text`
 \- Free-form text containing the search term.    e.g. `restaurant` or `Brandenburger Tor`

* **app_id**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_id` with every request.

* **app_code**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_code` with every request.

* **Accept**  `header`

  Format to request from the server

> Body parameter

```yaml
at: '52.5159,13.3777'
q: berlin
app_id: <<YOUR_APP_ID>>
app_code: <<YOUR_APP_CODE>>

```

<h3 id="get_places-v1-suggest-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|at|query|string|true|none|
|q|query|string|true|none|
|app_id|query|string|true|none|
|app_code|query|string|true|none|
|Accept|header|string|true|none|
   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 
> Sample Response 
  
 ```  


  
 ```  

|Parameter|In|Type|Description| 
|---|---|---|---|
|at|body|string|true|none|
|q|body|string|true|none|
|app_id|body|string|true|none|
|app_code|body|string|true|none|

> Sample responses

> default Response

<h3 id="get_places-v1-suggest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_places-v1-suggest-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## GET_places-v1-discover-search

<a id="opIdGET_places-v1-discover-search"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"*/*"},
        "Accept": []string{" application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/places/v1/discover/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/places/v1/discover/search");
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
  'Content-Type':'multipart/form-data',
  'Accept':'*/*',
  'Accept':' application/json'

};

$.ajax({
  url: '/places/v1/discover/search',
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
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*',
  'Accept': ' application/json'
}

r = requests.get('/places/v1/discover/search', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => '*/*',
  'Accept' => ' application/json'
}

result = RestClient.get '/places/v1/discover/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /places/v1/discover/search`

*One-Box Search*

*Request a list of nearby places based on a query string*

A free-text places search can be made using the `discover/search` endpoint in the request URL and adding the `q` parameter with the query string. The focal point of the search is defined using the `at` parameter.

* **at**  `latlng`
 \- Location of the central point for the places search.    e.g. `52.515,13.377`

* **q**  `text`
 \- Free-form text containing the search term.    e.g. `restaurant` or `Brandenburger Tor`

* **app_id**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_id` with every request.

* **app_code**  `text`
 \- A 20 byte Base64 URL-safe encoded string used for the authentication of the client application.    You must include an `app_code` with every request.

* **Accept**  `header`

  Format to request from the server

> Body parameter

```yaml
at: '37.7942,-122.4070'
q: restaurant
app_id: <<YOUR_APP_ID>>
app_code: <<YOUR_APP_CODE>>

```

<h3 id="get_places-v1-discover-search-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|at|query|string|true|none|
|q|query|string|true|none|
|app_id|query|string|true|none|
|app_code|query|string|true|none|
|Accept|header|string|true|none|
   <h3 id="get_api-v3-purchases-responses">Request Body</h3>
 
> Sample Response 
  
 ```  


  
 ```  

|Parameter|In|Type|Description| 
|---|---|---|---|
|at|body|string|true|none|
|q|body|string|true|none|
|app_id|body|string|true|none|
|app_code|body|string|true|none|

> Sample responses

> default Response

<h3 id="get_places-v1-discover-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="get_places-v1-discover-search-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

