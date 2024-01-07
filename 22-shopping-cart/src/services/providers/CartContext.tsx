import React, { createContext, useReducer, ReactNode, useContext } from 'react'

type CartItem = {
  // Define your cart item properties here
}

type CartState = {
  items: CartItem[]
  // Add any other properties you need in the cart state
}

type CartAction =
  | { type: 'add-to-cart'; payload: CartItem }
  | { type: 'remove-from-cart'; payload: CartItem }

type CartContextType = {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add-to-cart':
      // Handle the 'add-to-cart' action and update the state accordingly
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case 'remove-from-cart':
      // Handle the 'remove-from-cart' action and update the state accordingly
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      }
    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  // Add any other initial state properties here
}

type ThemeProviderProps = {
  children: ReactNode
}

export function useCart() {
  return useContext(CartContext)
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
