/* eslint-disable no-unused-vars */
const form = document.querySelector("form");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }
    if (event.key === "Enter") {
        validate();
    }
});

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+[a-zA-Z\-1-9]/;

const firstNameAlert = document.getElementById("firstNameAlert");
const lastNameAlert = document.getElementById("lastNameAlert");
const emailAlert = document.getElementById("emailAlert");
const messageAlert = document.getElementById("messageAlert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function validate() {
    let firstNameValidate;
    let lastNameValidate;
    let emailValidate;
    let messageValidate;

    if (firstName.value.match(nameRegex) && firstName.value.trim().length >= 2) {
        firstNameAlert.style.display = "none";
        firstName.style.border = "none";
        firstNameValidate = true;
    } else if (firstName.value === "") {
        firstNameAlert.textContent = "Merci de renseigner votre prénom";
        firstNameAlert.style.color = "red";
        firstNameAlert.style.fontSize = "15px";
        firstName.style.border = "2px solid red";
        firstNameAlert.style.display = "block";
        firstNameValidate = false;
    } else {
        firstNameAlert.textContent = "Merci d'entrer un prénom valide ayant au moins 2 caractères";
        firstNameAlert.style.color = "red";
        firstNameAlert.style.fontSize = "15px";
        firstName.style.border = "2px solid red";
        firstNameAlert.style.display = "block";
        firstNameValidate = false;
    }

    if (lastName.value.match(nameRegex) && lastName.value.trim().length >= 2) {
        lastNameAlert.style.display = "none";
        lastName.style.border = "none";
        lastNameValidate = true;
    } else if (lastName.value === "") {
        lastNameAlert.textContent = "Merci de renseigner votre nom";
        lastNameAlert.style.color = "red";
        lastNameAlert.style.fontSize = "15px";
        lastName.style.border = "2px solid red";
        lastNameAlert.style.display = "block";
        lastNameValidate = false;
    } else {
        lastNameAlert.textContent = "Merci d'entrer un nom valide ayant au moins 2 caractères";
        lastNameAlert.style.color = "red";
        lastNameAlert.style.fontSize = "15px";
        lastName.style.border = "2px solid red";
        lastNameAlert.style.display = "block";
        lastNameValidate = false;
    }

    if (email.value.match(emailRegex)) {
        emailAlert.style.display = "none";
        email.style.border = "none";
        emailValidate = true;
    } else if (email.value === "") {
        emailAlert.textContent = "Merci de renseigner votre email";
        emailAlert.style.color = "red";
        emailAlert.style.fontSize = "15px";
        email.style.border = "2px solid red";
        emailAlert.style.display = "block";
        emailValidate = false;
    } else {
        emailAlert.textContent = "Merci d'entrer un email valide";
        emailAlert.style.color = "red";
        emailAlert.style.fontSize = "15px";
        email.style.border = "2px solid red";
        emailAlert.style.display = "block";
        emailValidate = false;
    }

    if (message.value.trim().length >= 6) {
        messageAlert.style.display = "none";
        message.style.border = "none";
        messageValidate = true;
    } else if (message.value === "") {
        messageAlert.textContent = "Merci de renseigner votre message";
        messageAlert.style.color = "red";
        messageAlert.style.fontSize = "15px";
        message.style.border = "2px solid red";
        messageAlert.style.display = "block";
        messageValidate = false;
    }

    if (firstNameValidate && lastNameValidate && emailValidate && messageValidate) {
        console.log(firstName.value + " " + lastName.value + " " + email.value + " " + message.value);
        form.reset();
        closeModal();
    } else {
        return false;
    }

}