const initialGameBoard = [
  [null, null, null], // Each array is a grid row
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((gameBoardRow, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {gameBoardRow.map((rowItem, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={rowItem !== null}
                >
                  {rowItem}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
