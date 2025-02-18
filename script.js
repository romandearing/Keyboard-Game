
let letterTimeout;
let score = 0;
let lives = 3;
let currentLetter = '';
let gameSpeed = 10000; // Initial time before letter changes (10 sec)

// Get elements
const letterDisplay = document.getElementById("letter");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");

// Generate a random letter
function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Start the game loop
function startGame() {
    if (lives > 0) {
        currentLetter = getRandomLetter();
        letterDisplay.textContent = currentLetter;

        setTimeout(() => {
            if (letterDisplay.textContent === currentLetter) {
                // Player missed the letter
                lives--;
                livesDisplay.textContent = lives;
                if (lives === 0) {
                    alert("Game Over! Your final score: " + score);
                    resetGame();
                }
            }
            startGame();
        }, gameSpeed);
    }
}

// Listen for keypresses
document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === currentLetter) {
        score++;
        scoreDisplay.textContent = score;
        gameSpeed = Math.max(500, gameSpeed - 50); // Speed up
        startGame();
    }
});

// Reset game
function resetGame() {
    score = 0;
    lives = 3;
    gameSpeed = 2000;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    startGame();
}

// Start game when the page loads
startGame();


if (lives === 0) {
    alert("Game Over! Your final score: " + score);
    location.reload(); // Reload the page to restart the game
}