
let playerChoiceFromButton;

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
        how?
    compare the playerChoice to computerChoice
        use the if statements in playRound()
    decide the winner
        use the if statements in playRound()
    output a message saying who won the round, and the reasoning
        maybe use textContent method?
    increment a counter based on who won, and display this counter
        could use same logic as original (computerScore++ or playerScore++)
        maybe change textContent to score?
This is one round of gameplay
Player will play rounds until either the Player or the Computer reaches a score of 5
    can use the scores previously used in game() to determine when the score has reached 5
When score reaches 5, output a message declaring who won the overall game
End the game
*/

/* current problems: determining playerChoice */
// need to determine playerChoice based on which button is pressed
// based on button type, could return the playerChoice!



// original function from prompt
function getPlayerChoice() {
    const playerChoiceInitial = prompt('Enter either rock, paper, or scissors.');
    const playerChoice = playerChoiceInitial.toLowerCase();
    return playerChoice;
}


// new approach: make each button call playRound, and make playerChoice different based on
// which button is pressed

// rock button: add event listener click, on click will run playRound but playerChoice
// will be determined on click rather than in playRound

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




function playRound(choice) {                                                                                                      
    const computerChoice = getComputerChoice();                                    
    const playerChoice = choice;

    if ((playerChoice === 'rock') && (computerChoice === 'rock')) {
        console.log('It\'s a draw! Both chose rock.');
        return 3;
    } else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
        console.log('You lose. Paper beats rock.');
        return 2;
    } else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
        console.log('You win! Rock beats scissors');
        return 1;
    
    } else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
        console.log('You win! Paper beats rock.');
        return 1;
    } else if ((playerChoice === 'paper') && (computerChoice === 'paper')) {
        console.log('It\'s a draw! Both chose paper.');
        return 3;
    } else if ((playerChoice === 'paper') && (computerChoice === 'scissors')) {
        console.log('You lose. Scissors beats paper.');
        return 2;
    
    } else if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
        console.log('You lose. Rock beats scissors.');
        return 2;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
        console.log('You win! Scissors beats paper.');
        return 1;
    } else if ((playerChoice === 'scissors') && (computerChoice === 'scissors')) {
        console.log('It\'s a draw! Both chose scissors.');
        return 3;
    }

}

