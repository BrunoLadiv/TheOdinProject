import heroIMG from '../assets/heroimg.png'
import styled from 'styled-components'
import Button from './Button'
import CartSVG from '../assets/cart.svg'

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
  font-size: 1.4rem;
  margin: 0;
  margin-top: 16px;
`
const TextDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  max-width: 258px;
  line-height: 18px;
  color: #b0aaaa;
  max-height: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
`
type HeroSectionProps = {
  name?: string,
  description_raw?: string,
  background_image?: string
}
export default function HeroSection({name,description_raw, background_image}: HeroSectionProps) {
  return (
    <HeroSectionWrapper>
      <ImgContainer>
        <HeroImg
          src={background_image}
          alt={`picture of ${name}`}
        />
      </ImgContainer>
      <TextContainer>
        <HeroGameTitle>{name}</HeroGameTitle>
        <TextDescription>
        {description_raw}
        </TextDescription>
        <h3>$32,90</h3>
        <Button>
          <img src={CartSVG} />
          Add to cart
        </Button>
      </TextContainer>
    </HeroSectionWrapper>
  )
}
