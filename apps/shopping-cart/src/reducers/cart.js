export const CART_REDUCER_INITIAL_STATE = []
export const CART_REDUCER_STORAGE_STATE = JSON.parse(window.localStorage.getItem('cart')) || CART_REDUCER_INITIAL_STATE

export const CART_REDUCER_TYPES = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  TOGGLE_QUANTITY: 'TOGGLE_QUANTITY',
  CHECK_CART: 'CHECK_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const CART_REDUCERS = {
  [CART_REDUCER_TYPES.ADD_PRODUCT]: (state, action) => {
    const product = action.payload
    const indexOfProductInCart = state.findIndex(item => item.product.id === product.id)

    if (indexOfProductInCart >= 0) {
      const cartItem = state[indexOfProductInCart]

      const newState = [
        ...state.slice(0, indexOfProductInCart),
        { ...cartItem, quantity: cartItem.quantity + 1 },
        ...state.slice(indexOfProductInCart + 1)
      ]

      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    }

    const newState = [
      ...state,
      {
        product,
        quantity: 1
      }
    ]

    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  },
  [CART_REDUCER_TYPES.REMOVE_PRODUCT]: (state, action) => {
    const product = action.payload
    const indexOfProductInCart = state.findIndex(item => item.product.id === product.id)

    if (indexOfProductInCart >= 0) {
      const newState = [
        ...state.slice(0, indexOfProductInCart),
        ...state.slice(indexOfProductInCart + 1)
      ]

      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    }

    return state
  },
  [CART_REDUCER_TYPES.TOGGLE_QUANTITY]: (state, action) => {
    const { product, status } = action.payload
    const indexOfProductInCart = state.findIndex(item => item.product.id === product.id)

    if (indexOfProductInCart >= 0) {
      const cartItem = state[indexOfProductInCart]
      const clampQuantity = (value) => value > 10 ? 10 : (value < 1 ? 1 : value)
      const newCartItemQuantity = status === '+' ? clampQuantity(cartItem.quantity + 1) : clampQuantity(cartItem.quantity - 1)

      const newState = [
        ...state.slice(0, indexOfProductInCart),
        { ...cartItem, quantity: newCartItemQuantity },
        ...state.slice(indexOfProductInCart + 1)
      ]

      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    }

    return state
  },
  [CART_REDUCER_TYPES.CHECK_CART]: () => {
    const newState = CART_REDUCER_INITIAL_STATE

    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  },
  [CART_REDUCER_TYPES.CLEAR_CART]: () => {
    const newState = CART_REDUCER_INITIAL_STATE

    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  }
}

export const cartReducer = (state, action) => {
  const reducerType = CART_REDUCERS[action.type]
  return reducerType ? reducerType(state, action) : state
}
