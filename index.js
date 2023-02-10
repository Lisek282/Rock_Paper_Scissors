const display = document.querySelector('.display')
const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const player = document.getElementById('player')
const computer = document.getElementById('computer')
const rounds = document.getElementById('rounds')
const announcement = document.querySelector('.announcement')

let playerResult = 0
let computerResult = 0
let numOfPlays = 0


btnRock.addEventListener('click', () => playRound('rock'))
btnPaper.addEventListener('click', () => playRound('paper'))
btnScissors.addEventListener('click', () => playRound('scissors'))

function getComputerChoice(){
  const choiceArr = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random()*3) 

  return choiceArr[random]
}

// Play round 
function playRound(playerSelection){
  let roundResult = ''
  const computerSelection = getComputerChoice()

  display.innerHTML = `<p>${playerSelection}</p>
                       <p>${computerSelection}</p>
                       `

  // compare player choice with computer choice
  switch(playerSelection) {
    case 'rock':
      computerSelection === 'rock' ? roundResult = `tie` : computerSelection === 'paper' ? roundResult = `lose` : roundResult = `win`
      break
    case 'paper':
      computerSelection === 'paper' ? roundResult = `tie` : computerSelection === 'scissors' ? roundResult = `lose` : roundResult = `win`
      break
    case 'scissors':
       computerSelection === 'scissors' ? roundResult = `tie` : computerSelection === 'rock' ? roundResult = `lose` : roundResult = `win`
       break
  }

  game(roundResult)
}


function game(roundResult){

  if(numOfPlays <= 4){
    if(roundResult === 'tie'){
      announcement.innerText = `It's tie no one gets point`
      updatePointsRounds()
    } 
    else if (roundResult === 'win'){
      playerResult++
      announcement.innerText = `Player win's this round`
      updatePointsRounds()
    }
    else if (roundResult === 'lose'){
      computerResult++
      announcement.innerText = `Computer win's this round`
      updatePointsRounds()
    }
  }

}

function updatePointsRounds(){
  numOfPlays++
  player.innerText = `Player: ${playerResult}`
  computer.innerText = `Computer: ${computerResult}`
  rounds.innerHTML = `Rounds: ${numOfPlays}`

  if(numOfPlays === 5){
    gameEnds()
  }
}

function gameEnds(){
  announcement.innerText = `Game ends, ${playerResult === computerResult ? "It's tie" : playerResult > computerResult ? "Player wins" : "Computer wins"}`
  numOfPlays = 0
  playerResult = 0
  computerResult = 0
}



