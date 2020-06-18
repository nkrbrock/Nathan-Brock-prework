var wordList=['RATONHNHAKETON', 'CONNOR', 'EZIO', 'ALTAIR', 'BAYEK', 'AYA'
    , 'JUNO', 'MINERVA', 'ASSASSIN', 'TEMPLAR', 'HAYTHAM', 'EDWARD', 
    'JACOB', 'EVIE', 'KASSANDRA', 'ALEXIOS'];


const tries=10; //max tries

var lettersGuessed = []; //stores the letters guessed
var wordGuesses = []; //word that is built
var guessRemaining = 0; //number of tries left
var wins = 0; //number of wins the user has
var randomWord; //index of word in array
var start = false; //to tell if game started
var end = false;

function gameStartup() {
    guessRemaining = tries;
    start = false;

    randomWord = Math.floor(Math.random()*(wordList.length));

    lettersGuessed = [];
    wordGuesses = [];

    for (var i=0;i<wordList[randomWord].length; i++) {
        wordGuesses.push("_");
    }

    updateDisplay();
};

function updateDisplay() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('word').innerText = " ";
    for (var i = 0; i < wordGuesses.length; i++) {
        document.getElementById("word").innerText += wordGuesses[i];
    };
    document.getElementById('guesses').innerText = guessRemaining;
    document.getElementById('letters').innerText = lettersGuessed;
    if (guessRemaining <= 0) {
        end=true;
    }
};

document.onkeydown = function(event) {
    if(end) {
        gameStartup();
        end = false;
    } else {
        if(event.keyCode >=65 && event.keyCode <=90) {
            guess(event.key.toUpperCase());
        }
    }
};

function guess(character) {
    if (guessRemaining > 0) {
        if (!start) {
            start = true;
        }
        if (lettersGuessed.indexOf(character) === -1) {
            lettersGuessed.push(character);
            evaluateGuess(character);
        }
    }
    updateDisplay();
    checkWin();
};

function evaluateGuess(character) {
    var spots = [];

    for (var i = 0; i < wordList[randomWord].length; i++) {
        if (wordList[randomWord][i] === character) {
            spots.push(i);
        }
    }
    if (spots.length <= 0) {
        guessRemaining--;
    } else {
        for(var i = 0; i < spots.length; i++) {
            wordGuesses[spots[i]] = character;
        }
    }
};

function checkWin() {
    if(wordGuesses.indexOf("_") === -1) {
        wins++;
        end = true;
    }
};