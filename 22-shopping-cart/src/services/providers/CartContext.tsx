import React, { createContext, useReducer, ReactNode, useContext } from 'react'

type CartItem = {
}

type CartState = {
  items: CartItem[]
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
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case 'remove-from-cart':
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
