/* get request to get data, post for sending data to server
headers - status code = if request was successfull
200 = success
301 = redirect (if name of page has changed)
401 = unauthorised (not logged in?)
404 = not found (nothing at that address)
500 = internal server error 

http://httpstatuses.com/
http://httpstatusdogs.com/

1xx = informational
2xx = success
3xx = redirect
4xx = error on client (not found, address wrong)
5xx = error on server (valid request but errors with server)

content-type

type of content so browser knows what to do with data

text/html
text/css
image/jpeg
application/javascript
application/json

API is a way for a website or company to enable dev to access data, to load/read


API (fancy web application)
public = git hub
semi private = can use with fee
private = employees in organisation etc

TFL API (london underground)

http://api.tfl.gov.uk/
^ host

BikePoint                ?query=Clerkenwell
^ path/end point      ^ query parameters to filter

promises - with async code

represent of a computation that has not finished yet

1 > order a meal - begins async action (Pending)
2 > get ticket with no. (this is the promise)
3 > if you get order, promise is Fulfilled. if failed, promise is Rejected

when we get a result the promise is resolved

.then (if fulfilled do something with it)
return if need to continue using (otherwise returns undefined)
.catch (if rejected then do something)

fetch returns a promise,

return response.json();

JavaScript Object Notation

used for data transfer (standard)
used for most programming languages

can have string number boolean, array etc

no functions or method!

JSON for key needs "Key", still uses CamelCase

paramater.all[0].text?


fetch("url of api")
.then(function(response) {
    if (response.status >= 200 && <= 299)
})

fetch("url api", {
    method: "POST", 
    headers: {
        "Content-Type" : "application/json"
    },
    body: {
        name: "Jane",
        email: "jane@gmail.com",
        password: "password",
        authType: "github",
        authUsername: "msJane"
    }
})
.then(function(response) {
    return response.json()
}).then(console.log)
.catch(console.log)
*/