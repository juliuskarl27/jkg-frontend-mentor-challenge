const form = document.querySelector('.main-form');
const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit' , function (event){
    event.preventDefault();

    if(fName.value.trim() === '' ) {
        errorAppear(fName);
    } else {
        errorRemove(fName);
    } 

    if(lName.value.trim() === '' ) {
        errorAppear(lName);
    } else {
        errorRemove(lName);
    } 

    if(password.value.trim() === '') {
        errorAppear(password);
    }
    else {
        errorRemove(password);
    }

    const errorInput = email.parentElement.querySelector('small');
    if(email.value.trim() === '') {
        errorInput.textContent = 'Email cannot be empty';
        errorAppear(email);
    } else if (!validateEmail(email.value.trim())) {
        errorInput.textContent = 'Looks like this is not an email';
        errorAppear(email);
    } else {
        errorRemove(email);
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function errorAppear(field) {
    const errorInput = field.parentElement;
    errorInput.classList.add('error');
    errorInput.classList.remove('success');
}

function errorRemove(field) {
    const errorInput = field.parentElement;
    errorInput.classList.remove('error');
    errorInput.classList.add('success');
}