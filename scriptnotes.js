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
// 

function playGame() {                                 
    let playerChoice = prompt('rockpaperscissors');
    let computerChoice = getComputerChoice();           // returns computerChoice successfully
}
