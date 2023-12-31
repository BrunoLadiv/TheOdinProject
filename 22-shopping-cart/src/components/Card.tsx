import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GameLink = styled(Link)<{ pe?: string }>`
  text-decoration: none;
  display: block;
  color: white;
  width: fit-content;
  pointer-events: ${props => props.pe? props.pe : 'auto'};
`
type CardProps = {
  width?: string
  height?: string
  mt?: string
  pe?: string
  game?: {
    name: string
    background_image: string
    slug: string
    price: number
  }
}
const CardContainer = styled.div<CardProps>`
  height: ${(props) => (props.height ? props.height : '200px')};
  width: ${(props) => (props.width ? props.width : '250px')};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`
const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
`
const CardDescriptionContainer = styled.div<{mt?: string}>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(20, 18, 24, 0) 0%, #0b0a0d 100%);
  padding-left: 20px;
  padding-bottom: 54px;
  & > h3 {
    margin: 0;
    margin-top: ${props => props.mt? props.mt : "18px" };
    font-size: 0.9rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & > p {
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--secondary);
  }
`
function Card({ width, height, game, mt, pe }: CardProps) {
  return (
    <GameLink pe={pe} to={`/games/${game?.slug}`}>
      <CardContainer
        width={width}
        height={height}
      >
        <CardImage src={game?.background_image} />
        <CardDescriptionContainer title={game?.name} mt={mt}>
          <h3>{game?.name}</h3>
          <p> ${game?.price}</p>
        </CardDescriptionContainer>
      </CardContainer>
    </GameLink>
  )
}

export default Card
