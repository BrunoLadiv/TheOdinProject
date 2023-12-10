import styled from "styled-components";
import Card from "./Card.comp";
import LoaderSVG from "./Loader.comp";
import { useState, useEffect } from "react";

const Main = styled.main`
  position: relative;
  display: grid;
  gap: 25px;
  width: 70%;
  margin: 3rem auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media (max-width: 740px) {
    width: 100%;
  }
`;

const ScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 427px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const Score = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 1.5rem;
  transform: translateY(-120%);
`;
const DIFFICULTIES = {
  easy: 7,
  normal: 14,
  hard: 21,
};

export default function MainSection({
  difficulty,
  setResult,
  setGameStatus,
  score,
  setScore,
}) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const numberOfPokemon = DIFFICULTIES[difficulty];
  const totalPokemonCount = 720;

  useEffect(() => {
    const fetchRandomPokemonData = async () => {
      try {
        const randomIndices = [];
        while (randomIndices.length < numberOfPokemon) {
          const randomIndex = Math.floor(Math.random() * totalPokemonCount) + 1;
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }

        const pokemonList = await Promise.all(
          randomIndices.map(async (index) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${index}`,
            );
            const data = await response.json();

            const pokemonInfo = {
              name: data.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
            };

            return pokemonInfo;
          }),
        );

        setPokemonData(pokemonList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching random Pokemon data:", error);
      }
    };

    fetchRandomPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleCardClick(pokemon) {
    const isPicked = pickedList.includes(pokemon);
    if (isPicked) {
      setScore({
        ...score,
        current: 0,
        totalCards: pokemonData.length,
        best: pickedList.length,
      });
      setPickedList([]);
      setGameStatus("gameover");
    } else {
      setPickedList([...pickedList, pokemon]);
      setScore({ ...score, current: pickedList.length + 1 });
      const shuffledPokemons = pokemonData
        .slice()
        .sort(() => Math.random() - 0.5);
      setPokemonData(shuffledPokemons);
      if (pickedList.length + 1 === pokemonData.length) {
        setScore({
          ...score,
          current: 0,
          totalCards: pokemonData.length,
          best: pickedList.length + 1,
        });
        setResult("won");
        setGameStatus("gameover");
      }
    }
  }
  return (
    <Main>
      {!isLoading && (
        <ScoreWrapper>
          <Score>
            Current Score: {score.current}/{pokemonData.length}
          </Score>
        </ScoreWrapper>
      )}
      {!isLoading &&
        pokemonData.map((pokemon) => {
          return (
            <Card
              handleCardClick={handleCardClick}
              key={pokemon.name}
              pokemon={pokemon}
            />
          );
        })}
      {isLoading && <LoaderSVG />}
    </Main>
  );
}
