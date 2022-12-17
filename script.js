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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt(`Round ${i}: Rock, Paper, Scissor?`);
        if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
            result = `${playerChoice} is not a valid choice`;
            i--;
        } else {
            let computerChoice = getComputerChoice();

            result = playRound(playerChoice, computerChoice);
            if (result.startsWith("You Win")) {
                playerScore++;
            } else if (result.startsWith("You Lose")) {
                computerScore++;
            }
        }

        console.log(result + `\nYou: ${playerScore}. Computer: ${computerScore}`)
    }

    if (playerScore === computerScore) {
        console.log(`Final Result: It's a tie. Both scored ${playerScore} points`)
    } else if (playerScore > computerScore) {
        console.log(`Final Result: You Win\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
    } else {
        console.log(`Final Result: You Lose\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
    }
}

game()