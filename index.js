
//clean slate//

//score variable//
let humanScore = 0;
let compScore = 0;

function getCompChoice(){

    //creating constant 'compChoice'//
    const compChoice = Math.floor(Math.random()*3)+1;
   
//telling function what to do when a value of 1, 2, or 3 is stored in the constant//

    if (compChoice === 1){
        return "rock";
    } else if (compChoice === 2){
        return "paper";
    } else if (compChoice === 3){
        return "scissors";
    }else{
        console.log('error')
    }
    return compChoice;
}
// console.log(getCompChoice())



function getHumanChoice(){

    const humanChoiceUnMod = prompt('enter rock paper scissors here');
    const humanChoice = humanChoiceUnMod.toLowerCase().trim();
    
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice
    // } else if (humanChoice === "paper"){
    //     return humanChoice;
    // } else if (humanChoice === "scissors"){
    //     return humanChoice;
    } else {
        return "not a valid input."
    }
}
// console.log(getHumanChoice())

function playRound(human, computer){

    //code to increment score variables//

    //code to consoloe.log string values for winning and losing//

    if (human === "rock" && computer === "rock"){
        console.log("you have tied")
    } else {
        console.log("not coded in yet")
    }
}

const humanSelection = getHumanChoice();
const compSelection = getCompChoice();
// console.log(humanSelection)
// console.log(compSelection)
playRound(humanSelection, compSelection)