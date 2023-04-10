import { useState } from 'react'
import { products as initialProducts } from './mooks/products.json'
import { useFilters } from './hooks/useFilters.js'
import { CartProvider } from './context/cart.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer'
import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart'
import { Debugger } from './components/Debugger.jsx'
import './App.css'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <main>
        <Products products={filteredProducts} />
      </main>
      <Footer />
      <Cart />
      <Debugger />
    </CartProvider>
  )
}

export default App
