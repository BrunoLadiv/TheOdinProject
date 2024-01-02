import { useParams } from 'react-router-dom'
import { formatDate } from '../helpers/helper'
import HeroSection from '../components/HeroSection'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import axios from 'axios'
import React from 'react'

const GameDetailsContainer = styled.section`
  padding-left: 36px;
  margin-top: 36px;
`

const DescriContainer = styled.div`
  & h4 {
    color: var(--secondary);
    margin: 0;
  }
  & p {
    font-size: 0.8rem;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 16px;
  }
`

export default function GameDetails() {
  const { id } = useParams()
  const { isLoading, isError, error, data } = useQuery('game-details', () =>
    axios.get(
      `https://rawg.io/api/games/${id}?key=c542e67aec3a4340908f9de9e86038af`
    )
  )
  React.useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>{error.message}</h1>
  return (
    <>
      <HeroSection background_image={data?.data.background_image} name={data?.data.name} description_raw={data?.data.description_raw}/>
      <GameDetailsContainer>
        <h3>Rating: {data?.data.rating}</h3>
        <DescriContainer>
          <h4>Genre</h4>
          <p>{data?.data.genres.map(genre => {
            return `${genre.name}, `
          })}</p>
        </DescriContainer>
        <DescriContainer>
          <h4>Release date</h4>
          <p>{formatDate(data?.data.released)}</p>
        </DescriContainer>
        <DescriContainer>
          <h4>Plataforms</h4>
          <p>{data?.data.platforms.map(item => {
            return `${item.platform.name}, `
          })}</p>
        </DescriContainer>
      </GameDetailsContainer>
    </>
  )
}
