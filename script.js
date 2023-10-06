function getComputerChoice(){
    var array = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
}

function userSelection(){
    var userInput = document.getElementById('ddlRPS').value;
    var computerChoice = getComputerChoice();
    console.log(userInput);
    console.log(computerChoice);
    var win = playRPS(userInput, computerChoice);
    return win;
}

function playRPS(userInput, computerChoice){
    var win = 'win'
    if (userInput === computerChoice){
        document.getElementById('label').innerText = `A Tie! You both selected ${userInput}`;
        win = 'tie'
    }
    else if(userInput.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'PAPER' || userInput.toUpperCase() === 'SCISSORS' && computerChoice.toUpperCase() === 'ROCK' || userInput.toUpperCase() === 'PAPER' && userInput.toUpperCase() === 'SCISSORS'){
        document.getElementById('label').innerText = `You Lose! ${computerChoice.toLowerCase()} beats ${userInput.toLowerCase()}!`
        win = 'lose'
    }
    else if(computerChoice.toUpperCase() === 'ROCK' && userInput.toUpperCase() === 'PAPER' || computerChoice.toUpperCase() === 'SCISSORS' && userInput.toUpperCase() === 'ROCK' || computerChoice.toUpperCase() === 'PAPER' && userInput.toUpperCase() === 'SCISSORS'){
        document.getElementById('label').innerText = `You Win! ${userInput.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
    }
    return win;
}

var count = 0;
var userScore = 0;
var computerScore = 0;

function game(){
    if(count < 4){
        var win = userSelection();
        switch (win){
            case 'win':
                userScore++;
                break;
            case 'tie':
                break;
            case 'lose':
                computerScore++;
                break;
        }
        count++;
    }
    else{
        var winner = (userScore > computerScore) ? 'You' : 'Computers';
        var message = `Game over! ${winner} win the game! Final Score: You - ` + userScore + ` Computer - ` + computerScore;
        document.getElementById('label').innerText = message;
    }
}