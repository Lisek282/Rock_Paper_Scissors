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
function playRound(playerSelection = 'rock'){
  playerSelection = playerSelection.toLowerCase()
  const computerSelection = getComputerChoice()
  // compare player choice with computer choice
  switch(playerSelection) {
    case 'rock':
      return computerSelection === 'rock' ? `tie` : computerSelection === 'paper' ? `lose` : `win`
    case 'paper':
      return computerSelection === 'paper' ? `tie` : computerSelection === 'scissors' ? `lose` : `win`
    case 'scissors':
      return computerSelection === 'scissors' ? `tie` : computerSelection === 'rock' ? `lose` : `win`
    default:
      return "Choice correct value: Rock, Paper or Scissors"
    
  }
}
// play the game 5 times
function game(){

}




