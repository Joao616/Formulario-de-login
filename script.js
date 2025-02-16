
const form = document.getElementById("from")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = documentElementById("passwordConfirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () =>{
  checkInputUsername();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})


function checkInputUsername(){
    const usernameValue = username.value;
   
    if(usernameValue === ""){
       errorInput(username, "Preencha um username!!")
    } else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputEmail(){
    const emailValue = email.value;
 
    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPassword === ""){
       errorInput(passwordConfirmation, "A confirmação de senha é obrigatório")   
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
    
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelector(".form-content")

    const isValid = [...formItem].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
       alert("CADASTRADO COM SUCESSO!")
    }
}



function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelect("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}