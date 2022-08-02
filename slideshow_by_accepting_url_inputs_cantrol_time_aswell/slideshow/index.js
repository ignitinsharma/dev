//--->> taking data form local storage where user had filled that one data
let dataarr=JSON.parse(localStorage.getItem("dataurl")) || []

//--> for increasing image value every time we have given
let count=0;

//--> here we will perfome that operation which happens while clicking one button start
function start(){
  

    //--> here we catch that main div because we wanna put slide their
    let maindiv= document.getElementById("maindiv")

    //-->  create image element where we wanna show data images
    let img=document.createElement('img')

    //--> we take this here because want first image aftre clicking on start instantly
    //--> so we pass count value and start 
    img.src=dataarr[count]

    //--> because inside we want count value increamented thats why we doing this
    count++
    /* we cant use loop here because looop excute very 
    fast and using loop we cant set time thats why
    we are not using loop here */

    
    //--> for making time functionality and we pass one call back function and how much nilli-second
    //--> opeations got perfomed   
    setInterval(function(){
        //--> inside that function we write that code we wanna change every perticular time


        //--> we did beacuse at the time we have limited images ex we have 3 after ending 
        //--> those three main arr not having any images it shows error so we reset count value as 0 and then count again start again.....
        if(count===dataarr.length){
            count=0;
        }
        //-->  image src= local storage data which one have chnages every 2 seconds 
        img.src=dataarr[count];

        //-->  we increasing count because we want another image form LS after 2 second
        count++;

        //--> then after doing all of this things we performe all of operation we append to main div
        maindiv.append(img)


    }, 2000)
}

//--> for pause things 
function pause(){


}