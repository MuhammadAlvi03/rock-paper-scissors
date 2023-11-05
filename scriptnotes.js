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
    let computerChoice = getComputerChoice();           // returns computerChoice successfully
}


// problem: writing each possible comparison would take 27 conditionals
// why is this a problem: dont want to write all that, it would be ugly
// how can i solve this: start by figuring out how to compare better, look at short circuits to start