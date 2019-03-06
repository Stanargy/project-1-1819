"use strict";

function callAPI(){
    var endpoint = 'https://zoeken.oba.nl/api/v1/';
    var publicKey = '&authorization=' + '1e19898c87464e239192c8bfe422f280';
    var secretKey = '4289fec4e962a33118340c888699438d';
    var query = 'harry';
    var url = endpoint + 'search/?q='+query+publicKey;
    console.log(url)
 fetch(url, {mode: 'no-cors'})
 .then(res => res.json())
 .then(data => console.log(data))
    .catch((err) =>{
        console.log(err);
 })
}

callAPI();