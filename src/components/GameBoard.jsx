export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((gameBoardRow, rowIndex) => (
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
