

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

function getPlayerChoice() {
    const playerChoiceInitial = prompt('Enter either rock, paper, or scissors.');
    const playerChoice = playerChoiceInitial.toLowerCase();
    return playerChoice;
}

// working playRound function, logs result to console and returns result as integer
// calls getPlayerChoice function, stores result in playerChoice
// calls getComputerChoice function, stores result in computerChoice
// compares playerChoice and computerChoice to determine integer value which equates to win, loss, or draw

function playRound() {                                                              
    const playerChoice = getPlayerChoice();                                         
    const computerChoice = getComputerChoice();                                    
    
    if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
        console.log('It\'s a draw! Both chose rock.');
        return 3;
    } else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
        console.log('You lose. Paper beats rock.');
        return 2;
    } else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('You win! Rock beats scissors');
        return 1;
    
    } else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
        console.log('You win! Paper beats rock.');
        return 1;
    } else if ((playerChoice == 'paper') && (computerChoice == 'paper')) {
        console.log('It\'s a draw! Both chose paper.');
        return 3;
    } else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log('You lose. Scissors beats paper.');
        return 2;
    
    } else if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log('You lose. Rock beats scissors.');
        return 2;
    } else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log('You win! Scissors beats paper.');
        return 1;
    } else if ((playerChoice == 'scissors') && (computerChoice == 'scissors')) {
        console.log('It\'s a draw! Both chose scissors.');
        return 3;
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
    if (roundResult == 1) {
        playerScore++;
        console.log(`The score is YOU:${playerScore} CPU:${computerScore}`);
    } else if (roundResult == 2) {
        computerScore++;
        console.log(`The score is YOU:${playerScore} CPU:${computerScore}`);
    } else if (roundResult == 3) {
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
