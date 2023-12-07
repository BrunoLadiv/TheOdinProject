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
  
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`
        )
        const data = await response.json()

        // Extract information about each Pokemon
        const pokemonList = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url)
            const detailsData = await detailsResponse.json()

            const pokemonInfo = {
              name: detailsData.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detailsData.id}.png`,
              
            }

            return pokemonInfo
          })
        )

        setPokemonData(pokemonList)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchPokemonData()
  }, []) // Empty dependency array to run once on mount

  return (
    <Main>
      {pokemonData.map(pokemon => {
        
        return <Card key={pokemon.name} pokemon={pokemon}/>
      })}
    </Main>
  )
}
