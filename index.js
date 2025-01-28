
//clean slate//

//score variables - global//
let humanScore = 0;
let compScore = 0;

function getCompChoice(){

    //creating constant 'compChoice'//
    const compChoice = Math.floor(Math.random()*3)+1;
   
//telling function what to do when a value of 1, 2, or 3 is stored in the constant//

    if (compChoice === 1){
        return "ROCK";
    } else if (compChoice === 2){
        return "PAPER";
    } else if (compChoice === 3){
        return "SCISSORS";
    }else{
        console.log('ERROR')
    }
    return compChoice;
}
// console.log(getCompChoice())



function getHumanChoice(){

    const humanChoiceUnMod = prompt('Enter ROCK, PAPER, or SCISSORS here:');
    const humanChoice = humanChoiceUnMod.toUpperCase().trim();
    
    if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS"){
        return humanChoice
    // } else if (humanChoice === "paper"){
    //     return humanChoice;
    // } else if (humanChoice === "scissors"){
    //     return humanChoice;
    } else {
        return "Not a valid input. Try again."
    }
}
// console.log(getHumanChoice())

function playRound(human, computer){

    //code to increment score variables//

    //code to consoloe.log string values for winning and losing//

    if (human === "ROCK"){

        if (computer === human){
            console.log("You Have Tied.");

        } else if (computer === "PAPER" ){ 
            console.log(`You Lose! ${computer} beats ${human}.`);
            compScore++;

        } else if (computer === "SCISSORS"){
            console.log(`You Win! ${human} beats ${computer}`);
            humanScore++;
        }

    } else if (human === "PAPER") {

        if (computer === human){
            console.log("You Have Tied.");

        }  else if (computer === "SCISSORS"){
            console.log(`You Lose! ${computer} beats ${human}.`);
            compScore++;
            
        } else if (computer === "ROCK"){ 
            console.log(`You Win! ${human} beats ${computer}`);
            humanScore++;
        }

    } else if (human === "SCISSORS"){

        if (computer === human){
            console.log("You Have Tied.");
            
        } else if (computer === "ROCK" ){ 
            console.log(`You Lose! ${computer} beats ${human}.`);
            compScore++;

        } else if (computer === "PAPER"){
            console.log(`You Win! ${human} beats ${computer}`);
            humanScore++;
        }
     }
    console.log(`you: ${humanScore}`)
    console.log(`computer: ${compScore}`)
}

const humanSelection = getHumanChoice();
const compSelection = getCompChoice();
// console.log(humanSelection)
// console.log(compSelection)
playRound(humanSelection, compSelection)