import Card from './Card'
import styled from 'styled-components'

const CarouselContainer = styled.section`
  overflow-x: auto;
  & > div {
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 12px;
    width: fit-content;
  }
  & > div > * {
    scroll-snap-align: start;
  }
`

export default function Carousel() {
  return (
    <CarouselContainer>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CarouselContainer>
  )
}
