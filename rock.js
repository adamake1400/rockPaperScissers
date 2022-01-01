
function game(){
    let countOfPlayerWinnig=0;
    let countOfComputerWinnig=0;
    let countOfDrawing=0;
    for(i=1;i<=5;i++){
        let playerSelection=prompt("enter your selection:1-rock  2-papar 3-scissers");
        let theWinner=playRound(playerSelection);
        if(theWinner==="player")
            countOfPlayerWinnig++;
        else if(theWinner==="computer")
            countOfComputerWinnig++;
             else countOfDrawing++;
    }
    console.log("************************")
    if (countOfPlayerWinnig>countOfComputerWinnig)
    document.getElementById('finalWinner').innerHTML="you are final winner";
        else if(countOfComputerWinnig>countOfPlayerWinnig)
        document.getElementById('finalWinner').innerHTML="computer is final winner";
            else document.getElementById('finalWinner').innerHTML="Draw";
        document.getElementById('finalResult').innerHTML="the count of player winning =  "+countOfPlayerWinnig+" <br/> the count of computer winnig =   "+countOfComputerWinnig+" <br/> the count of drawing = "+countOfDrawing;
}

//PlayRound function to specify winner
function playRound(playerSelection){
    let playerSelectionValue=playerPlay(playerSelection);
    let computerSelection=computerPlay();
    console.log(computerSelection,playerSelectionValue);
 if ((computerSelection=="scissors"&&playerSelectionValue=="rock")||(computerSelection=="rock"&&playerSelectionValue=="paper")||(computerSelection=="paper"&&playerSelectionValue=="scissors")){
    console.log("------------player is Winner => "+playerSelectionValue+" beat "+computerSelection);
 return "player";
 }
 else if((playerSelectionValue=="scissors"&& computerSelection=="rock")||(playerSelectionValue=="rock"&&computerSelection=="paper")||(playerSelectionValue=="paper"&&computerSelection=="scissors")){
    console.log("+++++++++++++computer is Winner => "+computerSelection+" beat "+playerSelectionValue);

return "computer"; 
}
        else console.log("both are the same try again");
 console.log("---------------------");
}
//speify computer selection
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
    return computerSelection;
}
function randomNumber(){
    const r = Math.random()*3 + 1;
    return Math.floor(r)
}
function playerPlay(playerSelection){
   // let playerSelection = prompt("Select your choice:1-Rock 2-Paper 3-Scissors")
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
    return playerSelection;
}

