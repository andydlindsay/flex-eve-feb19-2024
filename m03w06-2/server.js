const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

// configuration
app.set('view engine', 'ejs');

// data
const videogames = {
  abc: {
    id: 'abc',
    title: 'Super Mario',
    genre: 'platformer',
    maxPlayers: 1
  },
  def: {
    id: 'def',
    title: 'Legend of Zelda',
    genre: 'top down action',
    maxPlayers: 1
  },
};

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
app.use((req, res, next) => {
  // do something with the req or res objects

  // call the next function to move on
  next(); // call the next middleware in line
});

// BROWSE => see all the video games
app.get('/videogames', (req, res) => {
  // retrieve all the videogames
  const templateVars = {
    videogames: videogames,
  };

  // render an HTML page
  res.render('videogames', templateVars);
});

// ADD
// http://localhost:8000/videogames/new
app.get('/videogames/new', (req, res) => {
  res.render('new-game-form');
});

app.post('/videogames', (req, res) => {
  // pull the game information out of the request body
  const title = req.body.title;
  const genre = req.body.genre;
  const maxPlayers = req.body.maxPlayers;

  // generate a random id
  const id = Math.random().toString(36).substring(2, 5); // 'ghi'

  // create a new videogame object
  const videogame = {
    id: id,
    title: title,
    genre: genre,
    maxPlayers: Number(maxPlayers)
  };

  // update the videogames object with our new videogame
  videogames[id] = videogame;
  console.log(videogames);

  // what do we do with the user???
  // redirect the user to the videogames page
  res.redirect('/videogames');
});

// READ => see info about one video game
// http://localhost:8000/videogames/abc
app.get('/videogames/:videogameId', (req, res) => {
  // grab the videogame id from the url
  const videogameId = req.params.videogameId;

  // look up the videogame using the id
  const templateVars = {
    videogame: videogames[videogameId]
  };

  // render a page to show the user
  res.render('videogame', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
