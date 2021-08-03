import React, { ReactElement } from "react";
import { useGame } from "../../contexts/GameContext";
import "./styles.css";

interface SquareProps {
  value: number;
  index: number;
}

function Square(props: SquareProps): ReactElement<any> {
  const { squares, setSquares, currentPlayer, setCurrentPlayer, gameWinner } = useGame();

  const handleClick = () => {
    if (squares[props.index] || gameWinner) return;

    let newSquares = [...squares];
    newSquares[props.index] = currentPlayer;
    setSquares(newSquares);
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  return (
    <button type="button" className="square" onClick={handleClick}>
      <span style={{color: String(props.value) === "X" ? '#85E3FF' : '#F6A6FF'}}>{props.value}</span>
    </button>
  );
}

export default Square;
