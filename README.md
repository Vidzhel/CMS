# Bluro

**Bluro** is a headless content management (CMS) system that was built with a clear goal to
achieve - build something interesting and learn useful skills and technologies. As a part of the
project a blog "Tech Overload" was build.

Backend uses **no express** and **no sequelize or other ORMs** only bare bones, only hardcore

Frontend on the other hand make use of **React and bunch of other dependencies** to simplify
development

## Content

-   [Blog that was built with the use of Bluro](#TechOverload)
    -   [API overview](#API)

---

## TechOverload

## API

### Configs

All configs can be added to `configs.json` file at the root of the project or introduced as
environment variables to make them more secure.

-   host - defines ip that the server will be listening
-   port - defines port that the server will be listening
-   dbhost - ip of an db server
-   database - name of already created database
-   user - db user name
-   password - db user password
-   connectionTimeout - max time that the server will be waiting for connection to the db
-   rootUserName - user name of an admin that will be created in case it doesn't exist. That and the
    following bunch of parameters with the same prefix are used by on of default modules: `Auth` and
    may be completely ignored in case you don't use the module
-   rootEmail - user name of the admin
-   rootPassword - password of the admin
-   mailService - a service that will be used to send notification e.g. `gmail`. That and the
    following bunch of parameters with the same prefix are used by one of default modules:
    `Notification` and may be completely ignored in case you don't use the module
-   mailUser - a login of a service user
-   mailPassword - a password of the service user
-   mailSubject - subject that will be used to send emails
-   modules - a list of connected modules (order is matter as db tables will be built the order)
-   allowedMethods (optional) - CRUD allowed HTTP methods e.g. `POST`. The parameter is used in a
    default global rule that is named crud.
-   allowedOrigins (optional) - allowed hosts e.g `localhost`
-   exposedHeaders (optional) - headers that are allowed to be send by client-side code e.g
    `Cookies`
-   exposedHeaders (optional) - headers that are allowed to be read by client-side code e.g
    `X-Custom-Header`
-   permissionAge (optional) - notes how long a CORS preflight request is valid (value in seconds)
-   allowCredentials (options) - tells browsers whether to expose the response to frontend
    JavaScript code when the request's credentials mode is `include` (boolean value)

### API endpoints

-   Authentication
    -   POST /signup - register account [see](#Authentication)
    -   POST /login - user authentication [see](#Registration)
-   Articles
    -   GET /articles - get collection of articles
    -   GET /articles/:verbose - get article by id or verbose name (if exists)
    -   POST /articles - create new article
    -   PUT /articles/:verbose - update article by id or verbose name (if exists)
    -   DELETE /articles/:verbose - delete article by id or verbose name (if exists)
-   Profiles
    -   GET /profiles - get collection of profiles
    -   GET /profiles/:verbose - get article by id or verbose name (if exists)
    -   PUT /profiles/:verbose - update profile
    -   DELETE /profiles/:verbose - delete profile
    -   GET /profiles/:user/followers - get followers of an user
    -   GET /profiles/:user/followers/:follower - is a 'follower' follows an user
    -   GET /profiles/:user/followings - get subscriptions of an user
    -   POST /profiles/:user/followers - follow an user
    -   DELETE /profiles/:user/followers - stop following an user

### Authentication

**Endpoints**

POST /login

**Requests**

```json
{
    "email": string,
    "pass": string
{
```

**Response**

```json
{
	"session": {
		"verbose": "id that is used to get profile info",
		"userName": "userName",
		"role": "user role: 'ADMIN', 'USER'",
		"email": "email"
	},

	"errors": "list of descriptions of errors",
	"success": "list of success strings",
	"info": "list of info strings"
}
```

**Codes**  
200 - Logged in  
403 - Wrong username or password

### Registration

**Endpoints**

POST /signup

**Request**

```json
{
	"login": "login",
	"email": "email",
	"pass": "password",
	"repPass": "repeated password"
}
```

**Response**

```json
{
	"errors": "list of descriptions of errors",
	"success": "list of success strings",
	"info": "list of info strings",

	"session": {
		"verbose": "id that is used to get profile info",
		"userName": "userName",
		"role": "user role: 'ADMIN', 'USER'",
		"email": "email"
	}
}
```

**Codes**  
201 - Created  
400 - Invalid data was provided 403 - An user with the same name

### Profiles

**Endpoints**

-   /profiles/:verbose - GET - get profile by id - responses with an entry
-   /profiles - GET - get all profiles - responses with collection

Query parameters `count` and `offset` may be specified to get a part of collection, default 10 and 0
respectively

**Endpoints**

-   /profiles/:verbose - PUT - update profile with parameters

Headers: `Content-Type: multipart/form-data` OR `json` (if you need to update profile image, request
update with the use of multipart form data content type header)

Files:

-   `[img]` - new profile image

**Request**

```json
{
	"[verbose]": "new id that is used to get profile info",
	"[userName]": "new use name",
	"[role]": "new user role: 'ADMIN', 'USER'",
	"[email]": "new email",
	"[pass]": "new pass",
	"[repPass]": "repeat new pass",
	"[about]": "new about user"
}
```

`NOTE:` all of the request parameters are optional and may be omitted if you don't want you update
them. Role can only be changed by admins. To change password you need to specify both passwords.
Only an user and an admin can change the user's profile info

400 - Bad data  
403 - User with the same verbose has already been registered 404 - User not found  
200 - OK

**Endpoints**

-   /profiles/:verbose - DELETE - delete profile

`NOTE:` Only an user and an admin can delete the user's profile info

**Endpoints**

-   /profiles/:verbose/followers - GET - get user's followers - returns collection
-   /profiles/:verbose/followings - GET - get user's subscriptions - returns collection
-   /profiles/:verbose/followers/:verbose - GET - is an user follows another user - returns entry

200 - OK

**Endpoints**

-   /profiles/:verbose/followers - POST - subscribe for an user
-   /profiles/:verbose/followers - DELETE - unsubscribe from an user

404 - User not found  
403 - You're not subscribed or you've already subscribed 200 - OK

### Articles

#### Modify article (create or update)

**Endpoints**

-   /articles/:verbose - PUT - modify
-   /articles - POST - create

**Request**

Headers: `Content-Type: multipart/form-data`

Files:

-   `content` - text content of an article
-   `previewImg` - preview image

```json
{
	"verbose": [string], // human readable name, if not specified, autogenerated will be used
	"publDate": [string], // date and time of publication or null if an article in drafts (in milliseconds)
	"changeDate": string, // date and time of changing (in milliseconds)
	"title": string,
	"description": string
}
```

`NOTE:` in the case of updating article all request parameters (including files) are optional but at
least one has to be specified

**Response**

```json
{
	"errors": string[],
	"success": string[],
	"info": string[]
}
```

**Codes**  
201 - Created  
200 - Updated  
403 - Forbidden updating someone else's article  
401 - Unauthorized user

#### Get article (articles)

GET

-   /articles/:verbose
-   /articles

Query parameters `count` and `offset` may be specified to get a part of collection, default 10 and 0
respectively

No request body needed

**Response**

```json
{
	"errors": string[],
	"success": string[],
	"info": string[],

	"collection": {
		"count": number,
		"offset": number,
		"data": object[] // Collection of data
	}
}
```

```json
{
	"errors": string[],
	"success": string[],
	"info": string[],

	"entry": [object]
}
```

**Codes**  
200 - Ok  
404 - Article or articles weren't found

### Profiles

### General Response

```json
{
	"session": {
		"userName": string,
		"email": string,
		"role": string
	},

	"errors": string[],
	"success": string[],
	"info": string[],

	"collection": {
		"count": number, // Number of items in the collection
		"data": object[] // Collection of data
	}
}
```

### Codes

200 **OK** - Standard response for successful HTTP requests. Data Updated, Delete

201 **Created** - The request has been fulfilled, resulting in the creation of a new resource.

202 **Accepted** - The request has been accepted for processing, but the processing has not been
completed. Async operation e.g. DELETE resource

400 **Bad Request** - The HTTP request that was sent to the server has invalid syntax.

401 **Unauthorized** - The user trying to access the resource has not been authenticated or has not
been authenticated correctly.

403 **Forbidden** - The user made a valid request but the server is refusing to serve the request,
due to a lack of permission to access the requested resource.

404 **Not Found** - The user is able to communicate with the server but it is unable to locate the
requested file or resource.

500 **Internal Server Error** - Server cannot process the request for an unknown reason.

### Start

To start bluro cms you need to provide some config parameters. You can do it ether by passing into
config.json in the root of the bluro_cms directory or by specifying environment variable. I'd
recommend set sensitive data as an environment variable.

Environment variables:

-   secret - string that will be used to generate and validate JWT (JS Website Tokens)

## Structure

## Features
