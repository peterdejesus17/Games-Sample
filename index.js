const playArea = document.querySelectorAll("#play-areas");
const scoreArea = document.querySelectorAll("#score-areas");





// generates the game button for each possible choices
const gameButton = (choice) => {
    const button = document.createElement("button");
    button.innerHTML = choice;
    button.setAttribute("id", choice + " button");
    button.addEventListener("click", function() {
        console.log(button.id);
        const computersChoice = computerChoices()
        const winner = whowins(choice, computersChoice);
        console.log("Winner is " + winner);
        updateScores();
        showsResult(winner, choice, computersChoice);
    });
    playArea[0].appendChild(button);
};


const whowins = (choice, computerChoices) => {
    console.log("who wins: " + choice + " OR " + computerChoices);
    if (choice==="Scissors") 
    {
        if (computerChoices==="Rock") {
            console.log("Computer Wins");
            scoresComputer++;
            return "computer";
        }
        else if (computerChoices==="Paper") {
            console.log("User Wins");
            scoresUser++;
            return "user";
        }
        else {
            console.log("It's a tie");
            scoresTies++;
            return "tie";
        }
    } 
    else if (choice==="Paper") 
    {
        if (computerChoices==="Rock") {
            console.log("User Wins");
            scoresUser++;
            return "user";
        }
        else if (computerChoices==="Scissors") {
            console.log("Computer Wins");
            scoresComputer++;
            return "computer";
        }
        else {
            console.log("It's a tie");
            scoresTies++;
            return "tie";
        }
    } 
    else 
    {
        if (computerChoices==="Paper") {
            console.log("Computer Wins");
            scoresComputer++;
            return "computer";
        }
        else if (computerChoices==="Scissors") {
            console.log("User Wins");
            scoresUser++;
            return "user";
        }
        else {
            console.log("It's a tie");
            scoresTies++;
            return "tie";
        }
    }
}

// updates the score when some event occurs such as clicking button
const updateScores = () => {
    document.getElementById("scoresUser").innerHTML = scoresUser;
    document.getElementById("scoresComputer").innerHTML = scoresComputer;
    document.getElementById("scoresTies").innerHTML = scoresTies;
};

//generates the computer choice button
const computerChoices = () => {
    const computer = Math.floor(Math.random() * 3);
    return userChoice[computer];
};


const showsResult = (winner, user, pc) => {
    document.getElementById("results").style.display = "block";
    const playerWinners = document.getElementById("player-win");
    const usr = document.getElementById("user");
    const cmp = document.getElementById("cmp")
    usr.setAttribute("src", "./image/User"+user+".png");
    usr.setAttribute("width", "100px");
    cmp.setAttribute("src", "./image/Cmp"+pc+".png");
    cmp.setAttribute("width", "100px");
    if (winner==="user" || winner==="computer") {
        playerWinners.innerHTML = winner + " wins";
    } else {
        playerWinners.innerHTML = "It's a tie";
    }
    if (winner==="user") {
        playerWinners.style.color = "green";
    } else if (winner==="computer") {
        playerWinners.style.color = "red";
    } else {
        playerWinners.style.color = "white";
    }
}

//generates the button for each choices
const userChoice = ["Rock", "Paper", "Scissors"];

userChoice.forEach(choice => {
    gameButton(choice);
});




//displays the score on the score areas
scoreArea[0].innerHTML = "Scores";

let scoresUser = 0;
let scoresComputer = 0;
let scoresTies = 0;

const scores = ['User', 'Computer', 'Ties'];

const displayScores = (score) => {
    const display = document.createElement("h5");
    const displayScore = document.createElement("span");
    display.innerHTML = score + ": ";
    display.setAttribute("id", score);
    scoreArea[0].appendChild(display);
    displayScore.innerHTML = 0;
    displayScore.setAttribute("id", "scores"+score);
    document.getElementById(score).appendChild(displayScore);
};

scores.forEach(score => {
    displayScores(score);
});



// button appears when user clicked on the button and results popup on a modal
const continueButton = document.getElementById("continue-button");
const newgameButton = document.getElementById("newgame-button");

const modalResult = document.getElementById("results");

continueButton.addEventListener("click", function() {
    modalResult.style.display = "none";
});


newgameButton.addEventListener("click", function() {
    newGame();
});

const menus = ["New Game", "How to Play"];

const menuArea = document.getElementById("menu");

menus.forEach(menu => {
    const menuButtn = document.createElement("button");
    menuButtn.innerHTML = menu;
    menuButtn.setAttribute("id", menu);
    menuArea.appendChild(menuButtn);
});

//snackbar and resetting the score
const newGame = () => {
    scoresUser = scoresComputer = scoresTies = 0;
    updateScores();
    modalResult.style.display = "none";

    // Implemented the tutorial snackbar sample from the web (188-197)
    //get the snackbar
    const snack = document.getElementById("snackbar");

    // Add the "show" class to DIV
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);

};

document.getElementById("New Game").addEventListener("click", function() {
    newGame();
});

const snackbar = document.createElement("div");

snackbar.innerHTML = "New Game";
snackbar.setAttribute("id", "snackbar");
menuArea.appendChild(snackbar);

//how to play button field
const gameplay = document.getElementById("gameplay");

const gameplayButtn = document.getElementById("How to Play");

gameplayButtn.addEventListener("click", function() {
    gameplay.style.display = "block";
});

const gameplayCloseButton = document.getElementById("closeButton");
gameplayCloseButton.addEventListener("click", function() {
    gameplay.style.display = "none";
});




