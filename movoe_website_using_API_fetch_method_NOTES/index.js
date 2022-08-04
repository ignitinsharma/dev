//--> fetch should take time
//--> if should dont block others code
//--> fetch need to be some promise
//--> this is asysc call

//--> .then & .catch
//--> asysc await

//--> The fetch() method in JavaScript is used to request to the server

//--> and load the information on the webpages

// this is using promise anf then and catch
// fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=a3e61ccb")
// .then(function (value) {
//    return value.json() // collecting data
// })
//  .then(function (value) {
//  console.log(value)
//   })
// .catch(function (error) {
//  console.log(error)
// });

let contianer = document.getElementById("contianer");

async function maindata() {
  //--> then for handling sucess value
  try {
    //--> fetch its a promise for promise we need to read sucess value and error value
    let fatchdata = await fetch(
      " http://www.omdbapi.com/?i=tt3896198&apikey=a3e61ccb"
    );

    //--> data come in readable stream so we have colllect and change using JSON()
    //--> also we await here while coverting data because its also take time while coveting
    //--> its a kind of wait when this take time so we can use just kidding... but kind of.....
    let data = await fatchdata.json();

    //--> we are appending here because data is coming from after coverting
    //--> so thats why we have to pass the data from here to their
    display(data);
    console.log(data);
  } catch (error) {
    //--> catch for error value for handling sucess value
    console.log(error);
  }
}

maindata();

//--> after fetching data sucessfully we have to append the things and display to main screen.

function display(value) {
  value.forEach((el) => {
    let maindiv = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.Poster;

    let title = document.createElement("h1");
    title.innerText = el.Title;

    let released = document.createElement("h3");
    released.innerText = el.Released;

    let ratings = document.createElement("h3");
    ratings.innerText = el.imdbRating;

    maindiv.append(image, title, released, ratings);

    contianer.append(maindiv);
  });
}
