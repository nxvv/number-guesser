let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate secret number
const generateTarget = () => Math.floor(Math.random() * 10);

// Get absolute distance between human or computer guess and secret number
const getAbsoluteDistance = (x,y) => Math.abs(x - y);

// Compare guesses and get the winner
const compareGuesses = (hGuess, cGuess, secretNumber) => {

    if (hGuess < 0 || hGuess > 9) {
        window.alert('Your number is out of range');
    }

    // Difference between human guess and secret number
    const hDifference = getAbsoluteDistance(hGuess,secretNumber);

    // Difference between computer guess and secret number
    const cDifference = getAbsoluteDistance(cGuess,secretNumber);
    
    if (cDifference < hDifference) {
        return false;
    } else {
        return true;
    }
}; 

// Update the score of the winner
const updateScore = winner => {
    (winner === 'human') ? humanScore += 1 : computerScore += 1;
};

// Update the round
const advanceRound = () => {
    currentRoundNumber += 1;
};