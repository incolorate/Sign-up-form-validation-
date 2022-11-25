const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const sbutton = document.querySelector(".sbutton");
const usernameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passwordError")
function usernameControl (event) {
    if (event.value.length === 0) {
        document.querySelector(".username").classList.add('failure');
        usernameError.innerText = "This field can't be empty"
    }  else if (event.value.length < 5) {
        document.querySelector(".username").classList.add('failure');
        usernameError.innerText = "Your usser name should have at least 5 characters"
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
        document.querySelector(".username").classList.add('failure');
        usernameError.innerText = "Your usser name should have at least 5 characters"
    } else {
        document.querySelector(".username").classList.remove('failure');
        usernameError.innerText = ""
        document.querySelector(".username").classList.add('succes');
    }
}



sbutton.addEventListener("click", function() {
   usernameControl(username)
   passwordControl(password)
})

