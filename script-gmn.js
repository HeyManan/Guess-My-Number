"use strict";

const displayMessage = function (curMessage) {
  document.querySelector(".message") = curMessage;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "NO NUMBER !!";
    displayMessage("NO NUMBER !!");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct !!";
    displayMessage("Correct !!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if(score > 1) {
      if(guess > secretNumber) {
        displayMessage("Too High !!");
      } else {
        displayMessage("Too Low !!");
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost !!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  // document.querySelector(".message").textContent = "Start gussing...";
  displayMessage("Start gussing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
