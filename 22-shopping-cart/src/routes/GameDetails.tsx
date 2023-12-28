import { useParams } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import styled from 'styled-components'

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
  // const { id } = useParams()
  return (
    <>
      <HeroSection />
      <GameDetailsContainer>
        <h3>Rating: 4.6</h3>
        <DescriContainer>
          <h4>Genre</h4>
          <p>action, adventure, rpg, indie, roguelike</p>
        </DescriContainer>
        <DescriContainer>
          <h4>Release date</h4>
          <p>Sep, 17, 2020</p>
        </DescriContainer>
        <DescriContainer>
          <h4>Plataforms</h4>
          <p>playstation, pc, xbox</p>
        </DescriContainer>
      </GameDetailsContainer>
    </>
  )
}
