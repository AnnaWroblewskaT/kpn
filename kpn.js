var options;
var chosenOption = "";


var options = document.querySelectorAll(".select button"); //pobieram przyciski do zmiennej

function startGame() {
    if (chosenOption === "") {
        return alert("Choose your option!");
    }
}

document.getElementById('play').addEventListener('click', startGame); //nasłuchiwanie na start gry

function optionSelection() { //zwraca wybór gracza
    console.log(this.id);
    chosenOption = this.id;
    return chosenOption;
}

options.forEach(option => option.addEventListener('click', //nasłuchiwanie na guzikach wyboru
    optionSelection));

var compChoice = function () { //jak podpiąć to pod guzik???
    var choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        choice = "paper";
    } else if (choice == 1) {
        choice = "stone";
    } else {
        choice = "scissors";
    }
    return choice;
};

function game(optionSelection, compChoice) {
    if (optionSelection == "paper" & compChoice == "scissors") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "Computer WON."
    } else if (optionSelection == "paper" & compChoice == "stone") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "You WON."
    } else if (optionSelection == "scissors" & compChoice == "paper") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "You WON."
    } else if (optionSelection == "scissors" & compChoice == "stone") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "Computer WON."
    } else if (optionSelection == "stone" & compChoice == "scissors") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "You WON."
    } else if (optionSelection == "stone" & compChoice == "paper") {
        output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "Computer WON."
    } else output.innerHTML = "You played " + optionSelection + " , computer played " + compChoice + "It's a draw."
}