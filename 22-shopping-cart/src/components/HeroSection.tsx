import heroIMG from '../assets/heroimg.png'
import styled from 'styled-components'
import Button from './Button'

const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  
`
const ImgContainer = styled.div`
  width: 100%;
`

const TextContainer = styled.div`
  width: 100%;
  padding-left: 36px;
`
const HeroImg = styled.img`
  width: 100%;
  object-fit: contain;

  &:hover {
  }
`

const HeroGameTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  margin-top: 16px;
`
const TextDescription = styled.p`
  font-size: 1rem;
  font-weight: 100;
  max-width: 258px;
  line-height: 18px;

`

export default function HeroSection() {
  return (
    <HeroSectionWrapper> 
      <ImgContainer>
        <HeroImg
          src={heroIMG}
          alt="hero"
        />
      </ImgContainer>
      <TextContainer>
        <HeroGameTitle>Hades</HeroGameTitle>
        <TextDescription>
          Embark on an epic journey through the depths of the underworld in
          Hades, a critically acclaimed roguelike dungeon crawler.
        </TextDescription>
        <Button>
          Add to cart
        </Button>
      </TextContainer>
    </HeroSectionWrapper>
  )
}
