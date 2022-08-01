

let arr=JSON.parse(localStorage.getItem("products")) || [];


    // step-- 2
    //---> create constructor function for making obj blueprint or also storing the user data in obj one by one
    //--> prevously we use obj but know we can use that and then push form into that function

    function Productsfun(type, desc, price, image) {
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }


    // step-- 1
    //---> this is for taking data from form --- firstly we take data into obj and then store them into array but know
    //---> we can use constructor function for making obj

    function productsdata(event){

        event.preventDefault();
        let form=document.getElementById("products");
        let type=form.type.value;
        let desc=form.desc.value;
        let price=form.price.value;
        let image=form.image.value;
    
        
        // step-- 3
        //---> here we send the data into constructor function for creating
        //--> objects for per data enter by users
        let arrdata= new Productsfun(type, desc, price, image)


        //--> pushing that into array because we wanna store multiple users data their thats why
        arr.push(arrdata);


        //step-- 4 
        //---> semding data to local storage 
        localStorage.setItem("products", JSON.stringify(arr))


    }

    
    
