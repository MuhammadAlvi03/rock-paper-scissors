// plays 5 rounds

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

    // break

}
