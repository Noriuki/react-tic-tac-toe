import React, { ReactElement, useEffect } from "react";
import { useGame } from "../../contexts/GameContext";
import { calculateWinner } from "../../utils/functions";
import Square from "../Square";
import "./styles.css";

function Board(): ReactElement<any> {
  const { squares, currentPlayer, gameWinner, setGameWinner, resetGame } = useGame();
  useEffect(() => {
    let winner = calculateWinner(squares as []);
    if (winner) setGameWinner(winner)
  }, [setGameWinner, squares]);

  return (
    <div className="board-container">
      <div className="board-header">
        <h3>Player: <span>{currentPlayer}</span></h3>
        <h3>Winner: <span>{gameWinner && gameWinner}</span></h3>
      </div>
      <button style={{color: gameWinner === null ? 'transparent' : '#14bdac'}} onClick={resetGame}>Reset Game</button>
      <div className="board">
        {squares.map((square, index) => {
          return <Square key={index} value={square} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Board;
