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

let nameInput = document.getElementById("fullName")
let emailInput = document.getElementById("prefEmail")

function validateForm(e){
    e.preventDefault();
}