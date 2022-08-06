//--> `${}` by using this we can use keyword inside a string without cancatination

//api url--> https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let divone = document.getElementById("container");

// key --> apy key
let key = "5e4264872e29e642a21ad3acae2b4e10";

let data;

//--> user is calling that function when user enter on the button
//--> this function evoke when user enter on button
async function weatherfun() {
  try {
    //--> catching the value from user input box
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

    data = await res.json();

    //--> sending collected api data to main display funtion where we wanna display things
    //--> append data inside sucess block
    appenddata(data);
  } catch (error) {
    console.log(error);
  }
}

//--> this is default function where it shows default data - like bahadurgarh data
async function weathern() {
  try {
    //--> catching the value from user input box
    let city = document.getElementById("city").value;

    let res = await fetch(
      //--> for default data i have changed api q= bahadurgarh
      `https://api.openweathermap.org/data/2.5/weather?q=bahadurgarh&appid=${key}&units=metric`
    );

    data = await res.json();

    //--> appending this data to default function
    main2(data);

    //--> append data inside sucess block
  } catch (error) {
    console.log(error);
  }
}

//--> calling that function because this function automatically invokes 
weathern();

//--> default function
function main2(data) {
  divone.innerHTML = "";

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month2 = document.createElement("p");

  let today = new Date();
  month2.setAttribute("id", "month2");
  month2.innerText = `${
    month[today.getMonth()]
  }, ${today.getDate()}, ${today.toLocaleTimeString()}`;

  let city = document.createElement("h1");
  city.setAttribute("id", "city2");
  city.innerText = `${data.name}, ${data.sys.country}`;

  let feels_like = document.createElement("p");
  feels_like.setAttribute("id", "feelslike");
  feels_like.innerText = `Feels like ${data.main.feels_like}\xB0C. ${data.weather[0].main}. ${data.weather[0].description}`;

  let temp = document.createElement("h1");
  temp.setAttribute("id", "temp");
  temp.innerText = `${data.main.temp}\xB0C`;

  let humidity = document.createElement("p");
  humidity.setAttribute("id", "humidity");
  humidity.innerText = `Humidity: ${data.main.humidity}%`;

  let temp_min = document.createElement("span");
  temp_min.setAttribute("id", "temp_min");
  temp_min.innerText = `Temprature Min: ${data.main.temp_min}`;

  let temp_max = document.createElement("span");
  temp_max.setAttribute("id", "temp_max");
  temp_max.innerText = `Temprature Max: ${data.main.temp_max}`;

  let map = document.getElementById("gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById("main2").append(map);

  //--> if this order you append the value same order you get value
  divone.append(
    month2,
    city,
    temp,
    feels_like,

    humidity,
    temp_min,
    temp_max
  );
}


//--> main function for  finnding the weather  when user click on the button then this function evokes
function appenddata(data) {
  //--> because we want to do blank container every time when user enter new data
  divone.innerHTML = "";

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  let month2 = document.createElement("p");

  //-->this is for date and month this is default function in JS for finding 
  let today = new Date();

  //--> set attribute for setting up id/class to perticular div and and name ('id', 'id name')
  month2.setAttribute("id", "month2");
  //--> for accessing data we can use with today is stand for default function -- new Date();
  //--> today.getMonth() and today.getDate() for data
  month2.innerText = `${month[today.getMonth()]}, ${today.getDate()}, ${today.toLocaleTimeString()}`;

  let city = document.createElement("h1");
  city.setAttribute("id", "city2");
  city.innerText = `${data.name}, ${data.sys.country}`;

  let feels_like = document.createElement("p");
  feels_like.setAttribute("id", "feelslike");
  feels_like.innerText = `Feels like ${data.main.feels_like}\xB0C. ${data.weather[0].main}. ${data.weather[0].description}`;

  let temp = document.createElement("h1");
  temp.setAttribute("id", "temp");
  temp.innerText = `${data.main.temp}\xB0C`;

  let humidity = document.createElement("p");
  humidity.setAttribute("id", "humidity");
  humidity.innerText = `Humidity: ${data.main.humidity}%`;

  let temp_min = document.createElement("span");
  temp_min.setAttribute("id", "temp_min");
  temp_min.innerText = `Temprature Min: ${data.main.temp_min}`;

  let temp_max = document.createElement("span");
  temp_max.setAttribute("id", "temp_max");
  temp_max.innerText = `Temprature Max: ${data.main.temp_max}`;

  //--> map api and here we chaneged city name according to what we want so we add what data we get form obj that city name
  //--> means i input xy city then which section i get data form api so i put that location -- data.name
  let map = document.getElementById("gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById("main2").append(map);

  //--> if this order you append the value same order you get value
  divone.append(
    month2,
    city,
    temp,
    feels_like,

    humidity,
    temp_min,
    temp_max
  );
}
