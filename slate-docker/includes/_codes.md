# HTTP Codes

<aside class="notice">This contains docs on our HTTP error codes and their descriptions</aside>

The IPG API uses the following HTTP codes:

| Error Code | Meaning
---------- | -------
200 | OK  - Your request was successful, great job!
400 | Bad Request -- Your request needs a bit of work
401 | Unauthorized -- Your API key is wrong
403 | Forbidden -- The requested API has some wrong keys in there!
404 | Not Found -- The specified request could not be found
500 | Internal Server Error -- We had a problem with our server. Try again later.
501 | Not Implemented -- We're not doing this yet!. Please try again later.


# Transaction Response Codes

S/N | Response Code | Meaning
---|---|---
1 	| E10  | 	The service field tag has not been populated.  Please ask Interswitch Support for more help.
2 	| E11  |   This requests expects a transactionType field to be set and it is not.  Please ask Interswitch Support for more help
3 	| E12  | 	SecurityToken header is missing.
4 	| E13  | 	Username or password is wrong.
5 	| E14  | 	Missing content type header.
6 	| E15  | 	The transaction you are trying to do is not supported
7 	| E16  | 	The service you have specified is not available
8 	| E17  | 	The service provider you have specified has not been set up on the platform.
9 	| E18  | 	The service is unreachable at the moment
10 	| E19  | 	A bad response was received from service provider
11 	| E20  | 	Your request has timed out
12 	| E21  | 	An unknown error has occurred. Please ask Interswitch Support for more help.
13 	| E22  | 	Access key has not been supplied. Ensure the Authorization header has been set appropriately.
14 	| E23  | 	Nonce has not been supplied. Ensure the Nonce header has been set appropriately.
15 	| E24  | 	Please synchronize your time with the server and ensure your time is not outside of 30mins of the Server local time. The standard time zone used is GMT
16 	| E25  | 	Nonce has already been used
17 	| E26  | 	Signature failed for this request.  Please ask Interswitch Support for more help.
18 	| E27  | 	An unknown error occured during Authentication.  Please ask Interswitch Support for more help.
19 	| E28  | 	Your credentials do not have access to this resource
20 	| E29  | 	Timestamp is missing in your header
21 	| E30  | 	SecurityToken header is bad.
22 	| E31  | 	XML data is badly formatted
23 	| E32  | 	JSON data is badly formatted
24 	| E33  | 	Keystore is not accessible. Contact Interswitch.
25 	| E34  | 	The system is busy at the moment, please try again later.
26 	| E35  | 	Bad request to service provider. Contact Interswitch.
26 	| E36  | 	Bad request to service processor. Contact Interswitch.
27 	| E37  | 	Bad request from client. Kindly check your message.
28 	| E38  | 	Bad response from service provider. Contact Interswitch.
29 	| E39  | 	Bad response from service processor. Contact Interswitch.
30 	| E40  | 	Bad response to client. Contact Interswitch.
31 	| E41  | 	Bad request from client. Kindly check your message.

