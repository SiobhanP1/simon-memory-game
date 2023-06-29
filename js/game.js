let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

//Add call showTurns functions here to end of addTurn()
function addTurn() {
    game.playerMoves = 0;
    game["currentGame"].push(game.choices[Math.floor(Math.random() * 4)]);
    // showTurns();
}

module.exports = { game, newGame, showScore, addTurn };