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

function clickCell(cellClickedEvent) {
    const cellClicked = cellClickedEvent.target;
    const cellNumber = parseInt(cellClicked.getAttribute('data-cell-index'));

    if (board[cellNumber] === "" && !isGameActive) {
        return;
    }

    if (board[cellNumber] === "") {
        board[cellNumber] = player;
        cellClicked.innerText = player;
        player = player === "X" ? "O" : "X";
        cellClicked.classList.add("clicked");
        checkForWinner();
        if (isGameActive) {
            computerTurn();
        }
    }
}

// Computer turn
function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 9);
    if (board[randomNumber] === "") {
        board[randomNumber] = computer;
        document.querySelector(`#cell-${randomNumber}`).innerText = computer;
        changePlayer();
        checkWinner();
    } else {
        computerTurn();
    }
}

// Check winner
function checkWinner() {
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
        const [a, b, c] = WINNING_COMBINATION[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            GAME_STATUS.innerText = `${board[a]} wins!`;
            document.querySelectorAll('#cell').forEach(cell => cell.classList.add("clicked"));
        }
    }

    if (!board.includes("") && isGameActive) {
        GAME_STATUS.innerText = "Draw!";
    }

    if (!isGameActive) {
        GAME_STATUS.innerText = "Game Over!";
    }

    if (!isGameActive) {
        document.querySelectorAll('#cell').forEach(cell => cell.removeEventListener("click", clickCell));
    }

    if (isGameActive) {
        changePlayer();
    }
}

// Change player
function changePlayer() {
    if (player === "X") {
        player = "O";
        computer = "X";
    } else {
        player = "X";
        computer = "O";
    }
}

// Reset game
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    GAME_STATUS.innerText = "";
    document.querySelectorAll('#cell').forEach(cell => cell.innerText = "");
}

// Reset game on refresh
window.addEventListener('load', resetGame);

document.querySelectorAll('#cell').forEach(cell => cell.addEventListener('click', clickCell));
document.querySelector('#reset').addEventListener('click', resetGame);