import React, { createContext, ReactNode, useState } from "react";
import { Player } from "../utils/enums";

interface GameContextProviderProps {
  children: ReactNode;
}
interface GameContextProps {
  squares: Array<any>;
  setSquares: (squares: Array<any>) => void;
  gameWinner: Player | null;
  setGameWinner: (winner: Player) => void;
  currentPlayer: Player;
  setCurrentPlayer: (currentPlayer: Player) => void;
  resetGame: () => void;
}

export const GameContext = createContext({} as GameContextProps);
export const useGame = () => {
  const context = React.useContext(GameContext);

  if (context === undefined)
    throw new Error("useGame must be used within a GameProvider");

  return context;
};

export const GameContextProvider = (props: GameContextProviderProps) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameWinner, setGameWinner] = useState<Player | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setGameWinner(null);
    setCurrentPlayer("X")
  }

  return (
    <GameContext.Provider
      value={{
        squares,
        currentPlayer,
        gameWinner,
        setSquares,
        setCurrentPlayer,
        setGameWinner,
        resetGame
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
