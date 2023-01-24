const PLAYER_WON = 1;
const COMPUTER_WON = -1;
const TIE = 0;

const PLAYER_WON_MESSAGE = 'Player Won Round!';
const COMPUTER_WON_MESSAGE = 'Computer Won Round!';
const TIE_MESSAGE = 'Round Tied!';

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

function game() {
    alert("Open Dev Tools to Play");
    let playerScore = 0;
    let computerScore = 0;
    let resultMessage = "NA";

    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt(`Round ${i}: Rock, Paper, Scissors?`);
        if(playerChoice === null) {
            console.log("You quit the game");
            return;
        }
        if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
            resultMessage = `${playerChoice} is not a valid choice`;
            i--;
        } else {
            let result;
            let computerChoice = getComputerChoice();
            result = playRound(playerChoice, computerChoice);
            
            if (result === PLAYER_WON) {
                playerScore++;
                resultMessage = `You Win! ${playerChoice} beats ${computerChoice}`;
            } else if (result === COMPUTER_WON) {
                computerScore++;
                resultMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
            } else if(result === TIE) {
                resultMessage = `It's a tie. Both chose ${computerChoice}`;
            }
        }

        console.log(resultMessage + `\nYou: ${playerScore}. Computer: ${computerScore}`)
    }

    if (playerScore === computerScore) {
        console.log(`Final Result: It's a tie. Both scored ${playerScore} points`)
    } else if (playerScore > computerScore) {
        console.log(`Final Result: You Win\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
    } else {
        console.log(`Final Result: You Lose\nYour score: ${playerScore}\nComputerScore: ${computerScore}`)
    }
}

function uiGame() {
   
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    const choiceButtons = document.querySelectorAll('button.choice');

    choiceButtons.forEach(btn => btn.addEventListener('click', e => {
        let playerChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        refreshText('#computerChoice span', computerChoice);
        refreshText('#playerChoice span', playerChoice);
        console.log({playerChoice});
        console.log({computerChoice});
        console.log({result});
        

        switch(result) {
            case PLAYER_WON: refreshText('#banner h2', PLAYER_WON_MESSAGE);
            playerScore++;
            break;

            case COMPUTER_WON: refreshText('#banner h2', COMPUTER_WON_MESSAGE)
            computerScore++;
            break;

            case TIE: 
            default: refreshText('#banner h2', TIE_MESSAGE)
            break;
        }

        round++;
        refreshText('div.round span', round);
        refreshText('.score-board .computer span', computerScore);
        refreshText('.score-board .player span', playerScore);
    }));
  
}


function refreshText(query, text) {
    document.querySelector(query).textContent = text;
}


function resultString(result) {
    switch(result) {
        case PLAYER_WON: return 'Player Won Round!';
        case COMPUTER_WON: return 'Computer Won Round!';
        case TIE: 
        default: return 'Round was draw!';
    }
}

uiGame()