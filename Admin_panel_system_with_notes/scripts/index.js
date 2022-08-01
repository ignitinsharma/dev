let arr=JSON.parse(localStorage.getItem("products")) || [];


    //---> constructor function for making obj blueprint 
    //--> prevously we use obj but know we can use that and then push form into that function

    function Productsfun(type, desc, price, image) {
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }



    //---> this is for taking data from form --- firstly we take data into obj and then store them into array but know
    //---> we can use constructor function for making obj

    function productsdata(){

        event.preventDefault();
        let form=document.getElementById("products");
        let type=form.type.value;
        let desc=form.desc.value;
        let price=form.price.value;
        let image=form.image.value;


        //---> here we send the data into constructor
        let data= new Productsfun(form, type, desc, price, image)

    }
    

//       arr.push(products);

//       JSON.stringify(localStorage("products", arr));

