import '../css/01-gallery.css';
import '../css/common.css';
import throttle from 'lodash.throttle';


const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const msgInput = document.querySelector("textarea");


const STORAGE_KEY = "feedback-form-state";
const formData = {
    email: '',
    message: '',
}

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onFormSubmit)

populateTextAreas();

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.clear();
}



function populateTextAreas() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        emailInput.value = savedData.email;
        msgInput.value = savedData.message;
    }
}