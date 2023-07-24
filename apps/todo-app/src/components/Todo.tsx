import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemoveTodo: (id: TodoId) => void
  handleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemoveTodo, handleCompletedTodo }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={(event) => {
          handleCompletedTodo({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          handleRemoveTodo(id)
        }}
      ></button>
    </div>
  )
}
