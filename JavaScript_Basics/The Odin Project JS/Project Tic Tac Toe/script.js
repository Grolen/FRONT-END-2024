//Step 1: Creating Gameboard
const Gameboard = (function () {
  const board = Array(9).fill(null);

  const getBoard = () => board;
  const setCell = (index, marker) => {
    if (board[index] === null) {
      board[index] = marker;
    }
  };

  const clearBoard = () => board.fill(null);

  return { getBoard, setCell, clearBoard };
})();

//Step 2: Creating players with a Factory Function

function createPlayer(name, marker) {
  return { name, marker };
}

const player1 = createPlayer("Player 1", "x");
const player2 = createPlayer("Player 2", "o");

//Step 3: Creating object GameController for control the game's logic

const GameController = (function () {
  let currentPlayer = player1;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const playGround = (index) => {
    if (Gameboard.getBoard()[index] === null) {
      Gameboard.setCell(index, currentPlayer.marker);
      if (checkWinner()) {
        alert(`${currentPlayer.name} wins!`);
        Gameboard.clearBoard();
      } else if (Gameboard.getBoard().every((cell) => cell != null)) {
        alert(`It's a tie!`);
        Gameboard.clearBoard();
      }
      switchPlayer();
    }
  };

  const checkWinner = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombination.some((combination) =>
      combination.every(
        (index) => Gameboard.getBoard()[index] === currentPlayer.marker
      )
    );
  };

  return { playGround };
})();
