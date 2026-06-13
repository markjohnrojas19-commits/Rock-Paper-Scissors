const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const zeroToThree = Math.floor(Math.random() * 3);

  if (zeroToThree === 1) {
    return rock;
  } else if (zeroToThree === 2) {
    return paper;
  } else {
    return scissors;
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose among these choices: Rock, Paper and Scissors",
  );

  if (
    humanChoice === "Rock" ||
    humanChoice === "rock" ||
    humanChoice === "ROCK"
  ) {
    return rock;
  } else if (
    humanChoice === "Paper" ||
    humanChoice === "paper" ||
    humanChoice === "PAPER"
  ) {
    return paper;
  } else {
    return scissors;
  }
}
