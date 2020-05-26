var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
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
crystal.green.value = getRandom(1,12);

$()

}