
playerSelection();
computerPlay();

function computerPlay(){
    let computerSelection=randomNumber().toString();
    switch(computerSelection){
        case "1":
            computerSelection="rock";
            console.log("computer choice is " + computerSelection);
            break;
        case "2":
            computerSelection="paper";
            console.log("computer choice is "+ computerSelection);
            break;
        case"3":
        computerSelection="scissors";
            console.log("computer choice is "+ computerSelection);
            break;
        default:
            alert("somthing is wrong");
            
    }
    
}
function randomNumber(){
    const r = Math.random()*3 + 1;
    return Math.floor(r)
}
function playerSelection(){
    let playerSelection = prompt("Select your choice:1-Rock 2-Paper 3-Scissors")
    switch(playerSelection){
        case "1":
            playerSelection="rock";
            console.log("your choice is " + playerSelection);
            break;
        case "2":
            playerSelection="paper";
            console.log("your choice is "+ playerSelection);
            break;
        case"3":
            playerSelection="scissors";
            console.log("your choice is "+ playerSelection);
            break;
        default:
            alert("Enter correct number(1,2,3)");
            
    }
}
function playRound(computerSelection,playerSelection)