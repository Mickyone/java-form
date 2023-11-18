// get the elements
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Events
form.addEventListener('submit', e=>{
    e.preventDefault();

    form_verify();
})

/* ---------------------------------------------------------------------------- */
/* -------------------------Set the verify functions--------------------------- */
/* ---------------------------------------------------------------------------- */

// functions
function setError(elem, message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
  
    // Add the error message
    small.innerText = message;
  
    // Add the error class and animate the transition
    formControl.className = "form-control error";
    small.style.transform = 'translateY(10px)'; /* Translate downward */
  }

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    // Regex for valid email format
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    return regex.test(email);
}
function password_verify(password) {
    // Regex for strong password requirements
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    return regex.test(password);
}

/* ---------------------------------------------------------------------------- */
/* -----------------------Checking formulaire function------------------------- */
/* ---------------------------------------------------------------------------- */
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

/* ---------------------------------------------------------------------------- */
/* -----------------------checking all the information------------------------- */
/* ---------------------------------------------------------------------------- */

    // Username verify
    if (userValue === "") {
        let message ="Username is empty!";
        setError(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Username must start by an uppercase";
        setError(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username must contains at least 3 characters";
            setError(username,message)
        } else {
            setSuccess(username);
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "Email is empty!";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email is not valid";
        setError(email,message);
    }else{
        setSuccess(email)
    }
    
    // password verify
    if (pwdValue ==="") {
        let message ="Passsword is empty";
        setError(password,message)
    }else if(!password_verify(pwdValue)){
        let message = "Password must contains 8 to 12 characters, an uppercase and a special characters";
        setError(password,message)
    }else{
        setSuccess(password);
    }
    
    // pwd confirm
    if (pwd2Value ==="") {
        let message ="Password confirm is empty!";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Password don't match";
        setError(password2,message)
    }else{
        setSuccess(password2)
    }
}