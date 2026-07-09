const IMAGES = {
  rock: "./images/rock.png",
  paper: "./images/paper.png",
  scissors: "./images/scissor.png",
};

let humanScoreDisplay = document.querySelector("#humanScores");
let computerScoreDisplay = document.querySelector("#computerScores");
let computerChoose = document.querySelector(".computerChooseShower");
let player1Choose = document.querySelector(".player1ChooseShower");
let announcer = document.querySelector("#announcer");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const zeroToThree = Math.floor(Math.random() * 3);

  if (zeroToThree === 1) {
    computerChoose.classList.remove("is-scissors");
    return (computerChoose.src = IMAGES.rock);
  } else if (zeroToThree === 2) {
    computerChoose.classList.remove("is-scissors");
    return (computerChoose.src = IMAGES.paper);
  } else {
    computerChoose.classList.add("is-scissors");
    return (computerChoose.src = IMAGES.scissors);
  }
}

function handleChoiceSelection() {
  let menu = document.querySelector("#pickingSection");
  // Grab both white border boxes cleanly
  let borders = document.querySelectorAll(".border");

  menu.addEventListener("click", (event) => {
    let target = event.target;

    if (humanScore === 5 || computerScore === 5) {
      announcer.className = "";
      humanScore = 0;
      computerScore = 0;
      humanScoreDisplay.textContent = "0";
      computerScoreDisplay.textContent = "0";
      announcer.textContent = "New game started! Make your choice.";
    }

    if (
      target.id !== "rock" &&
      target.id !== "paper" &&
      target.id !== "scissor"
    ) {
      return;
    }

    // A. START THE SHAKING ANIMATION (Triggers instantly on click)
    announcer.className = "";
    announcer.textContent = "Rock... Paper... Scissors...";

    player1Choose.classList.remove("is-scissors");
    computerChoose.classList.remove("is-scissors");

    player1Choose.src = IMAGES.rock;
    computerChoose.src = IMAGES.rock;

    // Add the shaking animation class to BOTH border boxes
    borders.forEach((box) => box.classList.add("is-shaking"));

    // B. STOP THE SHAKING AND SHOW CHOICES (Runs after 0.5 seconds)
    setTimeout(() => {
      // Turn off the bouncing animation on both boxes cleanly
      borders.forEach((box) => box.classList.remove("is-shaking"));

      // Runs your exact original unchanged switch logic
      switch (target.id) {
        case "rock":
          player1Choose.classList.remove("is-scissors");
          player1Choose.src = IMAGES.rock;
          getComputerChoice();
          checkWinner();
          playGround();
          console.log("Rock was clicked");
          break;
        case "paper":
          player1Choose.classList.remove("is-scissors");
          player1Choose.src = IMAGES.paper;
          getComputerChoice();
          checkWinner();
          playGround();
          console.log("Paper was clicked");
          break;
        case "scissor":
          player1Choose.classList.add("is-scissors");
          player1Choose.src = IMAGES.scissors;
          getComputerChoice();
          checkWinner();
          playGround();
          console.log("Scissor was clicked");
          break;
      }
    }, 500); // Shakes actively for half a second
  });
}

function checkWinner() {
  // FIXED: Check for the clean file strings so the dot-slash (./) doesn't break the system
  if (
    (player1Choose.src.includes("rock.png") &&
      computerChoose.src.includes("rock.png")) ||
    (player1Choose.src.includes("paper.png") &&
      computerChoose.src.includes("paper.png")) ||
    (player1Choose.src.includes("scissor.png") &&
      computerChoose.src.includes("scissor.png"))
  ) {
    announcer.textContent = "It's a tie!";
    console.log("It's a tie!");
    return;
  }

  if (
    (player1Choose.src.includes("rock.png") &&
      computerChoose.src.includes("scissor.png")) ||
    (player1Choose.src.includes("paper.png") &&
      computerChoose.src.includes("rock.png")) ||
    (player1Choose.src.includes("scissor.png") &&
      computerChoose.src.includes("paper.png"))
  ) {
    humanScore++;
    humanScoreDisplay.textContent = humanScore;
    announcer.textContent = "Player 1 Wins!";
    console.log("Player 1 Wins!");
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    announcer.textContent = "Computer Wins!";
    console.log("Computer Wins!");
  }
}

function playGround() {
  if (humanScore === 5) {
    announcer.className = "player-win"; /* Keeps winner green color stable */
    announcer.textContent =
      "You won the game! You reached five rounds first. Click any button to play again!";
  } else if (computerScore === 5) {
    announcer.className = "computer-win"; /* Keeps loser red color stable */
    announcer.textContent =
      "Computer won the game! Computer reached five rounds first. Click any button to play again!";
  }
}

handleChoiceSelection();
