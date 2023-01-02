function getUserChoice(userInput) {
  userInput = userInput.toLowerCase()
  
  if(userInput === 'bear' || userInput === 'human' || userInput === 'gun'){
    return userInput
  }
  
  return 'Please choose BEAR, HUMAN, or GUN.';
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) ;
    
  if(randomNumber === 0) {
      return 'bear'
    } else if(randomNumber === 1) {
      return 'human'
    } 
    return 'gun'
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice===computerChoice) {
    return 'It\'s a tie!'
  } else if(
    userChoice === 'bear' && computerChoice === 'human' 
    || 
    userChoice === 'human' && computerChoice === 'gun' 
    || 
    userChoice === 'gun' && computerChoice === 'bear'
    ){
    return 'You win!'
    } 
    return 'Computer wins!'
}

console.log(determineWinner(getUserChoice('bear'), getComputerChoice))