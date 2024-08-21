
document.getElementById('check').addEventListener('submit',function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const emailErrorMessage = validateEmail(email);
    if (emailErrorMessage) {
        
        
        const emailErrorMessageElement = document.querySelector('.test');
        // show email error message to user
        emailErrorMessageElement.innerText = emailErrorMessage;
        document.getElementById('email').classList.add('error-new');
        return;
    }
    const emailErrorMessageElement = document.querySelector('.test');
    
    emailErrorMessageElement.innerText = "";
    document.getElementById('email').classList.remove('error-new');
    document.querySelector(".card").classList.add('shown');
    document.querySelector(".thanks").classList.remove('shown');
});

document.querySelector(".thanks button").addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector(".card").classList.remove('shown');
    document.querySelector(".thanks").classList.add('shown');
});

function validateEmail(email) {
    
    if (!email) {
        
        return 'valid email address';
    } 
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'valid email address';
    }
  
    return '';
  }