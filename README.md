# blog-live-code

#REST API with Authentication

|Route           |HTTP     |Description                                               |
|----------------|---------|----------------------------------------------------------|
|/api/signup     |POST     |Sign up with new user info                                |
|/api/signin     |POST     |Sign in while get an acces token based on credential      |


#REST API Blog

|Route           |HTTP     |Description                                               |
|----------------|---------|----------------------------------------------------------|
|api/blog        |GET      |get All article blog for all user                         |
|api/blog        |POST     |post a Blog only for authenticated user                   |
|api/blog/:id    |GET      |get one artile for all user                               |
|api/blog/:id    |PUT      |update one Article only for authenticated user            |
|api/blog/:id    |DELETE   |delete one Article only for authenticated user            |
