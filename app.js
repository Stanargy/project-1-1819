
var express = require('express');
var app = express();

console.log('running app.js');


var homeRoute = require('./public/js/router');
var idRoute = require('./public/js/router');

app.use('/static', express.static('public'))


// GET method route
app.get('/', function (req, res) {
    res.sendFile('C:/Users/user/Desktop/MinorWebDevelopment/project1/project-1-1819/index.html')
  })


/////////////


/////////////


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started on port ${port}`));
