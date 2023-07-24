import { type TodoId, type TodoList, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  handleRemoveTodo: (id: TodoId) => void
  handleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  todos: TodoList
}

export const Todos: React.FC<Props> = ({ todos, handleRemoveTodo, handleCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleRemoveTodo={handleRemoveTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
