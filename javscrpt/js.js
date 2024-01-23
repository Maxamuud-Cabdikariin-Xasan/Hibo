let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPass = document.getElementById('confirmPass');

let formElement = document.getElementById('form');

formElement.addEventListener('submit',formValid)



function formValid(e){
    let isvalid = true;
    if(username.value.trim() == ''){
        document.getElementById('nameError').innerHTML = 'please enter your name!';
        isvalid = false;
    }
    else{
        document.getElementById('nameError').innerHTML = '';

    }

    if(email.value.trim() == ''){
        document.getElementById('emailError').innerHTML = 'please enter your email!';
        isvalid = false;

    }

    else{
        document.getElementById('emailError').innerHTML = '';
    }


    if(password.value.trim() == ''){
        document.getElementById('passError').innerHTML = 'please enter your password!';
        isvalid = false;

    }
    else if(password.value.trim().length < 6){
        document.getElementById('passError').innerHTML = 'password must be atleast 6 digit!';
        isvalid = false;

    }
    else{
        document.getElementById('passError').innerHTML = '';
    }



    if(confirmPass.value != password.value){
        document.getElementById('confirmPassError').innerHTML = 'Password do not match!';
        isvalid = false;

    }
    else{
        document.getElementById('confirmPassError').innerHTML = 'Password do not match!';

    }

    if(!isvalid == true){
        e.preventDefault();
    }
    else{
        document.write("<h1><center>Form Submitted</center></h1>")
    }


}






function hideMenu() {
  let navLinks = document.getElementById("nav-break");
  navLinks.style.left = "-200px";
}

function showMenu() {
  let navLinks = document.getElementById("nav-break");
  navLinks.style.left = '0px'
}

