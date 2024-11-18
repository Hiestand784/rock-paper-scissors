const options = ["rock", "paper", "scissors"];

function getHumanChoice () {
    let validateInput = false;
    while(validateInput == false){
        let humanChoice = prompt ("rock, paper, or scissors?");
        if (validateInput == null){
            continue;
        }   
        let humanChoiceInLower = humanChoice.toLowerCase();
        if(options.includes(humanChoiceInLower)){
            validateInput = true;
            console.log (`You chose: ${humanChoiceInLower}`)
            return (humanChoice);
        }
    }
}

function getComputerChoice () {
    let computerChoice = '';
    choice = ((Math.random()*3))
        if (choice <= 1){
        computerChoice = "rock";   
    }
        else if ((choice > 1) && choice <= 2) {
        computerChoice = "paper";
    }
        else {
        computerChoice = "scissors";
    }
    console.log (`They chose: ${computerChoice}`)
    return (computerChoice);
}

let result = '';

function playRound() {
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(humanChoice == computerChoice) {
        console.log ("It's a tie.");
        result= "Tie";
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        console.log (`You won! ${humanChoice} beats ${computerChoice}.`);
        result= "Player";
    }
    else {
        console.log (`You lost, ${computerChoice} beats ${humanChoice}.`);
        result= "Computer";
    }
}

function playGame (){
    let i = 0;
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;
    while (i<5){
        playRound();
            if(result == "Tie"){
                console.log (`Round ${round} Your score: ${humanScore}. Their score: ${computerScore}.`);
                round++;
            }
            else if(result == "Computer"){
                computerScore++;
                console.log (`Round ${round} Your score: ${humanScore}. Their score: ${computerScore}.`);
                round++;
            }
            else {
                humanScore++;
                console.log (`Round ${round} Your score: ${humanScore}. Their score: ${computerScore}.`);
                round++;
            }
    i++;
    }
    if (humanScore > computerScore){
        console.log (`Game over, you win!`)
    }
    else if (computerScore>humanScore){
        console.log (`Game over, you lose.`)
    }
    else {
        console.log (`Game over, it's a draw.`)
    }
}

playGame();