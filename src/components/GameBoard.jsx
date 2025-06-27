import { useState } from "react";

const initialGameBoard = [
  [null, null, null], // Each array is a grid row
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareSelection(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((gameBoardRow, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {gameBoardRow.map((rowItem, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => handleSquareSelection(rowIndex, columnIndex)}
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
