// Constants for choices
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Function to get computer's choice
function getComputerChoice() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to get human's choice
function getHumanChoice() {
    let choice = '';
    while (true) {
        choice = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
        if ([ROCK, PAPER, SCISSORS].includes(choice)) {
            break;
        }
        console.log('Invalid selection, try again.');
    }
    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`Player chose ${humanChoice}.\nComputer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return 0; // Tie
    }

    const winConditions = {
        [ROCK]: SCISSORS,   // Rock beats Scissors
        [PAPER]: ROCK,      // Paper beats Rock
        [SCISSORS]: PAPER,  // Scissors beats Paper
    };

    return winConditions[humanChoice] === computerChoice ? 2 : 1; // 2 for human win, 1 for computer win
}

// Main game loop
let humanScore = 0, computerScore = 0;

console.log('Let\'s play a game!');
for (let i = 0; i < 5; i++) {
    const playerChoice = getHumanChoice();
    const compChoice = getComputerChoice();
    const result = playRound(playerChoice, compChoice);

    if (result === 2) {
        console.log('Human won!');
        humanScore++;
    } else if (result === 1) {
        console.log("Computer won");
        computerScore++;
    } else {
        console.log("It's a draw.");
    }
}

// Display final results
console.log('The game is now over.');
if (humanScore > computerScore) {
    console.log('You won!');
} else if (computerScore > humanScore) {
    console.log('The computer won.');
} else {
    console.log('It was a draw.');
}
