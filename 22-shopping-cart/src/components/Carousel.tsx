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
   @media (min-width: 1440px){
    margin-bottom: 80px;
  }
`
const CarouselCategory = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
`
interface Game {
  name: string
  slug: string
  background_image: string
}
type CarouselProps = {
  data?: Game[]
  title: string
}
export default function Carousel({ data, title }: CarouselProps) {
  return (
    <>
      <CarouselCategory>{title}</CarouselCategory>
      <CarouselContainer>
        <div>
          {data?.map((game) => {
            return <Card key={game.name} game={{ ...game, price: 19.99 }}  />
          })}
        </div>
      </CarouselContainer>
    </>
  )
}
