// key --> 

//--> `${}` by using this we can use keyword inside a string without cancatination

//api url--> https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let divone=document.getElementById('container')

let key="5e4264872e29e642a21ad3acae2b4e10";

let data;   
//--> user is calling that function when user enter on the button
async function weatherfun(){

    try {
        
         //--> catching the value from user input box
        let city= document.getElementById('city').value;

        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    
        data=await res.json();
        console.log(data)

        appenddata(data);

        //--> append data inside sucess block
    } catch (error) {
        
        console.log(error)
    }
   
   
}



function appenddata(data){

    //--> because we want to do blank container every time when user enter new data 
    divone.innerHTML="";


    let city=document.createElement('p');
    city.innerText= `City name ${data.name} ${data.sys.country}`

    let temp=document.createElement('p');
    temp.innerText= `Temprature ${data.main.temp}`

    let humidity=document.createElement('p');
    humidity.innerText= `Humidity ${data.main.humidity}%`

    let temp_min=document.createElement('p');
    temp_min.innerText= `Temprature Min ${data.main.temp_min}`

    let temp_max=document.createElement('p');
    temp_max.innerText= `Temprature Max ${data.main.temp_max}`



    divone.append(city,temp, humidity, temp_min, temp_max)



}

