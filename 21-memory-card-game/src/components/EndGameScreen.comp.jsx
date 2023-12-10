import styled from "styled-components";

const Wrapper = styled.div`
  background-color: green;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const EndGameOptios = styled.div`
  background-color: white;
  height: 50%;
  width: 500px;
`;
export default function EndGameScreen() {
  return (
    <Wrapper>
      <EndGameOptios>
        <ul>
          <li>Play again (same pokemons, difficulty)</li>
          <li>Restart (choose difficulty, new pokemons)</li>
        </ul>
      </EndGameOptios>
    </Wrapper>
  );
}
