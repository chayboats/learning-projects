function getUserChoice(userInput) {
  userInput = userInput.toLowerCase()
  
  if (userInput === 'bear' 
  || userInput === 'human' 
  || userInput === 'gun') 
  {
    return userInput
  }

  return 'Please choose BEAR, HUMAN, or GUN.'
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() *  3)
  
  if (randomNumber === 0) {
    return 'bear'
  } else if (randomNumber === 1) {
    return 'human'
  }

  return 'gun'
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!"
  
  } else if ((userChoice === 'bear' && computerChoice === 'human')
  || (userChoice === 'human' && computerChoice === 'gun')
  || (userChoice === 'gun' && computerChoice === 'bear')
  ){
    return 'You win!'
  } else if ((computerChoice === 'bear' && userChoice === 'human')
  || (computerChoice === 'human' && userChoice === 'gun')
  || (computerChoice === 'gun' && userChoice === 'bear')
  ){
    return 'Computer wins!'
  }
  return 'Error'
}

function playGame() {
  const userPrompt = prompt('Please choose BEAR, HUMAN, or GUN.');
  const userChoice = getUserChoice(userPrompt);
  console.log('User: ' + userChoice);
  const computerChoice = getComputerChoice();
  console.log ('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()

//If I try to console.log playGame(), it will say undefined because nothing is being returned
