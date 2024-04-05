# M03W07 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]

### Security Problems
1. Passwords as plaintext
2. Cookies are plaintext
3. HTTP is a plaintext protocol


### Hashing
* one way process
* plaintext password => hashing algo => djkfhasdhflaksdhfjahsdkfhlajksdhf
* cannot be undone*
* plaintext password + salt => hashing algo => djkfhasdhflaksdhfjahsdkfhlajksdhf

'12345678' + 'fajsdkfjaksdhflasd'

### Encryption
* two way process
* plaintext cookie => cookie-session middleware => 'afsdhfkhasfKfhaksdh'
* 'afsdhfkhasdkfhaksdh' => cookie-session middleware => plaintext cookie

client <============ tcp/http ==============> middleware <====> server
response 
                                              cookie-session
                                              req.session

// setting
res.cookie('userId', user.id);
req.session.userId = user.id;

// reading
req.cookies.userId;
req.session.userId;

// clearing
res.clearCookie('userId');
req.session.userId = null;
req.session = null;


http://localhost:9876/login

Monster in the Middle (MitM)

HTTPS => HTTP Secure

https://www.google.com/


### Asymetric Encryption
* public key => encrypt the data
* private key => decrypt the data


### REST
* must understand REST
* RESTful architecture
* naming convention for routes
* REpresentational State Transfer

GET all-the-urls
POST create-a-new-url

resources are plural: users, urls, cars
actions are singular: login, logout, register

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

Additional HTTP methods:
DELETE => deletes a resource
PUT => replace a resource completely
PATCH => replace a piece of a resource

app.patch()
app.put()
app.delete()

app.get()
app.post()









