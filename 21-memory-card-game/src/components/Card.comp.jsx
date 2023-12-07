/* eslint-disable react/prop-types */
import styled from 'styled-components'


const PokemonImg = styled.img`
    height: 150px;
    display: block;
    filter: drop-shadow(-5px 5px 10px #000000);

`
const PokemonName = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.5rem;
  text-shadow: 2px 2px 2px black;
  text-transform: capitalize;
`
const PokemonCard = styled.div`
  background-color: #887b7b70;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 7px 5px 6px -2px rgba(0,0,0,0.7);
  transition: transform 0.3s ease;
  &:hover{
    transform: translateY(-5%);
  }
`
export default function Card({ pokemon }) {
  console.log(pokemon, 'dentro da func')
  return (
    <PokemonCard>
      <PokemonImg src={pokemon.imageUrl} />
      <PokemonName>{pokemon.name}</PokemonName>
    </PokemonCard>
  )
}