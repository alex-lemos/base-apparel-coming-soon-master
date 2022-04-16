// # GLOBAL

let btnError = document.querySelector(".btn__error");
let msgError = document.querySelector(".forms__msg");
let inputEmail = document.querySelector(".forms__email");
let form = document.querySelector(".text-forms");

// # EVENT

inputEmail.addEventListener("invalid", invalidMsg);

// # FUNCTION

function invalidMsg(){

    // remove mensagens de erro padrão
   this.setCustomValidity("");

   // faz a validação novamente
   if (!this.validity.valid) {
       // se estiver inválido, coloca a mensagem
       this.setCustomValidity(" ");

        btnError.classList.remove("btn__error--hidden");
        msgError.classList.remove("forms__msg--hidden");

    }
    else{

        this.setCustomValidity(" ");

        btnError.classList.add("btn__error--hidden");
        msgError.classList.add("forms__msg--hidden");

        form.submit();

    }

}