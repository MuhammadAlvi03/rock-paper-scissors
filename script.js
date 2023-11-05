let playerChoice;



function getComputerChoice() {                               // rng works, but computerchoice is always undefined
    let rngValue = (parseInt(Math.random() * 100) + 1);
    let computerChoice;
    if (rngValue > 67) {
        computerChoice = 1;
    } else  if ((rngValue > 34) && (rngValue <= 67)) {
        computerChoice = 2;
    } else {
        computerChoice = 3;
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
// compare this choice to the computer's randomly generated choice
// determine the winner
// return a message declaring the winner and reasoning (paper beats rock)
// repeat this for 5 rounds starting from the prompt