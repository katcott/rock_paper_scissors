const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(button.value));
})

function getComputerChoice(){
    var array = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
}

function playRound(userInput){
    var win = 'win'
    const p = document.querySelector('p');
    const div = document.createElement('div');
    var computerChoice = getComputerChoice();
    if (userInput === computerChoice){
        div.textContent = `A Tie! You both selected ${userInput}`;
        //document.getElementById('label').innerText = `A Tie! You both selected ${userInput}`;
        win = 'tie'
    }
    else if(userInput.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'PAPER' || userInput.toUpperCase() === 'SCISSORS' && computerChoice.toUpperCase() === 'ROCK' || userInput.toUpperCase() === 'PAPER' && userInput.toUpperCase() === 'SCISSORS'){
        div.textContent = `You Lose! ${computerChoice.toLowerCase()} beats ${userInput.toLowerCase()}!`
        //document.getElementById('label').innerText = `You Lose! ${computerChoice.toLowerCase()} beats ${userInput.toLowerCase()}!`
        win = 'lose'
    }
    else if(computerChoice.toUpperCase() === 'ROCK' && userInput.toUpperCase() === 'PAPER' || computerChoice.toUpperCase() === 'SCISSORS' && userInput.toUpperCase() === 'ROCK' || computerChoice.toUpperCase() === 'PAPER' && userInput.toUpperCase() === 'SCISSORS'){
        div.textContent = `You Win! ${userInput.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
        //document.getElementById('label').innerText = `You Win! ${userInput.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
    }
    p.appendChild(div);
    return win;
}

var count = 0;
var userScore = 0;
var computerScore = 0;

function game(userInput){
    var win = playRound(userInput);
    if(userScore < 5 && computerScore < 5){
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
        count++
        if(userScore === 5 || computerScore === 5){
            var winner = (userScore > computerScore) ? 'You' : 'Computers';
            var message = `Game over! ${winner} win the game! Final Score: You - ` + userScore + ` Computer - ` + computerScore;
            document.querySelector('label').innerText = message;
        }
    }
    else{
        var winner = (userScore > computerScore) ? 'You' : 'Computers';
        var message = `Game over! ${winner} win the game! Final Score: You - ` + userScore + ` Computer - ` + computerScore;
        document.querySelector('label').innerText = message;
    }
    const div = document.querySelector('#score');
    div.innerText = `You: ${userScore} Computer: ${computerScore}`;
}