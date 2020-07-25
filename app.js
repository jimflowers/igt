/* app.js
   The main file here creates and runs the server
 */

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
var jim = 'hi there'

// database
const db = require('./config/database')

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// Server
const app = express();

// Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended:false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/',(req,res) => res.render('index'));

// OBS Routes
app.use ('/obs', require('./routes/obs'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})