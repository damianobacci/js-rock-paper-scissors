const computerChoiceDisplay = <HTMLElement>(
  document.getElementById("computer-choice")
);
const myChoiceDisplay = <HTMLElement>document.getElementById("my-choice");
const resultDisplay = <HTMLElement>document.getElementById("result");
const myScore = <HTMLElement>document.getElementById("my-score");
const comScore = <HTMLElement>document.getElementById("com-score");
const possibleChoices = document.querySelectorAll("button");

let randomMove: string;

function generateComputerChoice() {
  const MOVES = ["Rock", "Paper", "Scissors"];

  let randomIndex = Math.floor(Math.random() * MOVES.length);
  randomMove = MOVES[randomIndex];
  computerChoiceDisplay.style.backgroundImage = "url(" + randomMove + ".png)";
}

let myChoice: string;
let myCount = 0;
let comCount = 0;

function determineWin() {
  if (myChoice === "Rock" && randomMove === "Scissors") {
    resultDisplay.innerHTML = "You win<br>!";
    myCount++;
    myScore.innerHTML = myCount.toString();
  } else if (myChoice === "Paper" && randomMove === "Rock") {
    resultDisplay.innerHTML = "You win<br>!";
    myCount++;
    myScore.innerHTML = myCount.toString();
  } else if (myChoice === "Scissors" && randomMove === "Paper") {
    resultDisplay.innerHTML = "You win<br>!";
    myCount++;
    myScore.innerHTML = myCount.toString();
  } else if (myChoice === randomMove) {
    resultDisplay.innerHTML = "Draw<br>!";
  } else {
    resultDisplay.innerHTML = "You lose<br>!";
    comCount++;
    comScore.innerHTML = comCount.toString();
  }
}

let isProcessing = false;

function resetGame() {
  isProcessing = false;
  possibleChoices.forEach((choice) => (choice.disabled = false));
}

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (event) => {
    isProcessing = true;
    possibleChoices.forEach((choice) => (choice.disabled = true));
    resultDisplay.innerHTML = "";
    resultDisplay.innerHTML = "Ready<br>...";
    myChoiceDisplay.style.backgroundImage =
      "url(" + (event.target as HTMLButtonElement).id + ".png)";
    computerChoiceDisplay.style.backgroundImage = "url(question.png)";
    setTimeout(() => {
      myChoice = (event.target as HTMLButtonElement).id;
      generateComputerChoice();
      determineWin();
      resetGame();
    }, 3000);
  })
);
