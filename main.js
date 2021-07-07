let fn = document.getElementById('full-name');
let mail = document.getElementById('email');
let message = document.getElementById('message');
let button = document.getElementById('submit-button');

let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function formValidator(ev) {

    ev.preventDefault();

    let errors = [];
    let data = {};
    
    console.log(mail.value);


    //Full name 
    if (fn.value !== '') {
        data.fullName = fn.value;
    }
    else {
        errors.push('Full name is missing');
    }
    
    //email
    if (mail.value != '') {
        if (regEmail.test(mail.value)) {
            data.email = mail.value;
            console.log("valid");
        }
        else {
            errors.push('E-mail entered incorrectly');
            console.log("invalid");
        }
    }
    else {
        errors.push('E-mail is missing');
    }

    //Message
    if (message.value !== '') {
        data.mes = message.value;
    }
    else {
        errors.push('Message is missing');
    }

    //feedback 
    if (errors.length == 0) {
        console.clear();
        console.log('COLLECTED DATA');
        console.log(data);
        document.getElementById('theForm').reset();

    }
    else {
        console.clear();
        console.log('ERRORS');
        console.log(errors);
    }

}

button.addEventListener("click", formValidator);