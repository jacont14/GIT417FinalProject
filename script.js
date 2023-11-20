"use strict";

let display = document.querySelectorAll("[data-display]");
let displayContents = document.querySelectorAll("[data-content]");

display.forEach(displayTab => {
    displayTab.addEventListener("click", () => {
        let content = document.querySelector(displayTab.dataset.display);
        displayContents.forEach(tabContent => {
            tabContent.classList.remove("switch");
        });
        display.forEach(displayTab => {
            displayTab.classList.remove("switch");
        })
        displayTab.classList.add("switch");
        content.classList.add("switch");
    });
})

