const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");


// NAME VALIDATION

nameInput.addEventListener("input", () => {

    if(nameInput.value.trim().length < 3){
        nameError.textContent =
        "Name must contain at least 3 characters";
    }else{
        nameError.textContent = "";
    }

});


// EMAIL VALIDATION

emailInput.addEventListener("input", () => {

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailInput.value)){
        emailError.textContent =
        "Please enter a valid email";
    }else{
        emailError.textContent = "";
    }

});


// PHONE VALIDATION

phoneInput.addEventListener("input", () => {

    const phonePattern =
    /^[0-9]{9,15}$/;

    if(!phonePattern.test(phoneInput.value)){
        phoneError.textContent =
        "Phone number must be 9-15 digits";
    }else{
        phoneError.textContent = "";
    }

});


// PASSWORD VALIDATION

passwordInput.addEventListener("input", () => {

    if(passwordInput.value.length < 8){

        passwordError.textContent =
        "Password must be at least 8 characters";

    }else{

        passwordError.textContent = "";

    }

});


// FORM SUBMIT

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(
        nameError.textContent === "" &&
        emailError.textContent === "" &&
        phoneError.textContent === "" &&
        passwordError.textContent === "" &&
        nameInput.value !== "" &&
        emailInput.value !== "" &&
        phoneInput.value !== "" &&
        passwordInput.value !== ""
    ){

        successMessage.style.display = "block";

        form.reset();

        setTimeout(() => {

            successMessage.style.display = "none";

        }, 3000);

    }

});