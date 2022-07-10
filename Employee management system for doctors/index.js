

// here we select form 
//then we put event lis on submit forms's submit button so then enter query come here
let getform=document.querySelector("form")
.addEventListener("click", myfunction);

let arrall=[];
let tbody=document.querySelector("tbody");

function myfunction(event){
    event.preventDefault(); 


    // i created this obj for capturing the values from form and stored in this object 
    let obj={
        ename: document.querySelector("#name").value,
        eID: document.querySelector("#employeeID").value,
        dep:document.querySelector("#department").value,
        exp:document.querySelector("#exp").value,
        email:document.querySelector("#email").value,
        mno:document.querySelector("#mbl").value,
    };  

    arr.push(obj);

    display(arrall);


    function display(arrall){
        
        //empty because we dont want previous data again and again
        document.querySelector("tbody").innerHTML="";

        arr.forEach(function (el) {
        //create a table row for storing the table column data
        let tr= document.createElement("tr");

        //creating table col inside 
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        let col6=document.createElement("td");
        let col7=document.createElement("td");
        let col8=document.createElement("td");

        //append column into main table row
        tr.append(col1,col2,col3,col4,col5,col6,col7,col8);

        //append main table row into table body
        tbody.append(tr);

        col1.innerText=el.ename;
        col2.innerText=el.eID;
        col3.innerText=el.dep;
        col4.innerText=el.exp;

         //this constion will check expirence and give output to 
         //column 7 section
        
        col5.innerText=el.email;
        col6.innerText=el.mno;
        col6.innerText=checkrole();
        col8.innerText="Delete";

        //create event listener when someone click on delete ....
        //for removing particular row by clicking on button
        col8.addEventListener("click", delfun);

            function delfun(event){
                event.target.parentNode.remove();
                
            }
        
            //change delete button color
        col8.style.color="red";

       
        });

        function checkrole(exp){
            if(el.exp>5){
                return "Senior"
            }
            else if(el.exp>1 && el.exp<5){
                return "Junior"
            }
            else{
                return "Trainee"
            }
        }

    }
}