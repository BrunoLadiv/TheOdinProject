import styled from 'styled-components'
import CarouselImg from '../assets/carouselimg.png'
import { Link } from 'react-router-dom'

type CardProps = {
  width?: string
  height?: string
}
const CardContainer = styled.div<CardProps>`
  height: ${(props) => (props.height ? props.height : 'fit-content')};
  width: ${(props) => (props.width ? props.width : '159px')};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`
const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
`
const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(20, 18, 24, 0) 0%, #0b0a0d 100%);
  padding-left: 20px;
  padding-bottom: 24px;
  & > h3 {
    margin: 0;
    margin-top: 18px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  & > p {
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--secondary);
  }
`
function Card({ width, height }: CardProps) {
  const gameNameMock = 'DaysGone'
  return (
    <Link to={`/games/${gameNameMock}`}>
      <CardContainer
        width={width}
        height={height}
      >
        <CardImage src={CarouselImg} />
        <CardDescriptionContainer>
          <h3>Days Gone</h3>
          <p>$34.99</p>
        </CardDescriptionContainer>
      </CardContainer>{' '}
    </Link>
  )
}

export default Card
