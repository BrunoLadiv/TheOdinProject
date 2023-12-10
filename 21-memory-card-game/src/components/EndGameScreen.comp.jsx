import styled from "styled-components";
import { EndGameOptions } from "./ConfigScreen.comp.jsx";
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
export default function EndGameScreen({ setGameStatus }) {
  return (
    <Wrapper>
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
