const statusGame = document.querySelector("status");

let isGameActive = true;
let player = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => { "Congratulations, player "; { currentPlayer } " win!"; }
const drawMessage = () => { "Game is a draw!"; }
const currentPlayerTurn = () => { "Player "; { currentPlayer } " turn!"; }

statusGame.innerHTML = currentPlayerTurn();

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellPlayed(cellClicked, cellNumber) {
    gameBoard[cellNumber] = player;
    cellClicked.innerHTML = player;
}

function changePlayer() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }

    statusGame.innerHTML = currentPlayerTurn();
}

function gameResult() {
    let isRoundOver = false;
    for (let i = 0; i < winCondition.length; i++) {
        const winCondition = winCondition[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            isRoundOver = true;
            break;
        }

        if (isRoundOver) {
            statusGame.innerHTML = winMessage();
            isGameActive = false;
            return;
        }

        let isRoundDraw = !gameBoard.includes("");
        if (isRoundDraw) {
            statusGame.innerHTML = drawMessage();
            isGameActive = false;
            return;
        }

        changePlayer();
    }
}

function cellClicked(cellClicked) {
    const clickedCell = cellClicked.target;
    const cellNumber = parseInt(clickedCell.getAtrribute("data-cell-index"));

    if (gameBoard[cellNumber] !== "" || !isGameActive) {
        return;
    }

    cellPlayed(clickedCell, cellNumber);
    gameResult();
}

function resetGame() {
    isGameActive = true;
    player = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    statusGame.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", cellClicked));
document.querySelector("reset-game").addEventListener("click", resetGame);