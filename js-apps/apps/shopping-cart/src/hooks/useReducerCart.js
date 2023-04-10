import { useReducer } from 'react'
import { cartReducer, CART_REDUCER_STORAGE_STATE, CART_REDUCER_TYPES } from '../reducers/cart.js'

export function useReducerCart () {
  const [state, dispatch] = useReducer(cartReducer, CART_REDUCER_STORAGE_STATE)

  const addProductToCart = (product) => dispatch({
    type: CART_REDUCER_TYPES.ADD_PRODUCT,
    payload: product
  })

  const removeProductFromCart = (product) => dispatch({
    type: CART_REDUCER_TYPES.REMOVE_PRODUCT,
    payload: product
  })

  const toggleQuantityToItemCart = ({ product, status }) => dispatch({
    type: CART_REDUCER_TYPES.TOGGLE_QUANTITY,
    payload: { product, status }
  })

  const clearCart = () => dispatch({ type: CART_REDUCER_TYPES.CLEAR_CART })

  const checkCart = () => {
    window.alert(
`Compra hecha exitosamente!!!

---

${state.map(({ product, quantity }) => {
  return `- ${product.title}
      * Valor x unidad: $${product.price}
      * Cantidad: ${quantity} unidad(es)
      * Subtotal: $${product.price * quantity}

  `
}).join('')}
---

Total de la compra: $${state.reduce((acc, item) => (item.product.price * item.quantity) + acc, 0)}
`
    )

    dispatch({ type: CART_REDUCER_TYPES.CHECK_CART })
  }

  return {
    store: {
      cart: state,
      addProductToCart,
      removeProductFromCart,
      toggleQuantityToItemCart,
      clearCart,
      checkCart
    }
  }
}
