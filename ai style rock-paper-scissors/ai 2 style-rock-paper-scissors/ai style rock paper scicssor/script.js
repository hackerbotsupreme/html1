const choices = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('.result');

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        resultDisplay.innerHTML = "Computer choice: " + computerChoice + "<br>" +
                                  "User choice: " + userChoice + "<br>" +
                                  "Result: " + result;
    });
});

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].id;
};

const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
};
