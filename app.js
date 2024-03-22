var computerChoiceDisplay = (document.getElementById("computer-choice"));
var myChoiceDisplay = document.getElementById("my-choice");
var resultDisplay = document.getElementById("result");
var myScore = document.getElementById("my-score");
var comScore = document.getElementById("com-score");
var possibleChoices = document.querySelectorAll("button");
var randomMove;
function generateComputerChoice() {
    var MOVES = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * MOVES.length);
    randomMove = MOVES[randomIndex];
    computerChoiceDisplay.style.backgroundImage = "url(" + randomMove + ".png)";
}
var myChoice;
var myCount = 0;
var comCount = 0;
function determineWin() {
    if (myChoice === "Rock" && randomMove === "Scissors") {
        resultDisplay.innerHTML = "You win<br>!";
        myCount++;
        myScore.innerHTML = myCount.toString();
    }
    else if (myChoice === "Paper" && randomMove === "Rock") {
        resultDisplay.innerHTML = "You win<br>!";
        myCount++;
        myScore.innerHTML = myCount.toString();
    }
    else if (myChoice === "Scissors" && randomMove === "Paper") {
        resultDisplay.innerHTML = "You win<br>!";
        myCount++;
        myScore.innerHTML = myCount.toString();
    }
    else if (myChoice === randomMove) {
        resultDisplay.innerHTML = "Draw<br>!";
    }
    else {
        resultDisplay.innerHTML = "You lose<br>!";
        comCount++;
        comScore.innerHTML = comCount.toString();
    }
}
var isProcessing = false;
function resetGame() {
    isProcessing = false;
    possibleChoices.forEach(function (choice) { return (choice.disabled = false); });
}
possibleChoices.forEach(function (choice) {
    return choice.addEventListener("click", function (event) {
        isProcessing = true;
        possibleChoices.forEach(function (choice) { return (choice.disabled = true); });
        resultDisplay.innerHTML = "";
        resultDisplay.innerHTML = "Ready<br>...";
        myChoiceDisplay.style.backgroundImage =
            "url(" + event.target.id + ".png)";
        computerChoiceDisplay.style.backgroundImage = "url(question.png)";
        setTimeout(function () {
            myChoice = event.target.id;
            generateComputerChoice();
            determineWin();
            resetGame();
        }, 3000);
    });
});
