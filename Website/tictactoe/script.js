const GAME_STATE = document.querySelector("#status");

let isGameActive = true;
let player = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const currentTurn = () => "Player " + player + "'s turn";

GAME_STATE.innerHTML = currentTurn();

init();

// Initialize the game
function init() {
    isGameActive = true;
    player = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll("#cell").forEach(cell => cell.innerHTML = "");
}

// To play the game
function playGame(CELL_CLICKED, CELL_NUMBER) {
    gameBoard[CELL_NUMBER] = player;
    CELL_CLICKED.innerHTML = player;
}


// Change the player turn
function changePlayer() {
    player = player === "X" ? "O" : "X";
    GAME_STATE.innerHTML = currentTurn();
}

// Create Game Logic
function gameLogic() {
    let isRoundOver = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = WIN_CONDITIONS[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            isRoundOver = true;
            break
        }
    }

    if (isRoundOver) {
        GAME_STATE.innerHTML = winMessage();
        isGameActive = false;
        return;
    }

    let isDraw = !gameBoard.includes("");
    if (isDraw) {
        GAME_STATE.innerHTML = tieMessage();
        isGameActive = false;
        return;
    }

    changePlayer();
}

// Win message
function winMessage() {
    return "Player " + player + " wins!";
}

// Tie message
function tieMessage() {
    return "It's a tie!";
}

// Cell click event
function cellClicked(event) {
    const CELL_CLICKED = event.target;
    const CELL_NUMBER = parseInt(CELL_CLICKED.getAttribute("data-cell-index"));

    if (gameBoard[CELL_NUMBER] !== "" || !isGameActive) {
        return;
    }

    playGame(CELL_CLICKED, CELL_NUMBER);
    gameLogic();
}


// Event listeners
document.querySelectorAll("#cell").forEach(cell => (cell.addEventListener("click", cellClicked)));
document.querySelector("#reset").addEventListener("click", resetGame);

// Reset the game
function resetGame() {
    init();
}

//Refresh the page
window.onload = init();