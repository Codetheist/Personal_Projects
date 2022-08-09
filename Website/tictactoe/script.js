const GAME_STATUS = document.querySelector("#status");

let isGameActive = true;
let player = "X";
let computer = "O";

let board = ["", "", "", "", "", "", "", "", ""];

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

initializeGame();

// Initialize the game
function initializeGame() {
    GAME_STATUS.innerHTML = "";
    isGameActive = true;
    player = "X";
    computer = "O";
    board = ["", "", "", "", "", "", "", "", ""];
    updateBoard();
}

// Update the board
function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        document.querySelector(`#cell${i}`).innerHTML = board[i];
    }
}

// Check if the game is over
function isGameOver() {
    let isOver = false;
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
        let [a, b, c] = WINNING_COMBINATION[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isOver = true;
            break;
        }
    }
    return isOver;
}

// Check if the game is a tie
function isTie() {
    let isTie = true;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            isTie = false;
            break;
        }
    }
    return isTie;
}

// Check if the player has won
function isPlayerWin() {
    let isWin = false;
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
        let [a, b, c] = WINNING_COMBINATION[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isWin = true;
            break;
        }
    }
    return isWin;
}

// Check if the computer has won
function isComputerWin() {
    let isWin = false;
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
        let [a, b, c] = WINNING_COMBINATION[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isWin = true;
            break;
        }
    }
    return isWin;
}

// Computer's turn
function computerTurn() {
    let computerMove = Math.floor(Math.random() * 9);
    while (board[computerMove] !== "") {
        computerMove = Math.floor(Math.random() * 9);
    }
    board[computerMove] = computer;
    updateBoard();
    if (isComputerWin()) {
        GAME_STATUS.innerHTML = "Computer wins!";
        isGameActive = false;
    } else if (isTie()) {
        GAME_STATUS.innerHTML = "Tie!";
        isGameActive = false;
    }
}

// Player's turn
function playerTurn(cellId) {
    let cellIndex = parseInt(cellId.slice(4));
    if (board[cellIndex] === "") {
        board[cellIndex] = player;
        updateBoard();
        if (isPlayerWin()) {
            GAME_STATUS.innerHTML = "Player wins!";
            isGameActive = false;
        } else if (isTie()) {
            GAME_STATUS.innerHTML = "Tie!";
            isGameActive = false;
        } else {
            computerTurn();
        }
    }
}

// Reset the game
function resetGame() {
    initializeGame();
}

// Update the game status
function updateGameStatus() {
    if (isGameOver()) {
        if (isPlayerWin()) {
            GAME_STATUS.innerHTML = "Player wins!";
        } else if (isComputerWin()) {
            GAME_STATUS.innerHTML = "Computer wins!";
        } else {
            GAME_STATUS.innerHTML = "Tie!";
        }
        isGameActive = false;
    }
}

//Function to click on the cell
function clickCell(cellClickedEvent) {
    const cellClicked = cellClickedEvent.target;
    const cellNumber = parseInt(cellClicked.getAttribute('data-cell-index'));

    if (board[cellNumber] === "" || !isGameActive) {
        return;
    }

    playerTurn(cellClickedEvent, cellNumber);
    updateGameStatus();

}

document.querySelectorAll('#cell').forEach(cell => cell.addEventListener('click', clickCell));
document.querySelector('#reset').addEventListener('click', resetGame);