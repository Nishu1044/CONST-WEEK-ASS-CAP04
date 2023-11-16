
const container = document.querySelector(".container");
let LSData = localStorage.getItem("cart");

    if (LSData === null) {
        LSData = [];
    } else {
        LSData = JSON.parse(LSData);
    }

     Display(LSData)
    function Display(Data) {
        container.innerHTML = "";
        for (let i = 0; i < Data.length; i++) {
            const product = document.createElement("div");
            //---------------------------------------------------//
            const name = document.createElement("h3");
            name.innerText = Data[i].name
    
            const brand = document.createElement("h2");
            brand.innerText = Data[i].Brand
    
            const image = document.createElement("img");
            image.setAttribute("src", Data[i].selection3)
    
            const carName = document.createElement("h2");
            carName.innerText = Data[i].selection4
    
            const price = document.createElement("p");
            price.innerText = Data[i].selection5
    
    


            const BookNow = document.createElement("button");
            BookNow.innerText = "BookNow";
            BookNow.style.backgroundColor = "green";
           BookNow.style.textDecorationColor = "black";

            BookNow.addEventListener("click",function (){
               alert("Congratulation Booking Done")
               window.location.href="./first.html"
            })
    
            // =============///
            const deleteFromCart = document.createElement("button");
            deleteFromCart.innerText = "Delete";
            deleteFromCart.style.backgroundColor = "red";
            deleteFromCart.style.textDecorationColor = "black";

            deleteFromCart.addEventListener("click", function () {
                LSData = LSData.filter(function (element, index) {
                    // i = 1
                    if (i === index) {
                        return false;
                    } else {
                        return true;
                    }
                })
                localStorage.setItem("cart", JSON.stringify(LSData));
                Display(LSData);
            })
    
            container.append(product);
            product.append(name, brand, image, carName, price,deleteFromCart,BookNow)
    
        }
    }





