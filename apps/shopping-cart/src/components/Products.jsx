import { useCart } from '../hooks/useCart.js'
import { Filters } from './Filters.jsx'
import { IconCart } from './Icons.jsx'
import './Products.css'

export function ProductCard ({ product }) {
  const { cart, addProductToCart, removeProductFromCart } = useCart()

  const isProductInCart = cart.find(item => item.product.id === product.id)

  const handleClickCart = (product) => {
    if (isProductInCart) {
      removeProductFromCart(product)
    } else {
      addProductToCart(product)
    }
  }

  return (
    <li className='Products-item'>
      <figure className='Products-itemImage'>
        <img src={product.thumbnail} alt={product.tittle} />
      </figure>
      <div className='Products-itemContent'>
        <div className='Products-itemTitle'>
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      </div>
      <div className='Products-itemButtons'>
        <button className={`Products-itemButtonCart ${isProductInCart ? 'is-inCart' : ''}`} onClick={() => handleClickCart(product)}>
          <span>{`${isProductInCart ? 'Añadido al carrito' : 'Añadir al carrito'}`}</span>
          <IconCart width={20} height={20} />
        </button>
      </div>
    </li>
  )
}

export function ProductsList ({ products }) {
  return (
    <section className='Products-list'>
      {
        products.length > 0
          ? (
            <ul className='Products-grid'>
              {products.slice(0, 10).map(product => <ProductCard key={product.id} product={product} />)}
            </ul>
            )
          : (
            <div>
              No hay resultados para la busqueda
            </div>
            )
      }
    </section>
  )
}

export function Products ({ products }) {
  return (
    <div className='Container'>
      <div className='Products'>
        <Filters />
        <ProductsList products={products} />
      </div>
    </div>
  )
}
