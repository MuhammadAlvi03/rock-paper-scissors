

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

// game works, result is logged to console

function playGame() {                                 
    let playerChoiceInitial = prompt('rockpaperscissors');                            // prompts player to enter a choice, and stores choice in playerChoiceInitial
    let playerChoice = playerChoiceInitial.toLowerCase();                             // changes playerChoiceInitial string to lower case and stores choice in playerChoice
    let computerChoice = getComputerChoice();                                         // calls getComputerChoice function, stores function result in computerChoice
    if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
        return 'It\'s a draw! Both chose rock.' ;
    } else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
        console.log('You lose. Paper beats rock.');
    } else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('You win! Rock beats scissors');
    
    } else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
        console.log('You win! Paper beats rock.');
    } else if ((playerChoice == 'paper') && (computerChoice == 'paper')) {
        console.log('It\'s a draw! Both chose paper.');
    } else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log('You lose. Scissors beats paper.');
   
    } else if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log('You lose. Rock beats scissors.');
    } else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log('You win! Scissors beats paper.');
    } else if ((playerChoice == 'scissors') && (computerChoice == 'scissors')) {
        console.log('It\'s a draw! Both chose scissors.');
    }

    
}







// rock, paper, scissors 
// rock beats paper, loses to scissors
// scissors beats paper, loses to rock
// paper beats rock, loses to scissors

// start with making a function 'getComputerChoice' that will return rock, paper, or scissors

// then write a function that plays a single round of rock paper scissors; 
// the function should take two parameters 'playerSelection' and 'computerSelection' and make them
// return a string that declares the winner (for example "You lose! Paper beats rock.")
// make function's 'playerSelection' parameter case insensitive so typing in 'ROCK' is the same as 'rock'
// return the results of the function call so we can use this value


// could start with RNG to return computer choice
// then store the computer choice, and compare it to player choice

// user will open console, type in something to start the game
// user will then be prompted to select either rock, paper, or scissors
// store this choice
// compare this choice to the computer's randomly generated choice   HOW DO WE DO THIS???
// determine the winner
// return a message declaring the winner and reasoning (paper beats rock)
// repeat this for 5 rounds starting from the prompt