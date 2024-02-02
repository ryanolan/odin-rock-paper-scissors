let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoices = ["rock", "paper", "scissors"];
  let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1;
  if (randomizeChoice === 1) {
    return "rock";
  } else if (randomizeChoice === 2) {
    return "paper";
  } else if (randomizeChoice === 3) {
    return "scissors";
  }
}

function getPlayerChoice() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("You must choose. Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    alert("Player score: " + playerScore + " " + "Computer score: " + computerScore);
  }
  winGame();
}

getPlayerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "It is a tie! You both chose rock!";
    } else if (computerSelection == "paper") {
      computerScore++;
      return "The computer wins! Paper beats rock!";
    } else {
      playerScore++;
      return "You win the round! Rock beats scissors!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return "It is a tie! You both chose paper!";
    } else if (computerSelection == "rock") {
      playerScore++;
      return "You win the round! Paper beats rock!";
    } else {
      computerScore++;
      return "The computer wins! Scissors beat paper!";
    }
  } else {
    if (computerSelection == "scissors") {
      return "It is a tie! You both chose scissors!";
    } else if (computerSelection == "rock") {
      computerScore++;
      return "The computer wins! Rock beats scissors!";
    } else {
      playerScore++;
      return "You win the round! Scissors beat paper!";
    }
  }
}

function winGame() {
  if (playerScore == 5) {
    alert("You win the game!");
  } else if (computerScore == 5) {
    alert("Computer wins the game!");
  }
}

// const playerSelection = getPlayerChoice();
// console.log(playerSelection);
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
// console.log("Player Score: " + playerScore);
// console.log("Computer Score: " + computerScore);



