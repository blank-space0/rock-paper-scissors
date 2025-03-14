// Constants for choices
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Function to get computer's choice
function getComputerChoice() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    alert(`Player chose ${humanChoice}.\nComputer chose ${computerChoice}`);

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

// Function to update the score and results to the existing DOM element
function updateResults(result, humanScore, computerScore) {
    let resultsDiv = document.querySelector(".results"); // return null if it doesnt exist

    // If there's no results div yet, create one
    if (!resultsDiv) {
        resultsDiv = document.createElement("div");
        resultsDiv.classList.add("results");
        document.body.appendChild(resultsDiv); // append to the results div
    }

    // Clear existing children and add new content
    resultsDiv.replaceChildren();  // Clear the div content

    // Create the result text element
    const resultText = document.createElement("p");
    if (result === 2) {
        resultText.textContent = "Human won this round!";
    } else if (result === 1) {
        resultText.textContent = "Computer won this round!";
    } else {
        resultText.textContent = "It's a draw.";
    }

    // Create the score display
    const scoreText = document.createElement("p");
    scoreText.textContent = `Current score: Human -> ${humanScore} | Computer -> ${computerScore}`;

    // Append the new result and score to the results div
    resultsDiv.appendChild(resultText);
    resultsDiv.appendChild(scoreText);
}

// Function to remove the results div at the end of the game
function clearResults() {
    const resultsDiv = document.querySelector(".results");
    if (resultsDiv) {
        resultsDiv.remove();  // Remove the results div when the game is over
    }
}

// Main game loop
let humanScore = 0, computerScore = 0;
let count = 0;

alert("Let's play a game! Select a button");

const buttons = document.querySelectorAll("button");

// Add an event listener for each button
buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const clickedButton = event.target;
        const humanChoice = clickedButton.textContent;
        const compChoice = getComputerChoice();
        const result = playRound(humanChoice, compChoice);

        // Update results and scores
        if (result === 2) {
            alert('Human won!');
            humanScore++;
        } else if (result === 1) {
            alert("Computer won");
            computerScore++;
        } else {
            alert("It's a draw.");
        }

        // Update the displayed result and score
        updateResults(result, humanScore, computerScore);

        // After 5 rounds, the game ends
        if (++count >= 5) {
            alert('The game is now over.');
            if (humanScore > computerScore) {
                alert('You won!');
            } else if (computerScore > humanScore) {
                alert('The computer won.');
            } else {
                alert('It was a draw.');
            }
            count = 0;  // Reset round count
            humanScore = 0;  // Reset scores
            computerScore = 0; // Reset scores

            // Clear the results div
            clearResults();
        }
    });
});