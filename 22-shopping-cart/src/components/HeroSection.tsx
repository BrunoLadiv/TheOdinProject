import styled from 'styled-components'
import Button from './Button'
import CartSVG from '../assets/cart.svg'
import { useCart } from '../services/providers/CartContext'
import { useState } from 'react'

const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 100px;
  }
`
const ImgContainer = styled.div`
  width: 100%;
`

const TextContainer = styled.div`
  width: 100%;
  padding-left: 36px;
  @media (min-width: 1440px) {
    margin-top: 50px;
    width: 40%;
    & > h3 {
      margin-top: 100px;
    }
  }
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
  name?: string
  description_raw?: string
  background_image?: string
  price: number
}
const AlreadyInCartAlert = styled.div`
  background-color: #ff0000be;
  font-size: 1.5rem;
  padding: 20px;
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 99999;
`
export default function HeroSection({
  name,
  description_raw,
  background_image,
  price,
}: HeroSectionProps) {
  const { state, dispatch } = useCart()
  const [showWarning, setShowWarning] = useState(false)

  function handleWarning() {
    setShowWarning(true)
    setTimeout(() => {
      setShowWarning(false)
    }, 1000)
  }

  function handleAddToCart() {
    if (state.items.find((game) => game.name === name)) return handleWarning()
    dispatch({
      type: 'add-to-cart',
      payload: { name, background_image, price },
    })
  }
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
        <TextDescription>{description_raw}</TextDescription>
        <h3>${price}</h3>
        {showWarning && (
          <AlreadyInCartAlert>Game already in your cart</AlreadyInCartAlert>
        )}
        <Button onClick={handleAddToCart}>
          <img src={CartSVG} />
          Add to cart
        </Button>
      </TextContainer>
    </HeroSectionWrapper>
  )
}
