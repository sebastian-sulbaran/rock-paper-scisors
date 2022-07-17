const computer_choice_display = document.getElementById('computer-choice');

const user_choice_display = document.getElementById('user-choice');

const result_display = document.getElementById('result');

const possible_choices = document.querySelectorAll('button'); 

let user_choice;
let computer_choice;
let result;

possible_choices.forEach(possible_choice => possible_choice.addEventListener('click', (e) => {
    user_choice = e.target.id;
    user_choice_display.innerHTML = user_choice;
    computer_choice = generateComputerChoice();
    computer_choice_display.innerHTML = computer_choice;
    result = getResult();
    result_display.innerHTML = result;
}));

function generateComputerChoice() {

    const choice = Math.floor(Math.random() * 3) + 1; //avoid magic numbers this can be rplaced by possible_choices.length
    let choiceSelection;

    switch (choice) {
        case 1:
            choiceSelection = 'rock';
            break;

        case 2:
            choiceSelection = 'paper';
            break;

        case 3:
            choiceSelection = 'scissors';
            break;
    }

    return choiceSelection;

}

function getResult() {
    let match_result;
    if (computer_choice === user_choice) {
        match_result = "It's a draw!";
    }

    if (computer_choice === 'rock' && user_choice === 'paper' ) {
        match_result = "You win";
    }
    if (computer_choice === 'rock' && user_choice === 'scissors' ) {
        match_result = "You lose";
    }
    if (computer_choice === 'paper' && user_choice === 'scissors' ) {
        match_result = "You win";
    }
    if (computer_choice === 'paper' && user_choice === 'rock' ) {
        match_result = "You lose";
    }
    if (computer_choice === 'scissors' && user_choice === 'rock' ) {
        match_result = "You win";
    }
    if (computer_choice === 'scissors' && user_choice === 'paper' ) {
        match_result = "You lose";
    }

    return match_result;
}