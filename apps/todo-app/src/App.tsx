import { useState } from 'react'
import { type TodoTitle, type TodoFilterValue, type TodoId, type Todo as TodoType } from './types'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<TodoFilterValue>(TODO_FILTERS.ALL)

  const handleAddTodo = (title: TodoTitle): void => {
    const newTodo = {
      id: window.crypto.randomUUID(),
      title,
      completed: false
    }

    setTodos(prevTodos => {
      return [
        ...prevTodos,
        newTodo
      ]
    })
  }

  const handleRemove = (id: TodoId): void => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }

        return todo
      })
    })
  }

  const handleFilterChange = (filter: TodoFilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => !todo.completed)
    })
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed

    return true
  })

  return (
    <div className='todoapp'>
      <Header
        handleAddTodo={handleAddTodo}
      />
      <Todos
        todos={filteredTodos}
        handleRemoveTodo={handleRemove}
        handleCompletedTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
