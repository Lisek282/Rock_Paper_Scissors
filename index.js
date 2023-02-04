// Randomly generate computer choice
function getComputerChoice(){
  // Array of computer choice
  const choiceArr = ['rock', 'paper', 'scissors']
  // Random number (represent position in the array)
  let random = Math.floor(Math.random()*3) 
  // return random choice
  return choiceArr[random]
}

// Play round 
function palayRound(playerSelection = 'rock'){
  playerSelection = playerSelection.toLowerCase()
  const computerSelection = getComputerChoice()
  // compare player choice with computer choice
  switch(playerSelection) {
    case 'rock':
      return computerSelection === 'rock' ? `It's a tie ${playerSelection} do not beats ${computerSelection}` : computerSelection === 'paper' ? `You Lose! ${computerSelection} beats ${playerSelection}` : `You Win! ${playerSelection} beats ${computerSelection}`
    case 'paper':
      return computerSelection === 'paper' ? `It's a tie ${playerSelection} do not beats ${computerSelection}` : computerSelection === 'scissors' ? `You Lose! ${computerSelection} beats ${playerSelection}` : `You Win! ${playerSelection} beats ${computerSelection}`
    case 'scissors':
      return computerSelection === 'scissors' ? `It's a tie ${playerSelection} do not beats ${computerSelection}` : computerSelection === 'rock' ? `You Lose! ${computerSelection} beats ${playerSelection}` : `You Win! ${playerSelection} beats ${computerSelection}`
    default:
      return "Choice correct value: Rock, Paper or Scissors"
    
  }
}
// play the game 5 times
function game(){
  
}




