

// here we select form 
//then we put event lis on submit forms's submit button so then enter query come here
let getform=document.querySelector("form")
.addEventListener("click", myfunction);

let arr=[];
let tbody=document.querySelector("tbody");

function myfunction(event){
    event.preventDefault(); 


    // i created this obj for capturing the values from form and stored in this object 
    let obj={
        ename: document.querySelector("#name").value,
        eID: document.querySelector("#employeeID").value,
        dep:document.querySelector("#exp").value,
        exp:document.querySelector("#exp").value,
        email:document.querySelector("#email").value,
        mno:document.querySelector("#mbl").value,
    };  

    arr.push(obj);

    display(arr);


    function display(obj){

        document.querySelector("tbody").innerHTML="";

        arr.forEach(function (el) {
        let tr= document.createElement("tr");

        let col1=document.createElement("td");
        col1.innerText=el.ename;
        // tr.append(col1);

        let col2=document.createElement("td");
        col2.innerText=el.eID;
        // tr.append(col2);

        let col3=document.createElement("td");
        col3.innerText=el.dep;
        // tr.append(col3);

        let col4=document.createElement("td");
        col4.innerText=el.exp;
        if(el.exp>5){
            col7.innerText="Senior"
        }
        else if(el.exp>1 && el.exp<5){
            col7.innerText="Junior"
        }
        else{
            col7.innerText="Trainee"
        }
        // tr.append(col4);

        let col5=document.createElement("td");
        col5.innerText=el.email;
        // tr.append(col5);

        let col8=document.createElement("td");
        col8.innerText=el.mno;

        let col7=document.createElement("td");
        let expvalue= checkrole(obj.exp);
        col7.innerText=expvalue;

        let col6=document.createElement("td");
        col6.innerText="Delete";
        col6.addEventListener("click", delfun);
            function delfun(event){
                event.target.parentNode.remove();
            }

        tr.append(col1,col2,col3,col4,col5,col6,col7,col8);

        tbody.append(tr);
        })

    }


    //this fucntion will check exp and then give it to op
    function checkrole(experience){

        if(experience > 5){
            return "Senior"
        }
        
        else if(experience > 2 &&experience< 5){
            return "Junior"
        }
        else if(experience <=1){
            return "Fresher"
        }
        
    }

}