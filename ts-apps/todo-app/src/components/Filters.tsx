import { FILTERS_BUTTONS } from '../consts'
import { type TodoFilterValue } from '../types'

interface Props {
  filterSelected: TodoFilterValue
  handleFilterChange: (filter: TodoFilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          return (
            <li key={key}>
              <a
                href={href}
                className={`${filterSelected === key ? 'selected' : ''}`}
                onClick={(event) => {
                  event.preventDefault()
                  handleFilterChange(key as TodoFilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
