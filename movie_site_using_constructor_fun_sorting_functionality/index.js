//--> take data from ls
let maindata = JSON.parse(localStorage.getItem("arrobj"));

let container = document.getElementById("container");

function display(maindata) {
  maindata.forEach(function (el) {
    let maindiv = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("id", "image");
    image.src = el.image;

    let name = document.createElement("h2");
    name.innerText = el.name;

    let date = document.createElement("h4");
    date.innerText = el.date;

    let rating = document.createElement("h4");
    rating.innerText = el.rating;

    maindiv.append(image, name, date, rating);

    container.append(maindiv);
  });
}

//--> calling display function for showing values to the user
display(maindata);

//--> function show high to low
function high() {
  //--> we are doing container empty because we dont want prevoius data again and again
  container.innerHTML = "";

  //--> i apply function on rating
  maindata.sort(function (a, b) {
    return b.rating - a.rating;
  });

  //--> after performing all the things i have again passing updated
  //--> data to main display function
  display(maindata);
}

function low() {
  container.innerHTML = "";
  maindata.sort(function (a, b) {
    return a.rating - b.rating;
  });

  display(maindata);
}
