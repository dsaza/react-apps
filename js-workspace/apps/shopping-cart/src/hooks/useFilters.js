import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  const { filters, updateFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    const filteredProducts = products.filter(product => {
      return (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })

    return filters.priceOrder === 'ASC'
      ? filteredProducts.sort((a, b) => a.price - b.price)
      : filteredProducts.sort((a, b) => b.price - a.price)
  }

  return { filters, filterProducts, changeFilters: updateFilters }
}
