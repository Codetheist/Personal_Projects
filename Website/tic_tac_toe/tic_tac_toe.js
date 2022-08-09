const gameState = document.querySelector('.status');

let isGameActive = true;
let currentPlayer = 'X';
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => {"Player " + currentPlayer + " wins!"};
const drawMessage = () => {"Game is a draw!"};
const playerTurn = () => {
    return "It's " + currentPlayer + " turn";
}

gameState.innerHTML = playerTurn();

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playGame(cellClick, cellNumber) {
    gameBoard[cellNumber] = currentPlayer;
    cellClick.innerHTML = currentPlayer;
}


function changePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }

    gameState.innerHTML = playerTurn();
}


function gameResult() {
    let isRoundOver = false;

    for (let i = 0; i <= 7; i++) {
        const conditionToWin = winConditions[i];
        let conditionA = gameBoard[conditionToWin[0]];
        let conditionB = gameBoard[conditionToWin[1]];
        let conditionC = gameBoard[conditionToWin[2]];

        if (conditionA === '' || conditionB === '' || conditionC === '') {
            continue;
        }

        if (conditionA === conditionB && conditionB === conditionC) {
            isRoundOver = true;
            break;
        }
    }

    if (isRoundOver) {
        gameState.innerHTML = winMessage();
        isGameActive = false;
        return;
    }

    let isRoundADraw = !gameBoard.includes("");
    if (isRoundADraw) {
        gameState.innerHTML = drawMessage();
        isGameActive = false;
        return;
    }

    changePlayer();
}


function clickCell(cellClickedEvent) {
    const cellClicked = cellClickedEvent.target;
    const cellNumber = parseInt(cellClicked.getAttribute('data-cell-index'));

    if (gameBoard[cellNumber] !== '' || !isGameActive) {
        return;
    }

    playGame(cellClicked, cellNumber);
    gameResult();
}


function resetGame() {
    isGameActive = true;
    currentPlayer = 'X';
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    
    gameState.innerHTML = playerTurn();
    document.querySelectorAll('#cell').forEach(cell => {cell.innerHTML = ''});
}


document.querySelectorAll("#cell").forEach(cell => (cell.addEventListener('click', clickCell)));
document.querySelector('.reset').addEventListener('click', resetGame);