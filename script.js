let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++;

  let message = "";

  if (userGuess === secretNumber) {
    message = "🎉 Correct! You guessed the number!";
  } else if (userGuess > secretNumber) {
    message = "Too high! Try again.";
  } else if (userGuess < secretNumber) {
    message = "Too low! Try again.";
  } else {
    message = "Please enter a valid number.";
  }

  document.getElementById("message").innerText = message;
  document.getElementById("attempts").innerText = "Attempts: " + attempts;
}
