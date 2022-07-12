document.querySelector("form").addEventListener("submit",myfun)
let arr=[];
function myfun (){
    event.preventDefault()
    let obj={
        //define objects names or our input which are in form

        proname:document.querySelector("#name").value,
         procat:document.querySelector("#category").value,
         probra:document.querySelector("#brand").value,
         propri:document.querySelector("#price").value,
         prodel:document.querySelector("#deliveredBy").value
    }

    arr.push(obj)
    display(arr)

    function display(arr){
        // empty tbody because it is starting of our loop
        document.querySelector("tbody").innerHTML="";

        arr.forEach(function (el) {

            //creation of rows and columns that will be add on tbody area

        let row=document.createElement("tr");
        let c1=document.createElement("td");
        let c2=document.createElement("td");
        let c3=document.createElement("td");
        let c4=document.createElement("td");
        let c5=document.createElement("td");
        let c6=document.createElement("td");
        let c7=document.createElement("td");
        
        document.querySelector("tbody").append(row);
        row.append(c1,c2,c3,c4,c5,c6,c7);



            // assigning values to our columns

        c1.innerText=el.proname;
        c2.innerText=el.procat;
        c3.innerText=el.probra;
        c4.innerText=el.propri;
        c5.innerText=el.prodel;
        
        //  condition for our price segment section

        if(el.propri>1000){
            c6.innerText="Expensive"
        }
        else{
            c6.innerText="Not-Expensive"
        }

        // creation of delete button and its functionality

        c7.innerText="Delete"
        c7.addEventListener("click",function del(){
            event.target.parentNode.remove()
        })  
 
        // functionality of alert 

        if(c1.innerText=="" || c2.innerText==""||c3.innerText==""||c4.innerText==""||c5.innerText==""){
            alert("Fill All Input Fields")
            document.querySelector("tbody").innerHTML="";
        }
 
    });
       
 }

    // functionality of total price function

    let sum=0;
    for(let x=0;x<arr.length;x++){
    sum+=Number(arr[x].propri);
    }
    document.querySelector("#total-price").innerHTML="Total-price:-"+" "+sum;
 }