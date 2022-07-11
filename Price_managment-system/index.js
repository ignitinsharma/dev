// deploy link->https://price-managment-nitin.netlify.app/



document.querySelector("form").addEventListener("submit", myfun);


let arr=[];
function myfun(){
    event.preventDefault();
     let obj={
        pname:document.querySelector("#name").value,
        category:document.querySelector("#category").value,
        brand:document.querySelector("#brand").value,
        prange:document.querySelector("#price").value,
        delivery:document.querySelector("#deliveredBy").value,
     };

     arr.push(obj);

    mainfun(arr);

    function mainfun(arr){
        document.querySelector("tbody").innerHTML="";

        arr.forEach(function(el){
            
            let row= document.createElement("tr");
            let col1=document.createElement("td");
            let col2=document.createElement("td");
            let col3=document.createElement("td");
            let col4=document.createElement("td");
            let col5=document.createElement("td");
            let col6=document.createElement("td");
            let col7=document.createElement("td");
            // let col9=document.createElement("td");
            
            document.querySelector("tbody").append(row)
            row.append(col2,col1,col3,col4,col5,col6,col7);
            

            col1.innerText=el.category;
            col2.innerText=el.pname;
            col3.innerText=el.brand;
            col4.innerText=el.prange;
            col5.innerText=el.delivery;
            
            if(el.prange>1000){
                return col6.innerText="Expensive";
            }
            else if(el.prange<1000){
                return col6.innerText="Not-Expensive";
            }
            
            col7.innerText="delete"
            col7.addEventListener("click", function out(){
                event.target.parentNode.remove()
            });

            

            if(col3.innerText=="" || col2.innerText=="" || col1.innerText=="" || col4.innerText=="" || col5.innerText==""){
                alert("Fill all input fields");
                document.querySelector("tbody").innerHTML="";
            }


            

            
            
        })
       
        
        
    }

    let sum=0;
    for(let i=0; i<=arr.length; i++){
        sum+= Number(arr[i].prange);

    }
    document.querySelector("#total-price").innerHTML="Total Price:-" + " "+ sum;


}




