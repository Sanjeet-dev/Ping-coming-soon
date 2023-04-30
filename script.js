const email = document.querySelector('#mail');
const btn = document.querySelector('.btn');
const form = document.querySelector('.notify');

form.addEventListener('submit',e =>{
//     checking submission working perfectly or not
     console.log('working'); 
    e.preventDefault();

    validate();

});
const validate = () =>{

    const emailVal = email.value;
//     Using regular expression to get pattern
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailVal===""){
        setErrorMsg(email, "Email address cannot be empty");
    }
    else if(emailVal.match(pattern)){
        setErrorMsg(email,"Thanks to subscribing to our newsletter");
    }
    else{
        setErrorMsg(email,"Please provide a valid email address");
    }

}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    // console.log(formControl);
    const msg = document.getElementById('error-msg');
    formControl.className = "form-control error";
    msg.textContent = errormsgs;
}
