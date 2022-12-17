function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Rock';
    }
}

function playRound(playerChoice, computerChoice) {
    let playerChoiceLowerCase = playerChoice.toLowerCase();
    if (playerChoiceLowerCase !== "rock" && playerChoiceLowerCase !== "paper" && playerChoiceLowerCase !== "scissors") {
        return `${playerChoice} is not a valid choice`;
    }

    let computerChoiceLowerCase = computerChoice.toLowerCase();
    if (playerChoiceLowerCase)
        if (playerChoiceLowerCase === computerChoiceLowerCase) {
            return `It's a tie. Both chose ${computerChoice}`;
        }

    if (
        playerChoiceLowerCase === "rock" && computerChoiceLowerCase === "scissors" ||
        playerChoiceLowerCase === "paper" && computerChoiceLowerCase === "rock" ||
        playerChoiceLowerCase === "scissors" && computerChoiceLowerCase === "paper") {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}