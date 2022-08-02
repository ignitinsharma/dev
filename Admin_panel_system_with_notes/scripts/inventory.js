
//step-- 1
//--> getting value form local storage and use as that into programe
let maindata=JSON.parse(localStorage.getItem("products")) || [];


//step-- 2
//--> take display function and use as that for display data after performing that all operataion we call it with passing all data;
function display(arr){

    //-->when user enter data new data old cant replace and both will be stored together
    document.getElementById("all_products").innerHTML=""

    //step-- 3
    //--> we apply forEach to that main array because we wanna perfomre opeation on that data we take form index.js page
    //--> then we create div or things according to which we wanna show data to  users;
    arr.forEach(function(el,ind){

       
        let maindiv=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let type=document.createElement("h2");
        type.innerText=el.type;

        let price=document.createElement("h3");
        price.innerText=el.price;

        let desc=document.createElement("p")
        desc.innerText=el.desc;

        //--> create button for deleting things    
        let removebtn=document.createElement("button");
        removebtn.innerText="Remove";

        //--> setting id to button  first we take id then next id name ec remove_button
        removebtn.setAttribute("id", "remove_button")

         //--> then put event lisner on button when someone click what happend then
        removebtn.addEventListener('click', function(){

            //--> we pass index here because deletion function delete those vale when use click
            deleteitem(ind)
        })
        
         //--> here we are appending all the things we created and build into the
          //--> main div and then main container 
        maindiv.append(img,type,price,desc,removebtn)
        document.getElementById("all_products").append(maindiv)
    
    })
}

//--> calling main fucntion for showing things 
display(maindata);


//--> delete function here we will pass index and then put splice on maindata and 
//--> splice(index(you wanna delete), 1 ( value how much delete starting from that index))
function deleteitem(ind){
    maindata.splice(ind,1);

    //--> then send updated data to local stoage 
    localStorage.setItem('products', JSON.stringify(maindata))
    
    //--> then call the function again for latest updated value to to the user
    display(maindata);
}
