"use-strict";

const adviceBtn = document.querySelector(".advice__btn");
const adviceText = document.querySelector(".advice__text");
const adviceNumber = document.getElementById("advice-number");

renderAdvice();

adviceBtn.addEventListener("click", renderAdvice);

function renderAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const adviceObj = data.slip;
            adviceNumber.innerText = adviceObj.id;
            adviceText.innerText = adviceObj.advice;
        });
}
