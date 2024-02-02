function getComputerChoice() {
    let compChoices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1;
    if (randomizeChoice === 1) {
        return "rock";
    } if (randomizeChoice === 2) {
        return "paper";
    } if (randomizeChoice === 3) {
        return "scissors";
    }
    console.log(randomizeChoice);
}

console.log(getComputerChoice());
