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





function randomNumberGenerator() {                       // returns a random integer value between 0 - 100
    let rngValue = (parseInt(Math.random() * 100) + 1);
    return rngValue;
}


function tempGetComputerChoice() {                          // fixed computer choice, was a scope issue
    let tempRngValue = (parseInt(Math.random() * 100) + 1);
        if (tempRngValue > 50) {
            console.log('Rock');
        } else {
            console.log('Other');
        }
}


function getComputerChoice() {                               // console logs the randomly generated computer choice
    let rngValue = (parseInt(Math.random() * 100) + 1);
    if (rngValue > 67) {
        console.log('rock');
    } else  if ((rngValue > 34) && (rngValue <= 67)) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}



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


// prompt user to make a choice, then make computer make a choice, and then compare users choice to computer choice
// to compare, could use switch

function playRound() {                                 
    let playerChoice = prompt('rockpaperscissors');
    let computerChoice = getComputerChoice();           // returns computerChoice as string successfully
}


function playRound() {                                 // WIP playRound function
    let playerChoice = prompt('rockpaperscissors');
    let computerChoice = getComputerChoice();
    console.log(computerChoice);                    // logs computer's choice
    if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('You win! Rock beats paper!');
    } else {
        console.log('other');
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

function playRound() {                                                                // same as above function, but returns value instead of console logging
    let playerChoiceInitial = prompt('rockpaperscissors');                            // prompts player to enter a choice, and stores choice in playerChoiceInitial
    let playerChoice = playerChoiceInitial.toLowerCase();                             // changes playerChoiceInitial string to lower case and stores choice in playerChoice
    let computerChoice = getComputerChoice();                                         // calls getComputerChoice function, stores function result in computerChoice
    if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
        return 'It\'s a draw! Both chose rock.';
    } else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
        return 'You lose. Paper beats rock.';
    } else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        return 'You win! Rock beats scissors';
    
    } else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
        return 'You win! Paper beats rock.';
    } else if ((playerChoice == 'paper') && (computerChoice == 'paper')) {
        return 'It\'s a draw! Both chose paper.';
    } else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
        return 'You lose. Scissors beats paper.';
   
    } else if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
        return 'You lose. Rock beats scissors.';
    } else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
        return 'You win! Scissors beats paper.';
    } else if ((playerChoice == 'scissors') && (computerChoice == 'scissors')) {
        return 'It\'s a draw! Both chose scissors.';
    } else {
        return 'Please enter either "rock", "paper", or "scissors".';
    }
}


// wip function that logs result and returns a value


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


// game function framework

function game() { 
    let playerScore = 0;
    let computerScore = 0;
   
    let roundResult = playRound();
    if (roundResult == 1) {
        console.log('score add player');
    } else if (roundResult == 2) {
        console.log('score add computer');
    } else if (roundResult == 3) {
        console.log('draw');
    } else {
        console.log('couldnt get result');
    }

    playRound();
    // add if statements here
}


// original function from prompt
function getPlayerChoice() {
    const playerChoiceInitial = prompt('Enter either rock, paper, or scissors.');
    const playerChoice = playerChoiceInitial.toLowerCase();
    return playerChoice;
}
