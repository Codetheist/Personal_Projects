const statusGame = document.querySelector("status");

const winMessage = () => { "Congratulations, player "; {currentPlayer} " win!"; }
const drawMessage = () => { "Game is a draw!"; }
const currentPlayerTurn = () => { "Player "; {currentPlayer} " turn!"; }

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

function cellPlayed(/*cellClicked,*/ cellNumber) {
    // Update the game board
    gameBoard[cellNumber] = player;
    // Update the cell
    document.getElementById("cell" + cellNumber).innerHTML = player;
    // Check for a winner
    checkForWinner();
    // Switch players
    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }
    // Update the status
    statusGame.innerHTML = currentPlayerTurn();
}

function gameResult() {
    // Check for a winner
    if (gameOver == true) {
        // Update the status
        statusGame.innerHTML = winMessage();
    } else {
        // Check for a draw
        if (gameBoard.includes("") == false) {
            // Update the status
            statusGame.innerHTML = drawMessage();
        }
    }
}

function cellClicked(cellEvent) {
    // Get the cell number
    var cellNumber = cellEvent.target.id.replace("cell", "");
    // Check if the cell is empty
    if (gameBoard[cellNumber] == "") {
        // Play the game
        cellPlayed(cellEvent, cellNumber);
        // Check for a winner
        checkForWinner();
        // Check for a draw
        gameResult();
    }
}

function resetGame() {
    // Reset the game board
    for (var i = 0; i < 9; i++) {
        document.getElementById("cell" + i).innerHTML = "";
    }
    // Reset the game variables
    player = "X";
    gameOver = false;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
}

function checkForWinner() {
    // Check for a winner
    if (gameBoard[0] == player && gameBoard[1] == player && gameBoard[2] == player) {
        gameOver = true;
    }
}

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", cellClicked));
document.querySelector("#reset").addEventListener("click", resetGame);