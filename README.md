# OBA-R

## Summary
This is a single page web appication. oba-r

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [API](#4-API)
5. [Design decisions](#7-Design-decisions)
6. [To-do](#8-To-do)

## 1. Live Demo
https://oba-ar.netlify.com

## 2. Install
To install the project just fork it and clone it to your device.
Then launch the "project-1-1819" folder. 

## 3. Features
This project features an Augmented Reality experience for visitors of the Public Library of Amsterdam. It uses the ar.js library and a-frame. Users can type in a query and select submit. The sourcecode wil then call the library's API and renders the title, author and short description in AR back to the user via a camera instance. 

The homepage renders the earth in AR-view by default

![With Camera Entity](StanOoms1.JPG)
![Without Camera Entity](StanOoms2.JPG)
![View After submitting a Query](StanOoms3.JPG)
![View After Selecting a object from the Query](StanOoms4.JPG)



## 4. API


Connecting To the API and retrieving information:
```js
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
```

## 5. Design Decisions
I chose for a augmented reality approach to this project because making AR web based is a relatively new technology. 
This encouraged me to use different tools and find my way through new problems which in turn, granted me experience on a-frame and ar.js. 

## 6. To-do
- [X] Render data form OBA API to the browser
- [X] Add a Camera entity
- [X] Add AR-objects to the view that show off potential of web-based-AR
- [X] Setup Marker entity for ar.js
- [X] Setup live view on Netlify
- [X] Add user search input functionality
- [ ] Setup routes for node.js
- [ ] Modulize docs
- [ ] Take out global variables
- [ ] Fix filter problem for image data from API
- [ ] Add more Shadowing Effects


