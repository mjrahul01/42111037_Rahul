

let randomNumber = Math.floor(Math.random() * 100) + 1; 
let chancesLeft = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const chancesCount = document.getElementById("chances-count");
    const tryItMessage = document.getElementById("try-it");

    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 200) {
        tryItMessage.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        tryItMessage.textContent = "You guessed the correct number!";
        resetGame();
    } else {
        chancesLeft--;
        chancesCount.textContent = chancesLeft;

        if (chancesLeft <= 0) {
            tryItMessage.textContent = "Your guess is wrong. The correct number was " + randomNumber;
            resetGame();
        } else {
            if (userGuess < randomNumber) {
                tryItMessage.textContent = "Too low! Try again.";
            } else {
                tryItMessage.textContent = "Too high! Try again.";
            }
        }
    }
}


function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    chancesLeft = 10; 
    document.getElementById("chances-count").textContent = chancesLeft;
    document.getElementById("guess").value = '';
}
document.getElementById("check-btn").addEventListener("click", checkGuess);