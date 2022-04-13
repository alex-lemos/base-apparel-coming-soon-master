// # GLOBAL

let btnSend = document.querySelector(".forms__btn");
let btnError = document.querySelector(".btn__error");
let msgError = document.querySelector(".forms__msg");
let inputEmail = document.querySelector(".forms__email");

// # EVENT

btnSend.addEventListener("click", sendEmail);
inputEmail.addEventListener("invalid", invalidMsg);

// # FUNCTION

function sendEmail(){

    let status = btnError.classList.contains("btn__error--hidden");

    if (status == false){

        btnError.classList.toggle("btn__error--hidden");
        msgError.classList.toggle("forms__msg--hidden");

    }

    console.log("f")
}

function invalidMsg(){

    inputEmail.setCustomValidity(" ");

    let status = btnError.classList.contains("btn__error--hidden");

    if (status == true){

        btnError.classList.toggle("btn__error--hidden");
        msgError.classList.toggle("forms__msg--hidden");

    }
    

    // btnError.classList.toggle("btn__error--hidden");
    // msgError.classList.toggle("forms__msg--hidden");

}