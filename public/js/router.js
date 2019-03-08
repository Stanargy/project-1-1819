//import templateFunction from "./app.js";
//console.log(testRecipes);
//prevent global scope

// var routie = require('./routie') 

// (function() {

//     // write logic to fill html with detailed data
//     var setContent = function (value) {
//         alert(`${value}`);
//     }
// //////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////
// //init route, check if hash === '' => set to #home

//     ////////////////////////////////////////////////////////////////////////////////////////////
//     // Init app, set base url equal to home
//     routie({
        
//         'home': function () {
//             // call view functionalities to render content to the page
//             //    .then(foodgroups => template.renderFoodGroups(foodgroups))            
            
//             console.log("succesfully entered the homepage");
//             console.log(sessionStorage.length + ' = sessionStorageLength At end' );        
//         },
        
//         'home&:id': function(id){
//             //Detail Page
//             console.log('entered a detail page by :id')
            
//         },
        
//         // tip, call: templating actor!!!
//         '*': function () {
//             console.log('404');
//             setContent("Error 404, not found what you're looking for. You will be redirected back to homepage(/)")
//             getHome();
//         }
        
//     });
    
//     //////////////////////////////////////////////
// })()