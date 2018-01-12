//require express
var express = require('express');
var path = require("path");
var imageData = require('./apiJSON');

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

router.get('/getImage', function(req, res){
    
    var item = imageData.data.results[Math.floor(Math.random()*imageData.data.results.length)];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(item, null, 3));
});

//export router
module.exports = router;