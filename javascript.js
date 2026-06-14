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

function rockBeatsScissors(compick, hupick) {
  if (compick === "Rock" && hupick === "Scissors") {
    let message = "You lost! Rock beats Scissors";
    console.log(message);
    alert(message);
    computerScore++;
    return message;
  } else if (compick === "Scissors" && hupick === "Rock") {
    let message = "You win! Rock beats Scissors";
    console.log(message);
    alert(message);
    humanScore++;
    return message;
  }
}

function paperBeatsRock(compick, hupick) {
  if (compick === "Paper" && hupick === "Rock") {
    let message = "You lost! Paper beats Rock";
    console.log(message);
    computerScore++;
    alert(message);
    return message;
  } else if (compick === "Rock" && hupick === "Paper") {
    let message = "You win! Paper beats Rock";
    console.log(message);
    alert(message);
    humanScore++;
    return message;
  }
}

function scissorsBeatsPaper(compick, hupick) {
  if (compick === "Scissors" && hupick === "Paper") {
    let message = "You lost! Scissors beats Paper";
    console.log(message);
    computerScore++;
    alert(message);
    return message;
  } else if (compick === "Paper" && hupick === "Scissors") {
    let message = "You win! Scissors beats Paper";
    console.log(message);
    humanScore++;
    alert(message);
    return message;
  }
}

function tiedPicked(compick, hupick) {
  if (compick === hupick) {
    let message = "Tied! You both picked same.";
    console.log(message);
    alert(message);
    computerScore++;
    humanScore++;
    return message;
  }
}

function determineTheWinner() {
  let winnermessage = "";
  let texthumanscore = String(humanScore);
  let textcomputerscore = String(computerScore);

  if (humanScore < computerScore) {
    winnermessage =
      "You lost! Computer win with scores of " + textcomputerscore;
    console.log(winnermessage);
    alert(winnermessage);

    return winnermessage;
  } else if (humanScore > computerScore) {
    winnermessage = "You win! Your scores is " + texthumanscore;
    console.log(winnermessage);
    alert(winnermessage);

    return winnermessage;
  } else {
    winnermessage = "The overall game is a tie!";
    console.log(winnermessage);
    alert(winnermessage);
    return winnermessage;
  }
}

function playRound(computerChoice, humanChoice) {
  rockBeatsScissors(computerChoice, humanChoice);
  paperBeatsRock(computerChoice, humanChoice);
  scissorsBeatsPaper(computerChoice, humanChoice);
  tiedPicked(computerChoice, humanChoice);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
  }

  determineTheWinner();
}

playGame();
