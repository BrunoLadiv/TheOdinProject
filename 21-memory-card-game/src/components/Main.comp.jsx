import styled from 'styled-components'
import Card from './Card.comp'
import LoaderSVG from './Loader.comp'
import { useState, useEffect } from 'react'

const Main = styled.main`
  display: grid;
  gap: 25px;
  width: 70%;
  margin: 3rem auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`
const DIFFICULTIES = {
  easy: 7,
  normal: 14,
  hard: 21,
}

export default function MainSection({ difficulty }) {
  const [pokemonData, setPokemonData] = useState([])
  const [pickedList, setPickedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const numberOfPokemon = DIFFICULTIES[difficulty]
  const totalPokemonCount = 720

  useEffect(() => {
    const fetchRandomPokemonData = async () => {
      try {
        const randomIndices = []
        while (randomIndices.length < numberOfPokemon) {
          const randomIndex = Math.floor(Math.random() * totalPokemonCount) + 1
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex)
          }
        }

        const pokemonList = await Promise.all(
          randomIndices.map(async (index) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${index}`
            )
            const data = await response.json()

            const pokemonInfo = {
              name: data.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
            }

            return pokemonInfo
          })
        )

        setPokemonData(pokemonList)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching random Pokemon data:', error)
      }
    }

    fetchRandomPokemonData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function handleCardClick(pokemon) {
    const isPicked = pickedList.includes(pokemon)
    if (isPicked) {
      setPickedList([])
      alert('gamer over')
    } else {
      setPickedList([...pickedList, pokemon])
      const shuffledPokemons = pokemonData
        .slice()
        .sort(() => Math.random() - 0.5)
      setPokemonData(shuffledPokemons)
    }
  }
  return (
    <Main>
      {!isLoading &&
        pokemonData.map((pokemon) => {
          return (
            <Card
              handleCardClick={handleCardClick}
              key={pokemon.name}
              pokemon={pokemon}
            />
          )
        })}
      {isLoading && <LoaderSVG />}
    </Main>
  )
}
