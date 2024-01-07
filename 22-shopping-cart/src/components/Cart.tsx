import styled from 'styled-components'
import { useCart } from '../services/providers/CartContext'
import Card from './Card'
import { useState } from 'react'
import CartSVG from '../assets/cart.svg'

const CartContainer = styled.div`
  height: 110vh;
  height: 110dvh;
  width: 100%;

  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(12, 12, 12, 0.862),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;
  transform: translateX(0);
`

const ItemsContainer = styled.div`
  max-height: 300px;
  overflow: scroll;
`
const CartItems = styled.div`
  width: 60%;
  background-color: var(--bg-color);
  padding: 28px;
`
const PaymentBtn = styled.button`
  background-color: var(--terceary);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  color: var(--secondary);
`
const CloseBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 35px;
`
const CartBtn = styled.button`
  background-color: transparent;
  border: none;
`
export default function Cart() {
  const { state, dispatch } = useCart()
  const [isOpened, setIsOpened] = useState(false)
  const { items } = state
  if (!isOpened) return <CartBtn onClick={()=> setIsOpened(true)}><img src={CartSVG}/></CartBtn>
  return (
    <CartContainer>
      <CartItems>
        <CloseBtn onClick={() => setIsOpened(false)}>X</CloseBtn>
        <p>Your cart:</p>
        <ItemsContainer>
          {items.map((item) => {
            return (
              <Card
                game={item}
                width="120px"
                height="120px"
                mt="5px"
              />
            )
          })}
        </ItemsContainer>
        <h5>Total: 1294$</h5>
        <PaymentBtn>Go to payment.</PaymentBtn>
      </CartItems>
    </CartContainer>
  )
}
