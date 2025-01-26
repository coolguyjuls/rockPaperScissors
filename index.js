

//trying omething here, fucntions x y z will be declared here in the global scope, gonna put rock paper scissor sinto each of these.
let rock = "ROCK";
let scissors = "SCISSORS";
let paper = "PAPER";
//function getCokmpCHoice will generate a random value of "rock", "paper", or "scissors" and log to console.
let compChoice;

function getCompChoice(compChoice){
    compChoice = Math.floor(Math.random()*3)+1;
    // console.log(compChoice)

    switch (compChoice){
        case 1:
            compChoice = rock
            console.log(compChoice)
        break;
        case 2:
            compChoice = paper
            console.log(compChoice)
        break;
        case 3:
            compChoice = scissors
            console.log(compChoice)
        break;
        default:
            console.log("i give up..")
    }
    
}
//funcrtion to get the users choice/input (rock paper or scissors)


let userChoice;

function getHumanChoice(userChoice){
    userChoice = prompt("which will you choose- Rock, Paper, or Scissors? Type your input.");
    let userChoiceMod = userChoice.toString().trim().toUpperCase();
    userChoice = userChoiceMod

    if (userChoiceMod === "ROCK"){
        userHand = rock
        console.log(userChoice)
    } else if (userChoiceMod === "PAPER"){
        userHand = paper
        console.log(paper)
    } else if (userChoiceMod === "SCISSORS"){
        console.log(scissors)
        userHand = scissors
    } else {
        console.log(Error("Not A  Valid Input"))
    }
}

//function for playing a round//
function playRound(userHand, compChoice){
    getCompChoice();
    
    getHumanChoice();

    

}
// userChoiceMod === rock && compChoice === paper
//test

playRound()
