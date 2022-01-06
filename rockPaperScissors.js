//  Rock Paper Scissors

//Insure the correct input
const getUserChoice = userInput => {
    userInput =userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('Error')
    }
  };
  //Switch function for the computer to choose rock, paper or scissors
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  // If both are the same answer
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Game was a tie!';
    }
  //Different outcome possiblities
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer has won!';
      } else {
        return 'You Won!!!';
      }
    }
  
   if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer has won!';
      } else {
        return 'You Won!!!';
      }
    }
  
   if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer has won!';
      } else {
        return 'You Won!!!';
      }
    }
  
  };
  //The game itself
  const playGame = () => {
    // Choose here (rock, paper, scissors)
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();