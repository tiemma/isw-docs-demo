---
title: Interswitch Payment Gateway
language_tabs:
  - go: Go
  - java: Java
  - javascript: JavaScript
  - python: Python
  - ruby: Ruby
  - csharp: 'C#'
  - swift: Swift
  - objective-c: Objective-C
  - php: PHP
toc_footers: []
includes: [notes,passport,signatures,purchases,enrollment,visa-docs,validation,errors]
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id=""> Interswitch Payment Gateway </h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes how a third-party will request for Interswitch Payment Gateway API. Note that all data formats and response definitions are in conformance with the REST standard.

Interswitch payment gateway is a product for businesses who would like to accept payments online and on mobile devices. 

If you are a certified and regulated payment processor who would like to provide your own payment gateway, this payment gateway makes available a processing API with which you can process both local and international card payments for businesses in Nigeria, Kenya, Uganda and Gambia. 

For more information about these possibilities, please send an email to [ipgsupport@interswitchgroup.com](mailto:ipgsupport@interswitchgroup.com)


<h1 id="getting-access-token"> Getting Access Token </h1>

To begin the using the platform, you must register for an account on the [Interswitch Payment Gateway portal](https://www.interswitchgroup.com/paymentgateway/). 

Please follow the registration process and you'd be redirected to the platform.


<h1 id="-default">APIs Currently Enrolled</h1>

The following APIs are avaiable for us and have been categorised for ease of access as follows below:

- [Basic Purchase](#basic-purchase)
- [OTP Purchase]()
- [Payment Token Purchase](#payment-token)
- VISA Cardinal Transaction (NoPIN)
- Auto Enrollment (M0 Transaction)
- Card Validation (Adding Card)
- Recurring Payments
- [Error Codes](#errors)

