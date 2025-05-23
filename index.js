const choices =["rock", "paper", "scissors"];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerScore = 0

function playGame(playerChoices){

    const computerChoices= choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoices === computerChoices){
        result = "IT'S A TIE"
    }
    else{
        switch (playerChoices) {
            case "rock":
                result = (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSS!"
                break;
            case "paper":
                result = (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSS!"
                break;
             case "scissors":
                result = (computerChoices === "paper") ? "YOU WIN!" : "YOU LOSS!"
                break;
            default:
                break;
        }
    }

    playerDisplay.textContent = `player : ${playerChoices}`
    computerDisplay.textContent = `computer : ${computerChoices}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText")
            playerScore ++
            playerScoreDisplay.textContent = playerScore
         case "YOU LOSS!":
             resultDisplay.classList.add("redText")      
             computerScore++
             computerScoreDisplay.textContent = computerScore      
    }
    
}