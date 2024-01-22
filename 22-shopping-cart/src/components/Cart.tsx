import styled from "styled-components";
import { useCart } from "../services/providers/CartContext";
import Card from "./Card";
import { useState } from "react";
import CartSVG from "../assets/cart.svg";

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
`;

const ItemsContainer = styled.div`
  max-height: 450px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: scroll;
  @media (min-width: 800px) {
    max-height: 700px;
  }
`;
const CartItems = styled.div`
  width: 60%;
  background-color: var(--bg-color);
  padding: 28px;
  @media (min-width: 800px) {
    width: 20%;
  }
`;
const PaymentBtn = styled.button`
  background-color: var(--terceary);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  color: var(--secondary);
`;
const CloseBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 35px;
`;
const CartBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  & > span {
    color: white;
    background-color: var(--secondary);
    padding: 3px;
    border-radius: 999999px;
    font-size: 0.6rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const CartItem = styled.div`
  position: relative;
  width: fit-content;
  & > button {
    position: absolute;
    bottom: 5px;
    right: 30%;
    background-color: transparent;
    color: white;
    border: none;
  }
`;

export default function Cart() {
  const { state, dispatch } = useCart();
  const [isOpened, setIsOpened] = useState(false);
  const { items } = state;
  const totalPrices = items
    //@ts-ignore
    .reduce((sum, game) => sum + game.price, 0)
    .toFixed(2);
  if (!isOpened)
    return (
      <CartBtn onClick={() => setIsOpened(true)}>
        <img src={CartSVG} />
        {items.length && <span>{items.length}</span>}
      </CartBtn>
    );
  return (
    <CartContainer>
      <CartItems>
        <CloseBtn onClick={() => setIsOpened(false)}>X</CloseBtn>
        <p>Your cart:</p>
        <ItemsContainer>
          {items.map((item: any) => {
            return (
              <CartItem>
                <button
                  onClick={() =>
                    dispatch({ type: "remove-from-cart", payload: item.name })
                  }
                >
                  remove
                </button>
                <Card
                  game={item}
                  width="150px"
                  height="150px"
                  mt="5px"
                  pe="none"
                />
              </CartItem>
            );
          })}
        </ItemsContainer>
        {items.length >= 1 && <h5>Total: ${totalPrices}</h5>}
        {items.length >= 1 && <PaymentBtn>Go to payment.</PaymentBtn>}
      </CartItems>
    </CartContainer>
  );
}
