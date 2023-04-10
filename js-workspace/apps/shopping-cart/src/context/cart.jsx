import { createContext } from 'react'
import { useReducerCart } from '../hooks/useReducerCart.js'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { store } = useReducerCart()

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}
