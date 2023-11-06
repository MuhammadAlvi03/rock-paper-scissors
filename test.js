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

function playRound() {                                                                 // working playRound function, logs result to console
    let playerChoiceInitial = prompt('rockpaperscissors');                            // prompts player to enter a choice, and stores choice in playerChoiceInitial
    let playerChoice = playerChoiceInitial.toLowerCase();                             // changes playerChoiceInitial string to lower case and stores choice in playerChoice
    let computerChoice = getComputerChoice();                                         // calls getComputerChoice function, stores function result in computerChoice
    if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
        console.log('It\'s a draw! Both chose rock.');
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
    }

    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
   
    playRound();
    if (playRound() == 1) {
        (playerScore++);
    } else if (playRound() == 2) {
        (computerScore++);
    }

    playRound();
    if (playRound() == 1) {
        (playerScore++);
    } else if (playRound() == 2) {
        (computerScore++);
    }
   
}