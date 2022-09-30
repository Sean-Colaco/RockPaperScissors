const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'You Win!'
const RESULT_COMPUTER_WINS = 'You Lose!'
const playerImg = document.getElementById('playerImg')
const computerImg = document.getElementById('computerImg')
const timer = document.getElementById('timer')

let gameIsRunning = false;


function playerImgHandler(playersChoice){
    let rockImg = playerImg.getAttribute('Rock-src')
    let paperImg = playerImg.getAttribute('Paper-src')
    let scissorsImg = playerImg.getAttribute('Scissors-src')

    playerImg.classList.add('playerImgAnimation')

    let timerNumber = 4
    timer.classList.remove('disappear')
    const timerInterval = setInterval(function(){
        timerNumber = timerNumber - 1;
        timer.innerHTML = timerNumber;
        if(timerNumber == 1){
            clearInterval(timerInterval)
        }
    },1000)

    setTimeout(function(){
        timer.innerHTML= 'SHOOT!'
    

    if(playersChoice.toUpperCase() == ROCK){
        playerImg.src = rockImg
    }

    if(playersChoice.toUpperCase() == PAPER){
        playerImg.src = paperImg
    }

    if(playersChoice.toUpperCase() == SCISSORS){
        playerImg.src = scissorsImg
    }
},4000)
}

function computerImgHandler(computersChoice){
    let rockImg = computerImg.getAttribute('Rock-src')
    let paperImg = computerImg.getAttribute('Paper-src')
    let scissorsImg = computerImg.getAttribute('Scissors-src')

    computerImg.classList.add('computerImgAnimation')

    setTimeout(function(){

    

    if(computersChoice.toUpperCase() == ROCK){
        computerImg.src = rockImg
    }

    if(computersChoice.toUpperCase() == PAPER){
        computerImg.src = paperImg
    }

    if(computersChoice.toUpperCase() == SCISSORS){
        computerImg.src = scissorsImg
    }

},4000)
}




const getPlayerChoice = () => {
    const  selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`);
    if(selection == null){
        return
    }
    else if(
        selection.toUpperCase() != ROCK && 
        selection.toUpperCase() != PAPER && 
        selection.toUpperCase() != SCISSORS){
        alert(`Invalid choice, we chose ${ROCK} for you!`);
        return;
    }
    return selection.toUpperCase();
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) =>{
    playerImgHandler(pChoice)
    computerImgHandler(cChoice)

    if (cChoice == pChoice){
        return RESULT_DRAW 
    }

    else if (cChoice == ROCK  && pChoice == PAPER ||
                cChoice == PAPER && pChoice == SCISSORS||
                cChoice == SCISSORS && pChoice == ROCK){
                    return RESULT_PLAYER_WINS    
    }

    else{
        return RESULT_COMPUTER_WINS
    }

}

startGameBtn.addEventListener('click',() => {
if(gameIsRunning){
    return;
}
    gameIsRunning = true;
    console.log('Game is starting...'); 
    const PlayerChoice = getPlayerChoice();
    const ComputerChoice = getComputerChoice();

let winner
    
    if (PlayerChoice) {
        winner = getWinner (ComputerChoice, PlayerChoice);
        
    } else {
        winner = getWinner(ComputerChoice, ROCK)
    }
    let message = `You picked ${PlayerChoice || DEFAULT_USER_CHOICE},
    computer picked ${ComputerChoice}, therefore you `;
    if (winner=== RESULT_DRAW) {
          message = message + 'had a draw!'
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won'
    } else{
        message = message + 'lost'
    }
    setTimeout(function(){
        alert(message);
   gameIsRunning = false;
   timer.innerHTML=''
   let rockImg = playerImg.getAttribute('Rock-src')
   let computerRockImg = computerImg.getAttribute('Rock-src')
   playerImg.src = rockImg
   computerImg.src = computerRockImg

   playerImg.classList.remove('playerImgAnimation')
   computerImg.classList.remove('computerImgAnimation')
    
    }
   ,5000)
});



const showResult = ( messageText, result)  => {
    alert(messageText + ' ' + result);
}
