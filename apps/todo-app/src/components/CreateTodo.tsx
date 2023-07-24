import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  handleAddTodo: (title: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleAddTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
