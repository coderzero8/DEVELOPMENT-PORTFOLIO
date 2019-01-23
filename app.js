var express = require('express');
//var todoController = require('./controllers/todoController')
var mainController = require('./controllers/mainController')
var app = express();
// set up template enginve

app.set('view engine','ejs');
//static file
app.use(express.static('./public'));

//localhost:300/assets/styles.css
//todoController(app);
mainController(app);
//listen to port
app.listen('3000')

console.log('You are listening to port 3000');
