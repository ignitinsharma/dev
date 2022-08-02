
let arr=JSON.parse(localStorage.getItem("dataurl")) || []


// --> here we simply take data form user and send it to local storage 
function mainfunction(){

    let input=document.getElementById("input").value;

    arr.push(input);

    localStorage.setItem("dataurl", JSON.stringify(arr));

    

}