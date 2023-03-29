import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function FilterItem ({ handleClick, itemActive, value, children }) {
  return (
    <li
      role='button'
      onClick={() => handleClick(value)}
      className={`${itemActive === value ? 'is-active' : ''}`}
    >
      {children}
    </li>
  )
}

export function Filters () {
  const { filters, changeFilters } = useFilters()

  const handleChangePriceOrder = priceOrder => {
    changeFilters({ priceOrder })
  }

  const handleChangeCategory = category => {
    changeFilters({ category })
  }

  return (
    <aside className='Filters'>
      <div className='Filters-wrapper'>
        <div className='Filters-group'>
          <h3>Precio</h3>
          <ul>
            <FilterItem
              handleClick={handleChangePriceOrder}
              itemActive={filters.priceOrder}
              value='DESC'
            >De mayor a menor
            </FilterItem>
            <FilterItem
              handleClick={handleChangePriceOrder}
              itemActive={filters.priceOrder}
              value='ASC'
            >De menor a mayor
            </FilterItem>
          </ul>
        </div>
        <div className='Filters-group'>
          <h3>Categoría</h3>
          <ul>
            <FilterItem
              handleClick={handleChangeCategory}
              itemActive={filters.category}
              value='all'
            >Todo
            </FilterItem>
            <FilterItem
              handleClick={handleChangeCategory}
              itemActive={filters.category}
              value='laptops'
            >Portátiles
            </FilterItem>
            <FilterItem
              handleClick={handleChangeCategory}
              itemActive={filters.category}
              value='smartphones'
            >Celulares
            </FilterItem>
          </ul>
        </div>
      </div>
    </aside>
  )
}
