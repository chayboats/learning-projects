function getUserChoice(userInput) {
  // Turn user input to lower case
  userInput = userInput.toLowerCase()
  
  if (userInput === 'bear' 
  || userInput === 'human' 
  || userInput === 'gun')
  {
    return userInput
  }

  return 'Please choose bear, human, or gun.';
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) ;
    
  if (randomNumber === 0) {
      return 'bear'
    } else if(randomNumber === 1) {
      return 'human'
    } 

  return 'gun'
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!'
  
  } else if (userChoice === 'bear' && computerChoice === 'human') {
    return 'You have mauled a human!'

  } else if (userChoice === 'bear' && computerChoice === 'gun') {
    return 'You were shot by a gun.'

  } else if (userChoice === 'human' && computerChoice === 'bear') {
    return 'You were mauled by a bear.'

  } else if (userChoice === 'human' && computerChoice === 'gun') {
    return 'You disarmed a gun!'

  } else if (userChoice === 'gun' && computerChoice === 'bear') {
    return 'You shot a bear!'

  } else if (userChoice === 'gun' && computerChoice === 'human') {
    return 'You were disarmed by a human.'
  }
  return 'Error'
}

function playGame() {
  const promptUserChoice = prompt('Please choose bear, human, or gun');
  // Prompt is a feature in a browser, so it will not just work for VS Code

  const userChoice = getUserChoice(promptUserChoice);
  console.log('user: ' + userChoice);
  const computerChoice = getComputerChoice();
  console.log('computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame()