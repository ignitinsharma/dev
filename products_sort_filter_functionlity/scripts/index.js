/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

let form = document.getElementById("form");

let arr = JSON.parse(localStorage.getItem("mobile_data")) || [];

function submit() {
  let obj = {
    brand: document.getElementById("mobile_brand").value,
    name: document.getElementById("mobile_name").value,
    price: document.getElementById("mobile_price").value,
    image: document.getElementById("mobile_image").value,
  };

  arr.push(obj);
  console.log;
  console.log(arr);

  localStorage.setItem("mobile_data", JSON.stringify(arr));

  //for making input box empty
  document.getElementById("mobile_brand").value = null;
  document.getElementById("mobile_name").value = null;
  document.getElementById("mobile_price").value = null;
  document.getElementById("mobile_image").value = null;
}
