////////// EXPRESS /////////
//require our dependencies

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = process.env.PORT || 3000;


//Setting template engine
app.set('view engine', 'ejs')
app.use(expressLayouts);

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files path
app.use(express.static(__dirname + "/public"));

// start server
app.listen(port, function(){
    console.log('Server Started');
});
