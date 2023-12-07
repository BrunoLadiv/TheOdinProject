import styled from 'styled-components'
import Card from './Card.comp'
import { useState, useEffect } from 'react'

const Main = styled.main`
  display: grid;
  gap: 25px;
  width: 70%;
  margin: 3rem auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`

export default function MainSection() {
  const [pokemonData, setPokemonData] = useState([])
  const numberOfPokemon = 15
  const totalPokemonCount = 720

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
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
            const data = await response.json();

            const pokemonInfo = {
              name: data.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
            };

            return pokemonInfo;
          })
        );

        setPokemonData(pokemonList);
      } catch (error) {
        console.error('Error fetching random Pokemon data:', error);
      }
    };

    fetchRandomPokemonData();
  }, []);
  return (
    <Main>
      {pokemonData.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            pokemon={pokemon}
          />
        )
      })}
    </Main>
  )
}
