const PLAYER_WON = 1;
const COMPUTER_WON = -1;
const TIE = 0;

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
            return TIE;
        }

    if (
        playerChoiceLowerCase === "rock" && computerChoiceLowerCase === "scissors" ||
        playerChoiceLowerCase === "paper" && computerChoiceLowerCase === "rock" ||
        playerChoiceLowerCase === "scissors" && computerChoiceLowerCase === "paper") {
        return PLAYER_WON;
    } else {
        return COMPUTER_WON;
    }
}

// function game() {
//     alert("Open Dev Tools to Play");
//     let playerScore = 0;
//     let computerScore = 0;
//     let resultMessage = "NA";

//     for (let i = 1; i <= 5; i++) {
//         playerChoice = prompt(`Round ${i}: Rock, Paper, Scissors?`);
//         if(playerChoice === null) {
//             console.log("You quit the game");
//             return;
//         }
//         if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
//             resultMessage = `${playerChoice} is not a valid choice`;
//             i--;
//         } else {
//             let result;
//             let computerChoice = getComputerChoice();
//             result = playRound(playerChoice, computerChoice);
            
//             if (result === PLAYER_WON) {
//                 playerScore++;
//                 resultMessage = `You Win! ${playerChoice} beats ${computerChoice}`;
//             } else if (result === COMPUTER_WON) {
//                 computerScore++;
//                 resultMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
//             } else if(result === TIE) {
//                 resultMessage = `It's a tie. Both chose ${computerChoice}`;
//             }
//         }

//         console.log(resultMessage + `\nYou: ${playerScore}. Computer: ${computerScore}`)
//     }

//     if (playerScore === computerScore) {
//         console.log(`Final Result: It's a tie. Both scored ${playerScore} points`)
//     } else if (playerScore > computerScore) {
//         console.log(`Final Result: You Win\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
//     } else {
//         console.log(`Final Result: You Lose\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
//     }
// }

// game()