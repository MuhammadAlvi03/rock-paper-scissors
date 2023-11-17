
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

// currently working on: ending the game when score reaches 5
// remove event listeners, loop through buttons

const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.cpuScore');
const winnerDisplay = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');
const reasonDisplay = document.querySelector('.reason');

reasonDisplay.innerText = 'First to 5 points wins!';

let playerScore = 0
let computerScore = 0

playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;

function playRound(choice) {
    const computerChoice = getComputerChoice();                                    
    const playerChoice = choice;
    if ((playerChoice === 'rock') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('Round ended in draw! Both chose rock.');
    } else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('You lost the round. Paper beats rock.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    } else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('You win the round! Rock beats scissors');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;

    } else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('You win the round! Paper beats rock.');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
    } else if ((playerChoice === 'paper') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('Round ended in draw! Both chose paper.');
    } else if ((playerChoice === 'paper') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('You lost the round. Scissors beats paper.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    
    } else if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
        reasonDisplay.innerText = ('You lost the round. Rock beats scissors.');
        computerScore++;
        computerScoreDisplay.innerText = `CPU Score: ${computerScore}`;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
        reasonDisplay.innerText = ('You win the round! Scissors beats paper.');
        playerScore++;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'scissors')) {
        reasonDisplay.innerText = ('Round ended in draw! Both chose scissors.');
    }
    if (playerScore == 5) {
        winnerDisplay.innerText = 'You won the game!'
    } else if (computerScore == 5) {
        winnerDisplay.innerText = 'CPU won the game.'
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
