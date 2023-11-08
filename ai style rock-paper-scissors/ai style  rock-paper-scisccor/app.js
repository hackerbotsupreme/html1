// style 1
// const Computer = document.getElementById("Computer");
// const User = document.getElementById("User");
// const Result = document.getElementById("Result");
// const choiceButtons = document.querySelectorAll("button"); // Declare "choiceButtons" as constant
// const Choices = ["Rock", "Paper", "Scissors"];
// let userChoice;
// let computerChoice;

// choiceButtons.forEach((element) => {
// element.addEventListener("click", (e) => {
//     userChoice = e.target.textContent; // Use textContent instead of id
//     User.innerHTML = userChoice;
//     computer();
//     determineResult(); // Call the function to determine the result
// });
// });

// function computer() {
// computerChoice = Choices[Math.floor(Math.random() * 3)];
// Computer.innerHTML = computerChoice;
// determineResult()
// }

// function determineResult() {
// if (userChoice === computerChoice) {
//     Result.innerHTML = 'It\'s a draw';
// } else if (
//     (userChoice === 'Rock' && computerChoice === 'Paper') ||
//     (userChoice === 'Paper' && computerChoice === 'Scissors') ||
//     (userChoice === 'Scissors' && computerChoice === 'Rock')
// ) {
//     Result.innerHTML = 'You won';
// } else {
//     Result.innerHTML = 'You lose';
// }
// }
// style 2
const choiceButtons = document.querySelectorAll("button");
const Choices = ["Rock", "Paper", "Scissors"];
const box = document.getElementById("box");
let userChoice;
let computerChoice; // Initialize computerChoice
let resultText; // Rename Result to resultText

choiceButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    userChoice = e.target.textContent;
    computerChoice = computer(); // Call the computer function and assign its result
    resultText = determineResult(); // Call the determineResult function and assign its result
    updateUI(); // Call the function to update the UI
  });
});

function determineResult() {
  if (userChoice === computerChoice) {
    return "It's a draw"; // Return the result instead of modifying the Result element directly
  } else if (
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    return "You won"; // Return the result
  } else {
    return "You lose"; // Return the result
  }
}

function computer() {
  return Choices[Math.floor(Math.random() * 3)]; // Return the computer choice
}

function updateUI() {
  box.innerHTML =
    "User Choice: " +
    userChoice +
    "<br>" +
    "Computer's Choice: " +
    computerChoice +
    "<br>" +
    "Result: " +
    resultText; // Update the UI with user choice, computer choice, and result
}

// style 3
// const choiceButtons = document.querySelectorAll("button");
// const Choices = ["Rock", "Paper", "Scissors"];
// const box = document.getElementById("box");
// let userChoice;
// let computerChoice; // Initialize computerChoice
// let resultText; // Rename Result to resultText

// choiceButtons.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     userChoice = e.target.textContent;
//     computerChoice = computer(); // Call the computer function and assign its result
//     resultText = determineResult(); // Call the determineResult function and assign its result
//     updateUI(); // Call the function to update the UI
//   });
// });

// function determineResult() {
//   if (userChoice === computerChoice) {
//     return "It's a draw"; // Return the result instead of modifying the Result element directly
//   } else if (
//     (userChoice === "Rock" && computerChoice === "Paper") ||
//     (userChoice === "Paper" && computerChoice === "Scissors") ||
//     (userChoice === "Scissors" && computerChoice === "Rock")
//   ) {
//     return "You won"; // Return the result
//   } else {
//     return "You lose"; // Return the result
//   }
// }

// function computer() {
//   return Choices[Math.floor(Math.random() * 3)]; // Return the computer choice
// }

// function updateUI() {
//   box.innerHTML =
//     "you have chosen, " +
//     userChoice +
//     ' '+
//     "you has chosen," +
//     computerChoice +
//     ' '+
//     "and the result is  " +
//     resultText; // Update the UI with user choice, computer choice, and result
// }
