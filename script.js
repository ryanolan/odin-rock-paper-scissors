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
};

// console.log(getComputerChoice());

function getPlayerChoice() {
  let playerChoice = prompt("You must choose. Rock, paper, or scissors?");
  let lowerPlayerChoice = playerChoice.toLowerCase();
  return lowerPlayerChoice;
};

// console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "It is a tie! You both chose rock!";
    } else if (computerSelection == "paper") {
      return "The computer wins! Paper beats rock!";
    } else {
      return "You win the round! Rock beats scissors!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return "It is a tie! You both chose paper!";
    } else if (computerSelection =="rock") {
      return "You win the round! Paper beats rock!";
    } else {
      return "The computer wins! Scissors beat paper!";
    }
  } else {
    if (computerSelection == "scissors") {
      return "It is a tie! You both chose scissors!";
    } else if (computerSelection == "rock") {
      return "The computer wins! Rock beats scissors!";
    } else {
      return "You win the round! Scissors beat paper!";
    }
  }
};


const playerSelection = getPlayerChoice();
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

