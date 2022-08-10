const GAME_STATUS = document.querySelector("#status");

let isGameActive = true;
let player = "X";
let computer = "O";

let gameBoard = ["", "", "", "", "", "", "", "", ""];

/*const playerTurn = () => {
    return "It's " + player + " turn";
}

GAME_STATUS.innerHTML = playerTurn();*/

const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize game
function initializeGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    player = "X";
    computer = "O";
    GAME_STATUS.innerHTML = "It's X turn";
}

// Update game board
function updateGameBoard() {
    let gameBoardHTML = "";
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoardHTML += "<div class='cell' data-cell-index='" + i + "'>" + gameBoard[i] + "</div>";
    }
    document.querySelector("#board").innerHTML = gameBoardHTML;
}

// Check if game is over
function isGameOver(gameBoard) {
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
        let [a, b, c] = WINNING_COMBINATION[i];
        if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== "") {
            return true;
        }
    }
    return false;
}

// Check if game is draw
function isGameDraw(gameBoard) {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
            return false;
        }
    }
    return true;
}

// Computer turn
function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 9);
    while (gameBoard[randomNumber] !== "") {
        randomNumber = Math.floor(Math.random() * 9);
    }
    gameBoard[randomNumber] = computer;
    updateGameBoard();
}

// Player turn
function playerTurn(cellClickedEvent) {
    let cellClicked = cellClickedEvent.target;
    let cellClickedIndex = parseInt(cellClicked.getAttribute("data-cell-index"));
    if (gameBoard[cellClickedIndex] === "") {
        gameBoard[cellClickedIndex] = player;
        updateGameBoard();
        if (isGameOver(gameBoard)) {
            GAME_STATUS.innerHTML = "Game Over";
            isGameActive = false;
        } else if (isGameDraw(gameBoard)) {
            GAME_STATUS.innerHTML = "Game Draw";
            isGameActive = false;
        } else {
            player = "X";
            computer = "O";
            GAME_STATUS.innerHTML = "It's O turn";
        }
    }
}


// Reset game
function resetGame() {
    initializeGame();
}

// Cell click event
function clickCell(cellClickedEvent) {
    const cellClicked = cellClickedEvent.target;
    const cellNumber = parseInt(cellClicked.getAttribute('data-cell-index'));

    if (gameBoard[cellNumber] !== '' || !isGameActive) {
        return;
    }
}

document.querySelectorAll("#cell").forEach(cell => (cell.addEventListener('click', clickCell)));
document.querySelector('#reset').addEventListener('click', resetGame);

// Refresh page
window.onload = function() {
    initializeGame();
}
