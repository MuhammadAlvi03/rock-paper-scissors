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
        console.log('Rock');
    } else  if ((rngValue > 34) && (rngValue <= 67)) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
}