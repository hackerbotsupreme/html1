const choices = document.querySelectorAll('.choice');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const resultDisplay = document.querySelector('.result');
const closeButton = document.querySelector('.close-button');

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        resultDisplay.textContent = `Computer has chosen ${computerChoice}. You have chosen ${userChoice}. ${result}`;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
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
