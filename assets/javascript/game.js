// This will be the choices available to the computer.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for the game to keep score, etc.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

// Will start the game upon window loading.
window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

// Will log and push player guess.
document.onkeyup = function(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);

// Determines if player guess is same as computer's guess and adjusts scores accordingly.
    if((playerGuess === computerGuess[0]) && ( guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess [0]);
    }
// If guess is wrong, will decrease guesses left.
    else if((playerGuess !== computerGuess[0]) && (guessesLeft > 1)) {
        guessesLeft = guessesLeft-1;
    }

// Reset game.
    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    var html =  "<h1>The Psychic Game</h1>" +
                "<h2>Guess what letter I'm thinking of</h2>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses So Far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;
}

