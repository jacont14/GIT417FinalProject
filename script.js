"use strict";

let display = document.querySelectorAll("[data-display]");
let displayContents = document.querySelectorAll("[data-content]");

display.forEach(function(displayTab) {
    
    function imageDisplay() {
        
        let content = document.querySelector(displayTab.dataset.display);

        displayContents.forEach(function(tabContent) {
            tabContent.classList.remove("switch");
        });

        display.forEach(function(displayTab) {
            displayTab.classList.remove("switch");
        })

        displayTab.classList.add("switch");
        content.classList.add("switch");
    }
    displayTab.addEventListener("click", imageDisplay);
})



let getRandomNumber = Math.floor(Math.random() * 10) + 1;

let guess = document.getElementById("guess");
let messageResult = document.getElementById("message");
let input = document.getElementById("guess1");

let guessCount = 1;

function randomGuess(){
    let userGuess = Number(input.value);

    if(guessCount === 1){
        guess.innerHTML = " Your Previous Guesses ";
    }
    guess.innerHTML = `${guess.innerHTML} ${userGuess}`;

    if(userGuess === getRandomNumber){
        messageResult.innerHTML = "Congrats You Won!"
       
    }else{
        messageResult.innerHTML = "Sorry. You Lose!";
    }
    
    guessCount++;
    input.value = "";
    input.focus();
}
document.getElementById("submitGuess").addEventListener("click", randomGuess);




function ChangeMode() {
   let mode = document.body;
   mode.classList.toggle("darkMode");
}
document.getElementById("button").addEventListener("click", ChangeMode);




let errMessages = {
    success: "The form was submitted successfully",
    failure: "There was an issue when trying to submit the form, please correct your errors and try again",
    termsMsg: "You must agree to the terms and conditions before joining",
    fNameMsg: "Please enter your full name",
    emailMsg: "Please enter a valid email address",
    phoneMsg: "Please enter a valid phone number",
    phoneRadioMsg: "You have Selected Phone Number as Your Preferred Contact Method",
    emailRadioMsg: "You have Selected Email as Your Preferred Contact Method",
  };

  let newUser = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userRadio: "",
    getUser() {
      return "<strong>User Name:</strong> " + this.userName + "<br><strong>Email:</strong> " + this.userEmail + "<br><strong>Phone Number:</strong> " + this.userPhone + "<br><strong>Radio:</strong> " + this.userRadio;
    }
  };

  function validateForm(e){
    
    e.preventDefault();

  let uName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let phoneNum = document.getElementById("phone");
  let fieldset = document.querySelector("fieldset");
  let commentInput = document.getElementById("comments");
  let confirm = document.getElementById("confirm");
  let prefPhone = document.getElementById("prefPhone");
  let PrefEmail = document.getElementById("prefEmail");
  let pref = document.getElementById("pref");


  let nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
  let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  uName.classList.remove("error");
  email.classList.remove("error");
  phoneNum.classList.remove("error");
  confirm.classList.add("hidden");
  pref.classList.add("hidden");


  uName.nextSibling.classList.add("hidden");
  email.nextSibling.classList.add("hidden");
  phoneNum.nextSibling.classList.add("hidden");
  pref.innerHTML = "";
  confirm.innerHTML = "";

  let isValid = true;
  let contact = "";

  if(uName.value === "" || !(nameRegex.test(uName.value))){
   
    isValid = false; 
    
    uName.classList.add("error");
   
    uName.nextElementSibling.classList.remove("hidden");
    
    console.error(errMessages["fNameMsg"]);
  }else{
    
    newUser.userName = uName.value;
  }

  if(email.value === "" || !(emailRegex.test(email.value))){
   
    isValid = false;
   
    email.classList.add("error");
   
    email.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["emailMsg"]);
  }else{
    
    newUser.userEmail = email.value;
  }

  if(phoneNum.value === "" || !(phoneRegex.test(phoneNum.value))){
   
    isValid = false;
   
    phoneNum.classList.add("error");
   
    phoneNum.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["phoneMsg"]);
  }else{
    
    newUser.userPhone = phoneNum.value;
  }

  if (commentInput.value === "" ) {
    isValid = false;
    commentInput.classList.add("error");

    }
    else{
        commentInput.classList.remove("error");
     }


     if(PrefEmail.checked){
       
        pref.classList.remove("hidden");
        pref.innerHTML =  errMessages["emailRadioMsg"];
       
        newUser.userRadio = "Email";
      }else if(prefPhone.checked){
        
        pref.classList.remove("hidden");
        pref.innerHTML = errMessages["phoneRadioMsg"];
        
        newUser.userRadio = "Phone";
      }



  if(isValid){
    displaySubmission(); 

    uName.value = "";
    email.value = "";
    phoneNum.value = "";
    PrefEmail.checked = true;
    prefPhone.checked = false;

    uName.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    phoneNum.nextElementSibling.classList.add("hidden");
    pref.nextElementSibling.classList.add("hidden");


    window.alert(errMessages["success"]);
  }
  }

  function displaySubmission(){
    let confirm = document.getElementById("confirm");

    confirm.classList.remove("hidden");

    confirm.innerHTML = "";

    confirm.innerHTML = "<strong class=\"large\">Your Information:</strong><br>" + newUser.getUser(); 

  }
  document.getElementById("forms").addEventListener("submit", validateForm);


  
  