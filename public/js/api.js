"use strict";
// (function(){


//     function callAPI(){
//         console.log(url)
//      fetch(url, {mode: 'no-cors'})
//      .then(res => res.json())
//      .then(data => console.log(data))
//         .catch((err) =>{
//             console.log(err);
//      })
//     }

//     callAPI();
// });

var submitMe = document.querySelector('#submitButton')
submitMe.addEventListener('click', callAPI)
submitMe.addEventListener('click', moveToSide)

async function callAPI(){
    var query = document.querySelector('#inputField').value;
    localStorage.clear();
    console.log('API called')
    const api = new API({
        key: "1e19898c87464e239192c8bfe422f280"
    });
    const stream = await api.createStream("search/" + query + "&facet=type(movie)");
    stream
        .pipe((res) => {
            template(res)
        })
        .catch(console.error);
};

function template(res) {

    for (var i = 0; i < 2; i++) {
        console.log(res)
        console.log(res[i])
        console.log(i);

        //set property values to variables
        if(i = 0){
            var mainTitle1 = res[i].titles.title._text
            var imageURL1 = res[i].coverimages.coverimage[1]._text
        }
        if(i = 1){
            var mainTitle2 = res[i].titles.title._text
            var imageURL2 = res[i].coverimages.coverimage[1]._text
        }
        if(i = 2){
            var mainTitle3 = res[i].titles.title._text
            var imageURL3 = res[i].coverimages.coverimage[1]._text
        }
     
        var targetHTML = document.querySelector('.ar-box')

// display buttons for detailed information about a single product
        document.getElementById('nextButton1').style.display = "block";
        document.getElementById('nextButton2').style.display = "block";
        document.getElementById('nextButton3').style.display = "block";
           
           // actual template
           targetHTML.innerHTML = `
           <a-scene embedded arjs>
           <a-marker class="ar-box" preset="hiro">
           
           
           <a-text color="blue" value="${mainTitle1}" rotation="-90 0 0" width="2" position="-1.25 -1 -2">
           <a-plane src=${imageURL1} width="2" height="2" shadow="receive: false" position="-1.25 -1 -2"></a-plane>
              </a-text>
           
              <a-text color="blue" value="${mainTitle2}"  rotation="-90 0 0" width="2" position="0 -1 0">
              <a-plane src=${imageURL2} width="2" height="2" shadow="receive: false" position="0 1 -2"></a-plane>
              </a-text>
           
              <a-text color="blue" value="${mainTitle3}"  rotation="-90 0 0" width="2" position="1.25 -1 -2">
              <a-plane src=${imageURL3} width="2" height="2" shadow="receive: false" position="1.25 -1 -2"></a-plane>
              </a-text>
              

                
        </a-marker>
        <a-entity light="type:directional; castShadow:true;" position="1 1 1"></a-entity>
        <a-entity camera="zoom: 0"></a-entity>
        
       </a-scene>
       `;
        console.log(targetHTML)
        
listenForClicks(res)
}
console.log('succesfully templated box')
}

function templateDetail1(res){
    var mainTitle1 = res[0].titles.title._text;
    var author = "";

    if(res[0].authors.author._text = undefined){
        author = res[0].authors.author[0]._text;
    }
    else{
        author = res[0].authors.author._text;
    }


    var summary = res[0].summaries.summary._text;
    var id = res[0].id._text;

    console.log('templateDetail function triggered')
    return () => {
    document.querySelector('.ar-box').innerHTML = `
    <a-scene embedded arjs>
    <a-marker class="ar-box" preset="hiro">

    <a-text color="blue" value="Author: ${author}" rotation="-90 0 0" width="2" position="-1 -3 0"></a-text>
    <a-text color="green" value="${summary}" rotation="-90 0 0" width="2" position="-1 -2 0"></a-text>
    <a-text color="black" value=${mainTitle1} rotation="-90 0 0" width="2" position="-1 -1 0"></a-text>
    <a-text color="red" value="ID: ${id}" rotation="-90 0 0" width="2" position="0 -1 0"></a-text>

    </a-marker>
    <a-entity light="type:directional; castShadow:true;" position="1 1 1"></a-entity>
    <a-entity camera="zoom: 0"></a-entity>
    
   </a-scene>
   `;
}
}
function templateDetail2(res){
    var mainTitle2 = res[1].titles.title._text;
    var author = "";

    if(res[0].authors.author._text = undefined){
        author = res[0].authors.author[0]._text;
    }
    else{
        author = res[0].authors.author._text;
    }
    var summary = res[1].summaries.summary._text;
    var id = res[1].id._text;


    console.log('templateDetail function triggered')
    return () => {
        document.querySelector('.ar-box').innerHTML = `
        <a-scene embedded arjs>
        <a-marker class="ar-box" preset="hiro">

        <a-text color="blue" value="Author: ${author}" rotation="-90 0 0" width="2" position="-1 -3 0"></a-text>
        <a-text color="green" value="${summary}" rotation="-90 0 0" width="2" position="-1 -2 0"></a-text>
        <a-text color="black" value=${mainTitle2} rotation="-90 0 0" width="2" position="-1 -1 0"></a-text>
        <a-text color="red" value="ID: ${id}" rotation="-90 0 0" width="2" position="0 -1 0"></a-text>

        </a-marker>
        <a-entity light="type:directional; castShadow:true;" position="1 1 1"></a-entity>
        <a-entity camera="zoom: 0"></a-entity>
        
        </a-scene>
        `;
    }
}
function templateDetail3(res){
    var mainTitle3 = res[1].titles.title._text
    var author = "";

    if(res[0].authors.author._text = undefined){
        author = res[0].authors.author[0]._text;
    }
    else{
        author = res[0].authors.author._text;
    }
    var summary = res[1].summaries.summary._text;
    var id = res[1].id._text


    console.log('templateDetail function triggered')
    return () => {
        document.querySelector('.ar-box').innerHTML = `
        <a-scene embedded arjs>
        <a-assets> <img id="texture" src="/public/img/marker.png"></img>
        </a-assets>
        
                <a-box material="opacity:0.5" width="10" height="0.2" depth="5"
                    position="0 -5 0"
                    src="#texture">
                </a-box>
        
                <a-marker class="ar-box" preset="hiro">

        <a-text width="10" height="2" depth="8" color="blue" value="Author: ${author}" rotation="-90 0 0" width="2" position="-1 -3 0"></a-text>
        <a-text width="10" height="1" depth="8" color="green" value="${summary}" rotation="-90 0 0" width="2" position="-1 0 0"></a-text>
        <a-text width="10" height="1" depth="8" color="black" value=${mainTitle3} rotation="-90 0 0" width="2" position="-1 0 4"></a-text>
        <a-text width="10" height="1" depth="8" color="red" value="ID: ${id}" rotation="-90 0 0" width="2" position="0 0 8"></a-text>





    </a-marker>
    <a-entity light="type:directional; castShadow:true;" position="1 1 1"></a-entity>
    <a-camera zoom="0" position="0 0 5"></a-camera>
    
   </a-scene>
   `;
}
}

function listenForClicks(res){
var button1 = document.querySelector('#nextButton1')
var button2 = document.querySelector('#nextButton2')
var button3 = document.querySelector('#nextButton3')

    button1.addEventListener('click', templateDetail1(res));
    button2.addEventListener('click', templateDetail2(res));
    button3.addEventListener('click', templateDetail3(res));

}

// animation add fadeSide class
function moveToSide(){
    console.log('moveToSide animaton Called')
    var header = document.querySelector('.header');
    header.classList.add("moveToSide")
}


(function(){
   var navButton = document.querySelector('#navButton')
   navButton.addEventListener('click', hideAR)
})

function hideAR(){
    var button = document.querySelector(".header")
    button.style.opacity = "0.5";
}



//        <a-scene embedded arjs>
//        <a-assets>
//        <!-- RI, LE, TO, BO, FR, BA-->
//        <a-cubemap id="sky">
//        <img src="/public/img/marker.png">
//        <img src="/public/img/marker.png">
//        <img src="/public/img/marker.png">
//        <img src="/public/img/marker.png">
//        <img src="/public/img/marker.png">
//        <img src="/public/img/marker.png">
//        </a-cubemap>
//        <a-marker class="ar-box" preset="hiro">



// </a-marker>
// <a-entity geometry="primitive: box" material="envMap: #sky; roughness: 0" camera="zoom: 0"></a-entity>
// </a-assets>
//       </a-scene>