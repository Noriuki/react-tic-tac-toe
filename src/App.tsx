import React, { ReactElement } from "react";
import Board from "./components/Board";
import { GameContextProvider } from "./contexts/GameContext";

function App(): ReactElement<any> {
  return (
    <GameContextProvider>
      <div className="App">
        <Board />
      </div>
    </GameContextProvider>
  );
}

export default App;
