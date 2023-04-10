import { useId, useRef, useEffect } from 'react'
import { IconCart, IconTrash } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import './Cart.css'

export function CartItem ({ product, quantity }) {
  const { removeProductFromCart, toggleQuantityToItemCart } = useCart()
  const { thumbnail, title, price } = product

  return (
    <li className='Cart-item'>
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>
      <div className='Cart-itemContent'>
        <h4>{title}</h4>
        <p>Valor c/u: ${price}</p>
        <div className='Cart-itemQuantity'>
          <button type='button' disabled={quantity === 1} onClick={() => toggleQuantityToItemCart({ product, status: '-' })}>-</button>
          <span>{quantity}</span>
          <button type='button' disabled={quantity === 10} onClick={() => toggleQuantityToItemCart({ product, status: '+' })}>+</button>
        </div>
        <p>Valor total: ${price * quantity}</p>
      </div>
      <button type='button' className='Cart-btnRemove' onClick={() => removeProductFromCart(product)}>
        <IconTrash width={20} />
      </button>
    </li>
  )
}

export function Cart () {
  const openCartHtmlId = useId()
  const openCartRef = useRef()

  const { cart, clearCart, checkCart } = useCart()

  const priceTotal = cart.reduce((acc, item) => (item.product.price * item.quantity) + acc, 0)

  useEffect(() => {
    if (cart.length === 0) {
      if (openCartRef.current) {
        openCartRef.current.click()
      }
    }
  }, [cart])

  return (
    <section className='Cart'>
      <label ref={openCartRef} className='Cart-button' htmlFor={openCartHtmlId}>
        <IconCart width={20} />
        {cart.length > 0 && <span>{cart.length}</span>}
      </label>
      <input className='Cart-checkbox' type='checkbox' id={openCartHtmlId} />
      <aside className='Cart-wrapper'>
        <h3>Carrito de compras</h3>
        {
          priceTotal > 0 && (
            <div className='Cart-preview'>
              <p>Total: ${priceTotal}</p>
              <button type='button' className='Cart-previewBtnEnd' onClick={checkCart}>Finalizar compra</button>
            </div>
          )
        }
        {
          cart.length > 0
            ? (
              <ul className='Cart-list'>
                {cart.map(item => <CartItem key={item.product.id} {...item} />)}
              </ul>
              )
            : (
              <div>
                <p>Carrito vacio...</p>
              </div>
              )
        }
        {
          priceTotal > 0 && (
            <div style={{ textAlign: 'right' }}>
              <button type='button' className='Cart-previewBtnAbort' onClick={clearCart}>Cancelar compra</button>
            </div>
          )
        }
      </aside>
    </section>
  )
}
