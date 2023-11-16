let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener('submit', function(event){
    event.preventDefault();
    let userDetails = {
        email:email.value,
        password:password.value,
        
    };
    alert("signup complete")
    window.location.href="./login.html"
    localStorage.setItem("userDetails",JSON.stringify(userDetails))
})




