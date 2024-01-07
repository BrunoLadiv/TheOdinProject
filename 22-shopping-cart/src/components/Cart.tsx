import styled from "styled-components"
import { useCart } from "../services/providers/CartContext"


export default function Cart() {
  const { state, dispatch } = useCart()
  const { items } = state
  return (
    <div>
      {items.map(item => {
        return <p>{item.name}</p>
      })}
    </div>
  )
}