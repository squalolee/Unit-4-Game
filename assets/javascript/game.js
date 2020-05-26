var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    purple: {
        name: "Purple",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        vlaue: 0
    }
}

var userScore = 0;
var goal = 0;

var wHistory = 0;
var lHistory = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
userScore = 0;

goal = getRandom(19, 120);

crystal.blue.value = getRandom(1,12);
crystal.red.value = getRandom(1,12);
crystal.yellow.value = getRandom(1,12);
crystal.purple.value = getRandom(1,12);

$("#your-score-display").text(userScore)
$("#goal-display").text(goal)

console.log(crystal.blue.value);
};

startGame();

var scoreAdder = function(selectedCrystal) {
    userScore += selectedCrystal.value;
    $("#your-score-display").text(userScore)
    winChecker();

}

var winChecker = function () {
    if (userScore > goal) {
        alert("Sorry. You lost!");
        lHistory++;
        $("#lHistory").text(lHistory);
        startGame();
    }
    else if (userScore === goal) {
        alert("You win!");
        wHistory++;
        $("#wHistory").text(wHistory);
        startGame();
    }
    
};

$("#cBlue").click(function () {
    scoreAdder(crystal.blue);
});

$("#cPurple").click(function () {
    scoreAdder(crystal.purple);
});

$("#cRed").click(function () {
    scoreAdder(crystal.red);
});

$("#cYellow").click(function () {
    scoreAdder(crystal.yellow);
});

