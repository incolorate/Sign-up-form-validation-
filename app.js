const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const sbutton = document.querySelector(".sbutton");
const usernameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passwordError")
const emailError = document.querySelector(".emailError")
function usernameControl (event) {
    if (event.value.length === 0) {
        document.querySelector(".username").classList.add('failure');
        usernameError.innerText = "This field can't be empty"
    }  else if (event.value.length < 5) {
        document.querySelector(".username").classList.add('failure');
        usernameError.innerText = "Your username should have at least 5 characters"
    } else {
        document.querySelector(".username").classList.remove('failure');
        usernameError.innerText = ""
        document.querySelector(".username").classList.add('succes');
    }
}
    
function passwordControl(event) {
    if (event.value.length === 0) {
        document.querySelector(".password").classList.add('failure');
        passwordError.innerText = "This field can't be empty"
    }  else if (event.value.length < 5) {
        document.querySelector(".password").classList.add('failure');
        passwordError.innerText = "Your password should have at least 8 characters"
    } else {
        document.querySelector(".password").classList.remove('failure');
        passwordError.innerText = ""
        document.querySelector(".password").classList.add('succes');
    }
}

function emailControl(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.querySelector(".email").classList.add('succes'); 
        document.querySelector(".email").classList.remove('failure');
        emailError.innerText = "";
    } else if (email.value.length === 0) {
        document.querySelector(".email").classList.add('failure');
        emailError.innerText = "This field can't be empty";
    } else { 
        document.querySelector(".email").classList.add('failure');
        emailError.innerText = "Please imput a valid email adress"
      }
    }

function succces (){
    if (emailError.innerText === "" && passwordError.innerText === "" &&  usernameError.innerText === "" ) {
        alert("you did it")
    }
}

sbutton.addEventListener("click", function() {
   usernameControl(username)
   passwordControl(password)
   emailControl(email)
   succces ()
})

