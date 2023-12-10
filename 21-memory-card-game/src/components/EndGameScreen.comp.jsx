import styled from "styled-components";
import { EndGameOptions } from "./ConfigScreen.comp.jsx";

const Result = styled.h1`
  margin-bottom: 50px;
  color: var(--color);
  text-shadow:
    2px 2px 0px #ffffff,
    5px 4px 0px rgba(0, 0, 0, 0.15);
  font-size: 7rem;
  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const Score = styled.h1`
  font-family: Arial;
  font-size: 3rem;
  text-align: center;
  color: white;
  text-shadow:
    2px 2px 0px #000,
    5px 4px 0px rgba(0, 0, 0, 0.15);
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function EndGameScreen({ score, result, setGameStatus }) {
  console.log(result);
  return (
    <Wrapper>
      {result === "won" ? (
        <Result style={{ "--color": "green" }}>You won!</Result>
      ) : (
        <Result style={{ "--color": "red" }}>You lost!</Result>
      )}
      <Score>
        Your score was: {score.best}/{score.totalCards}
      </Score>
      <EndGameOptions>
        <li
          onClick={() => setGameStatus("config")}
          title="(change difficulty and get new pokemons)"
        >
          Restart
        </li>
      </EndGameOptions>
    </Wrapper>
  );
}
