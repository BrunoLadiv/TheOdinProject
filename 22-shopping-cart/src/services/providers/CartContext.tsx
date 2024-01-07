import React, { createContext, useReducer, ReactNode, useContext } from 'react'

type CartItem = {
  name?: string
  background_image?: string;
  price?: number
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
        //@ts-ignore
        items: state.items.filter((item) => item.name !== action.payload),
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
