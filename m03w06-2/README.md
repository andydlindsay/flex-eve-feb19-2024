# M03W06 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD
* Create
* Read
* Update
* Delete

### BREAD
* Browse => I want to see all of a resource
* Read => I want to see 1 particular resource
* Edit
* Add
* Delete

### Data

```js
const videoGame = {
  title: 'Mario Bros',
  genre: 'platformer',
  maxPlayers: 1,
};
```
(req, res, next) => {}
                                                                     app.post()
client <========== tcp/http ===> middleware <====> middleware <====> server
                                                                      request.body
                                  body-parser       morgan
                                  request.body      console.log
                                  next()            next()



GET => retrieves something and shows it
POST => creates something

urlencoded
title=Super+Smash+Bros 
& genre=fighting & 
maxPlayers=4


















