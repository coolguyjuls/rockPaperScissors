
//clean slate//

function getCompChoice(){
    //creating constant 'compChoice'//
    const compChoice = Math.floor(Math.random()*3)+1;
   
//telling function what to do when a value of 1,2, or 3 in stored in the constant//

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

function playRound(param1, param2){

    // param1 = getCompChoice();
    // param2 = getHumanChoice();

    if (param1 === "rock" && param2 === "rock"){
        console.log("you habve tied")
    }
}
console.log(playRound(getCompChoice(), getHumanChoice()))