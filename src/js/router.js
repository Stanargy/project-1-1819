var express = require('express');
//var mongodb = require('mongodb');


var router = express();

// var username = "sdeooms";
// var password = "This0nlyL00ksL1ikeAPW";
// var user = "admin";
// var PW = "xc5HvZxNxXLruE4";

console.log('router')

//init route, check if hash === '' => set to #home
var initializeRoute = function () {
        
    if (window.location.hash === '') {
        window.location.hash = '#home'
        return;
    }
}

//initializeRoute();
function homeRoute(req, res){
        res.sendFile('C:/Users/user/Desktop/Minor Web Development/projectOBA/ar2.html');
        console.log("sended homeroute");
    };

function idRoute(req, res){
    res.send('this is the :id page')
}

    // Get posts   

// Add post

// Delete post


// async function loadpostsCollection(){
//     var client = await mongodb.MongoClient.connect
//     ('mongodb://'+user+':'+PW+'@ds137089.mlab.com:37089/budgetlegalapp', {
//            useNewUrlParser: true,
//        })
//        console.log('looked up mongo');
//        return client.db('budgetlegalapp').collection('posts');
//     };

module.exports = idRoute;
module.exports = homeRoute;