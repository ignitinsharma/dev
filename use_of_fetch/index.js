//--> fetch should take time
// --> if should dont block others code
//--> fetch need to be some promise
//--> this is asysc call

//--> .then & .catch
//--> asysc await

//--> The fetch() method in JavaScript is used to request to the server 
//--> and load the information on the webpages

let x=fetch("https://fakestoreapi.com/products/categories")
.then(function(value){

//--> data come in readable stream so we have colllect and change using JSON()
return value.json() // collecting data

}).this(function(value){
    console.log(value)
}).catch(function(value){
    console.log(value)
});

