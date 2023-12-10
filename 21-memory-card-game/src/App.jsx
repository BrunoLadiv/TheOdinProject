import GlobalStyles from "./styles/GlobalStyles";
import MainSection from "./components/Main.comp";
import Header from "./components/Header.comp";
import ConfigScreen from "./components/ConfigScreen.comp";
import EndGameScreen from "./components/EndGameScreen.comp";
import { useState } from "react";

function App() {
  const [gameStatus, setGameStatus] = useState("config");
  const [difficulty, setDifficulty] = useState("");

  return (
    <>
      <GlobalStyles />
      <Header />
      {gameStatus === "game" && (
        <MainSection setGameStatus={setGameStatus} difficulty={difficulty} />
      )}
      {gameStatus === "gameover" && (
        <EndGameScreen setGameStatus={setGameStatus} />
      )}
      {gameStatus === "config" && (
        <ConfigScreen
          setDifficulty={setDifficulty}
          setGameStatus={setGameStatus}
        />
      )}
    </>
  );
}

export default App;
