import { type TodoFilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: TodoFilterValue
  handleFilterChange: (filter: TodoFilterValue) => void
  handleClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  handleClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            type='button'
            className='clear-completed'
            onClick={handleClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}
