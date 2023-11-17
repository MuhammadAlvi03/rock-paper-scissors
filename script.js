
function getComputerChoice() {                               // returns choice as a string
    let rngValue = (parseInt(Math.random() * 100) + 1);
    if (rngValue > 67) {
        return 'rock'
    } else  if ((rngValue > 34) && (rngValue <= 67)) {
        return 'paper'
    } else {
        return 'scissors'
    }
}




// calls playRound function 5 times
// compares computerScore to playerScore to determine winner
// console logs winner and ending score

function game() { 
    let playerScore = 0;
    let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    if (roundResult === 1) {
        playerScore++;
        console.log(`The score is YOU:${playerScore} CPU:${computerScore}`);
    } else if (roundResult === 2) {
        computerScore++;
        console.log(`The score is YOU:${playerScore} CPU:${computerScore}`);
    } else if (roundResult === 3) {
        console.log(`The score is YOU:${playerScore} CPU:${computerScore}`);
    } else {
        console.log('couldnt get result');
    }
// }
    if (computerScore > playerScore) {
        console.log(`Computer wins! The final score is ${computerScore} - ${playerScore}`);
    } else if (computerScore < playerScore) {
        console.log(`You won! The final score is ${playerScore} - ${computerScore}`);
    } else {
        console.log(`Game ended in a draw! The final score is ${playerScore} - ${computerScore}`);
    }
}

/* 

gameplay
Start the game
    for now this does not need to be a specific step
Player will press a button, either r, p, or s
    This button will:
    determine playerChoice
    compare the playerChoice to computerChoice
        use the if statements in playRound()
    decide the winner
        use the if statements in playRound()
    output a message saying who won the round, and the reasoning
        maybe use innerText method?
    increment a counter based on who won, and display this counter
        could use same logic as original (computerScore++ or playerScore++)
        maybe innerText to score?
This is one round of gameplay
Player will play rounds until either the Player or the Computer reaches a score of 5
    can use the scores previously used in game() to determine when the score has reached 5
When score reaches 5, output a message declaring who won the overall game
End the game
*/

// currently working on: outputting message declaring round result and reasoning
// .reason innerText to result?

const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.cpuScore');

const reasonDisplay = document.querySelector('.reason');
reasonDisplay.innerText = 'Play the game';

let playerScore = 0
let computerScore = 0

playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;

function playRound(choice) {
    const computerChoice = getComputerChoice();                                    
    const playerChoice = choice;
    if ((playerChoice === 'rock') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('It\'s a draw! Both chose rock.');
    } else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('You lose. Paper beats rock.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    } else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('You win! Rock beats scissors');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;

    } else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('You win! Paper beats rock.');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
    } else if ((playerChoice === 'paper') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('It\'s a draw! Both chose paper.');
    } else if ((playerChoice === 'paper') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('You lose. Scissors beats paper.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    
    } else if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('You lose. Rock beats scissors.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('You win! Scissors beats paper.');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('It\'s a draw! Both chose scissors.');
    }
}



const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    playRound('rock');
})

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    playRound('paper');
})

const scissorsButton = document.querySelector('.scissors')
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
})

