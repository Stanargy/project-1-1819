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

(async () => {
    localStorage.clear();
    var endpoint = 'https://zoeken.oba.nl/api/v1/';
    var publicKey = '&authorization=' + '1e19898c87464e239192c8bfe422f280';
    var secretKey = '4289fec4e962a33118340c888699438d';
    var query = 'harry';
    var url = endpoint + 'search/?q=' + query + publicKey;

    const api = new API({
        key: "1e19898c87464e239192c8bfe422f280"
    });
    const stream = await api.createStream("search/" + query);

    stream

        .pipe((res) => {
            template(res)

        })

        .catch(console.error);
})();



function template(res) {
    for (var i = 0; i < 1; i++) {
        console.log(res[i])
        var targetHTML = document.querySelector('.ar-box')
        targetHTML.innerHTML = `
        <a-box id="aBox" position='-1 0 0' src="https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"
        height="0.1" width=" 0.5" depth="0.5"></a-box>
        `;
        
    }
    console.log('succesfully templated box')

}