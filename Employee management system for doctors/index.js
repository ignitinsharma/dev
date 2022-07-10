let form=document.querySelector("form");
form.addEventListener("submit",masaiemp);
let arr=[];
function masaiemp(){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        id:document.querySelector("#employeeID").value,
        dept:document.querySelector("#department").value,
        expe:document.querySelector("#exp").value,
        email:document.querySelector("#email").value,
        mobile:document.querySelector("#mbl").value,
    }

    arr.push(obj);


    display(arr);


    function display(arr){
     document.querySelector("tbody").innerHTML="";

     arr.forEach(function (el) {
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        let col6=document.createElement("td");
        let col7=document.createElement("td");
        let col8=document.createElement("td");
       
        row.append(col1,col2,col3,col4,col5,col6,col7,col8);
        document.querySelector("tbody").append(row);


        col1.innerText=el.name;
        col2.innerText=el.id;
        col3.innerText=el.dept;
        col4.innerText=el.expe;
        if(el.expe>5){
            col7.innerText="Senior"
        }
        else if(el.expe>1 && el.expe<5){
            col7.innerText="Junior"
        }
        else{
            col7.innerText="Trainee"
        }


        col5.innerText=el.email;
        col6.innerText=el.mobile;
        col8.innerText="Delete"

        col8.style.color="red";
        col8.addEventListener("click",function (){
            event.target.parentNode.remove()
        })
        
         });
    }
}