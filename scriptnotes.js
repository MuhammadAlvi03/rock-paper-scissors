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

function playGame() {                                 
    let playerChoice = prompt('rockpaperscissors');
    let computerChoice = getComputerChoice();           // returns computerChoice as string successfully
}


function playGame() {                                 // WIP playGame function
    let playerChoice = prompt('rockpaperscissors');
    let computerChoice = getComputerChoice();
    console.log(computerChoice);                    // logs computer's choice
    if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('You win! Rock beats paper!');
    } else {
        console.log('other');
    }
}

function playGame() {                                                                 // working playGame function, logs result to console
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



// problem: writing each possible comparison would take a lot of conditionals
// why is this a problem: dont want to write all that, it would be ugly
// how can i solve this: start by figuring out how to compare better, learn Objects