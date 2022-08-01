let maindata=JSON.parse(localStorage("products")) || [];


function display(maindata){

    maindata.foreach(function(el){

        let img=document.createElement("img");
        img.innerText=el.image;

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
    
        document.getElementById("all_products").append(img,type,price,desc)
    
    })
}


function deleteitem(ind){
    maindata.splice(ind,1);
    display(maindata);
    localStorage.setItem('products', JSON.stringify(maindata))
}
