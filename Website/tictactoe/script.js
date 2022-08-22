const GAME_STATE = document.querySelector('#status');

let isGameActive = true;
let player = 'X';
let computer = 'O';
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

// Initialize the game
function init() {
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = '';
    }

    isGameActive = true;
    player = 'X';
    computer = 'O';
    GAME_STATE.innerHTML = playerTurn();

    changePlayer();
    computerTurn();
    gameLoop();
    gameLogic();
    gameResult();
}

// To play the game
function playGame(CELL_CLICKED, CELL_NUMBER) {
    if (gameBoard[CELL_NUMBER] === '') {
        gameBoard[CELL_NUMBER] = player;
        document.getElementById(CELL_NUMBER).innerHTML = player;
        changePlayer();
        gameLoop();
    }

    if (checkForLoss()) {
        GAME_STATE.innerHTML = 'You lost!';
        isGameActive = false;
    }

    if (checkForTie()) {
        GAME_STATE.innerHTML = 'Tie!';
        isGameActive = false;
    }

    if (checkForWinner()) {
        GAME_STATE.innerHTML = 'You won!';
        isGameActive = false;
    }
}


// Change the player turn
function changePlayer() {
    if (player === 'X') {
        player = 'O';
        computer = 'X';
    } else {
        player = 'X';
        computer = 'O';
    }
}

// Computer turn
function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 9);
    if (gameBoard[randomNumber] === '') {
        gameBoard[randomNumber] = computer;
        document.getElementById("randomNumber").innerHTML = computer;
    } else {
        computerTurn();
    }
}

// Check for a winner
function checkForWinner() {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        if (gameBoard[WIN_CONDITIONS[i][0]] === player && gameBoard[WIN_CONDITIONS[i][1]] === player && gameBoard[WIN_CONDITIONS[i][2]] === player) {
            return true;
        }
    }
    return false;
}

// Check for a tie
function checkForTie() {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            return false;
        }
    }
    return true;
}

// Check for a loss
function checkForLoss() {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        if (gameBoard[WIN_CONDITIONS[i][0]] === computer && gameBoard[WIN_CONDITIONS[i][1]] === computer && gameBoard[WIN_CONDITIONS[i][2]] === computer) {
            return true;
        }
    }
    return false;
}


// Player turn
function playerTurn() {
    if (isGameActive) {
        GAME_STATE.innerHTML = 'Player Turn';
    } else {
        GAME_STATE.innerHTML = 'Game Over';
    }
}


// Game logic
function gameLogic() {
    if (checkForWinner()) {
        GAME_STATE.innerHTML = 'Player Wins';
        isGameActive = false;
    } else if (checkForTie()) {
        GAME_STATE.innerHTML = 'Tie Game';
        isGameActive = false;
    }
}

// Game result
function gameResult() {
    let isRoundOver = false;

    for (let i = 0; i <= 7; i++) {
        const CONDITION_TO_WIN = WIN_CONDITIONS[i];
        let conditionA = gameBoard[CONDITION_TO_WIN[0]];
        let conditionB = gameBoard[CONDITION_TO_WIN[1]];
        let conditionC = gameBoard[CONDITION_TO_WIN[2]];

        if (conditionA === '' || conditionB === '' || conditionC === '') {
            continue;
        }

        if (conditionA === conditionB && conditionB === conditionC) {
            isRoundOver = true;
            break;
        }
    }
}

// Event listeners
document.querySelectorAll("#cell").forEach(cell => (cell.addEventListener('click', clickCell)));
document.querySelector('#reset').addEventListener('click', resetGame);


// Game loop
function gameLoop() {
    playerTurn();
    gameLogic();
}
// Cell click event
function clickCell(cellClickedEvent) {
    const CELL_CLICKED = cellClickedEvent.target;
    const CELL_NUMBER = parseInt(CELL_CLICKED.getAttribute('data-cell-index'));

    if (gameBoard[CELL_NUMBER] !== '' || !isGameActive) {
        return;
    }

    playGame(CELL_CLICKED, CELL_NUMBER);
    changePlayer();


}

// Reset the game
function resetGame() {
    init();
}

//Refresh the page
window.onload = init();

/*const GAME_STATE = document.querySelector("#status");

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
window.onload = init();*/