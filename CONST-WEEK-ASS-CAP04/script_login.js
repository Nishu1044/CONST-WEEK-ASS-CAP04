let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener('submit', function(event){
    event.preventDefault();
    let userDetails = {
        email:email.value,
        password:password.value,
    };


    let saveData  = JSON.parse(localStorage.getItem("userDetails")) || {};
    if(userDetails.email === saveData.email && userDetails.password === saveData.password){
    localStorage.setItem("isAuth","true");
      alert("login success!")
      window.location.href="./product.html"
    }else{
        alert("wrong credentails")
    }

   
   
})
