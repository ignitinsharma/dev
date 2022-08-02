
//step-- 1
//--> getting value form local storage and use as that into programe
let maindata=JSON.parse(localStorage.getItem("products")) || [];


//step-- 2
//--> take display function and use as that 
function display(arr){

    arr.forEach(function(el,index){

        let maindiv=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let type=document.createElement("h2");
        type.innerText=el.type;

        let price=document.createElement("h3");
        price.innerText=el.price;

        let desc=document.createElement("p")
        desc.innerText=el.desc;

        let removebtn=document.createElement("button");
        removebtn.innerText="Remove";
        removebtn.setAttribute("id", "remove_button")

        removebtn.addEventListener('click', function(){
            deleteitem(index)
        })
        
        maindiv.append(img,type,price,desc)
        document.getElementById("all_products").append(maindiv)
    
    })
}

display(maindata);

function deleteitem(ind){
    maindata.splice(ind,1);
    display(maindata);
    localStorage.setItem('products', JSON.stringify(maindata))
}
