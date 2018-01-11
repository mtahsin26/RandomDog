//require express
var express = require('express');
var path = require("path");

// create our router object
var router = express.Router();

// route for Home page
router.get('/', function(req, res){
    res.render("pages/index")
});

// route for our about page
router.get('/about', function(req, res){
    res.render("pages/about")
});


//export router
module.exports = router;