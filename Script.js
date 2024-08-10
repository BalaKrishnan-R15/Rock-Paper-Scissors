document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
  
    const choicesArray = ['rock', 'paper', 'scissors'];
  
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        displayResult(userChoice, computerChoice, result);
      });
    });
  
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choicesArray.length);
      return choicesArray[randomIndex];
    }
  
    function getResult(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }
  
    function displayResult(userChoice, computerChoice, result) {
      resultText.innerHTML = `You chose <strong>${userChoice}</strong>, computer chose <strong>${computerChoice}</strong>. ${result}`;
    }
  });