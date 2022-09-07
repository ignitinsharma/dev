let container = document.getElementById("mobile_list");

let arr = JSON.parse(localStorage.getItem("mobile_data")) || [];

console.log(arr);

function display(data) {
  container.innerHTML = null;
  data.forEach(function (el, index) {
    let maind = document.createElement("div");
    maind.setAttribute("class", "mobile");
    //maind.innerHTML=null

    let brand = document.createElement("h2");
    brand.innerText = el.brand;

    let name = document.createElement("h1");
    name.innerText = el.name;

    let image = document.createElement("img");
    image.src = el.image;

    let price = document.createElement("p");
    price.innerText = el.price;

    let del = document.createElement("button");
    del.innerText = "Remove Product";
    del.setAttribute("class", "class");
    del.addEventListener("click", function () {
      deletefun(index);
    });

    maind.append(image, brand, name, price, del);

    container.append(maind);
  });
}

display(arr);

function deletefun(index) {
  arr.splice(index, 1);
  display(arr);
  localStorage.setItem("mobile_data", JSON.stringify(arr));
}

function lowtohigh() {
  arr.sort(function (a, b) {
    return a.price - b.price;
  });
  display(arr);
}

function hightolow() {
  arr.sort(function (a, b) {
    return b.price - a.price;
  });
  display(arr);
}


//
function select() {
  let select = document.getElementById("select_filter").value;

  let arr1 = arr.filter((el) => {
    return el.brand == select;
  });
  console.log(arr);
  display(arr1);
}
