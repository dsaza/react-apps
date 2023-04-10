import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    priceOrder: 'DESC'
  })

  const updateFilters = (inFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...inFilters }))
  }

  return (
    <FiltersContext.Provider value={{
      filters,
      updateFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
