function getComputerChoice () {
    computerChoice = '';
    choice = ((Math.random()*3))
    console.log (choice)
        if (choice <= 1){
        computerChoice = "Rock"   
    }
        else if ((choice > 1) && choice <= 2) {
        computerChoice = "Paper"
    }
        else {
        computerChoice = "Scissors"
    }
    return (console.log (computerChoice))
}``

getComputerChoice ();


getHumanChoice () {
    
}