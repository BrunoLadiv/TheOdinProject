import GlobalStyles from "./styles/GlobalStyles";
import MainSection from "./components/Main.comp";
import Header from "./components/Header.comp";
import ConfigScreen from "./components/ConfigScreen.comp";
import EndGameScreen from "./components/EndGameScreen.comp";
import { useState } from "react";

function App() {
  const [gameStatus, setGameStatus] = useState("config");
  const [difficulty, setDifficulty] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({
    best: 0,
    difc: "",
    totalCards: 0,
    current: 0,
  });

  return (
    <>
      <GlobalStyles />
      <Header gameStatus={gameStatus} />
      {gameStatus === "game" && (
        <MainSection
          setResult={setResult}
          setGameStatus={setGameStatus}
          difficulty={difficulty}
          score={score}
          setScore={setScore}
        />
      )}
      {gameStatus === "gameover" && (
        <EndGameScreen
          score={score}
          result={result}
          setGameStatus={setGameStatus}
        />
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
