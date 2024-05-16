//TODO: Rock Paper Scissors game!
//STEPS
// 1. Create a new function named getComputerChoise
// 2. Write the code so that getComputerChoise will randomly return one of the following string values: "rock", "paper" or "scissors" (using Math.random())
// 3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step
// 4. Create a new function named getHumanChoise 
// 5. Write the code so that getHumanChoise will return one of the valid chioces depending on what the user inputs
// 6. Test what your function returns by using console.log
// 7. Create two new variables named humanScore and computerScore in the global scope
// 8. Initialize those variables with the value of 0
// 9. Create a new function named playRound
// 10. Define two params for playRound: humanChoice and computerChoice. Use there two params to take the human and computer choices as args
// 11. Make your funcion's humanSelecion param case-insensitive so that players can input "rock", "ROCK", etc.
// 12. Whire the code for your playRound function to console.log a string value representing the round winner such as "You lose! Paper beats Rock!"
// 13. Increment the humanScore or computerScore variable based in the round winner
// 14. Create a new function named playGame 
// 15. Move your playRound funcion and score variabls so that they're declared inside of the new PlayGame function
// 16. Play 5 rounds by calling playRound 5 times. 
//* LETS START!!!


let humanScore = 0;

let computerScore = 0;

let computerChoice = '';

let humanChoice = '';


const body = document.querySelector('body');
const div = document.querySelector('.player-choice');

const choiceInfo = document.createElement('p');
div.appendChild(choiceInfo)

const rock_button = document.querySelector('.rock-btn');
const paper_button = document.querySelector('.paper-btn');
const scissors_button = document.querySelector('.scissors-btn');
const startGame_button = document.querySelector('.start-game-btn');

const p = document.querySelector('.incorrect_input_warning');

const humanScoreHTML = document.createElement('p');
humanScoreHTML.textContent = `Your score is: ${humanScore}`;
body.appendChild(humanScoreHTML)
const computerScoreHTML = document.createElement('p');
computerScoreHTML.textContent = `Computers score is: ${computerScore}`;
body.appendChild(computerScoreHTML)

rock_button.addEventListener("click", getHumanChoice)
paper_button.addEventListener("click", getHumanChoice)
scissors_button.addEventListener("click", getHumanChoice)
startGame_button.addEventListener("click", playGame)

function updateScore() {
    humanScoreHTML.textContent = `Your score is: ${humanScore}`;
    computerScoreHTML.textContent = `Computers score is: ${computerScore}`;
}


function getHumanChoice() {
    let humanValue = this.innerText.toLowerCase();
        humanChoice = humanValue;
        choiceInfo.textContent = `You chose ${humanChoice}!`;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let computerValue;
    if(choice === 1) {
        computerValue = "rock";
    } else if(choice === 2) {
        computerValue = "paper";
    } else if(choice === 3) {
        computerValue = "scissors"; 
    }
    computerChoice = computerValue;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors!");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock!");
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper!");
        humanScore++;
    } 
    if(computerChoice === "rock" && humanChoice === "scissors") {
        alert("You lose! Computer had Rock!");
        computerScore++;
    } else if(computerChoice === "paper" && humanChoice === "rock") {
        alert("You lose! Computer had Paper!");
        computerScore++;
    } else if(computerChoice === "scissors" && humanChoice === "paper") {
        alert("You lose! Computer had Scissors!");
        computerScore++;
    } 
    if(computerChoice === humanChoice) {
        alert("Tie! Play again!")
    }
}

function playGame() {
    if (humanChoice === '') {
        if(p.classList.contains("disabled")) {
            p.classList.add("enabled");
            p.classList.remove("disabled");
        }
    } else {
        p.classList.add("disabled");
            p.classList.remove("enabled");
    }
    getComputerChoice();
    if(computerScore < 5 && humanScore < 5) {
        playRound(humanChoice, computerChoice)
    } 
    updateScore()
    if (computerScore === 5) {
        alert("Computer won!")
    } else if(humanScore === 5){
        alert("Congratulations!!! You won!")
    }
    computerChoice = ''
    humanChoice = ''
    choiceInfo.textContent = ''
}