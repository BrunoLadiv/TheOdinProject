import Card from './Card'
import styled from 'styled-components'

const CarouselContainer = styled.section`
  overflow-x: auto;
  position: relative;
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
const CarouselCategory = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
`
export default function Carousel() {
  return (
    <>
      <CarouselCategory>
        Most Popular
      </CarouselCategory>
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
    </>
  )
}
