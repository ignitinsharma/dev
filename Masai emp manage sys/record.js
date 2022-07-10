
// depkoy link-> https://emp-management-masai-nitin.netlify.app/

// here we select form 
//then we put event lis on submit forms's submit button so then enter query come here
let form=document.querySelector("form");
form.addEventListener("submit",myfun);
let arr=[];
function myfun(){
    event.preventDefault();
    // i created this obj for capturing the values from form and stored in this object 
    let obj={
        name:document.querySelector("#name").value,
        id:document.querySelector("#employeeID").value,
        dept:document.querySelector("#department").value,
        expe:document.querySelector("#exp").value,
        email:document.querySelector("#email").value,
        mobile:document.querySelector("#mbl").value,
    }

    arr.push(obj);


    display(arr)


    function display(arr){
    //empty because we dont want previous data again and again
     document.querySelector("tbody").innerHTML="";
     arr.forEach(function (el) {
        //create a table row for storing the table column data
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        let col6=document.createElement("td");
        let col7=document.createElement("td");
        let col8=document.createElement("td");
       
         //append column into main table row
        row.append(col1,col2,col3,col4,col5,col6,col7,col8);

        //append main table row into table body
        document.querySelector("tbody").append(row);
        col1.innerText=el.name;
        col2.innerText=el.id;
        col3.innerText=el.dept;
        col4.innerText=el.expe;

        //this constion will check expirence and give output to 
         //column 7 section
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
        
        //create event listener when someone click on delete ....
        //for removing particular row by clicking on button
        col8.innerText="Delete"

        //change delete button color
        col8.style.color="red";
        col8.addEventListener("click",function (){
            event.target.parentNode.remove()
        })
     });
    }
}