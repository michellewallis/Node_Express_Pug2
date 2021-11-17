const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'pug');
app.set('views','./views');

const web = require('./controllers/web')

// GET http://localhost:3000/
app.get('/', web.getwebHome);

// GET http://localhost:3000/about
app.get('/about', web.getwebAbout);

// GET http://localhost:3000/location
app.get('/location', web.getwebLocation);

// GET http://localhost:3000/mission
app.get('/mission', web.getwebMission);

// GET http://localhost:3000/contact
app.get('/contact', web.getwebContact);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })