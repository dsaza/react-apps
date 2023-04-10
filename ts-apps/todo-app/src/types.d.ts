import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Todo['id']
export type TodoTitle = Todo['title']
export type TodoCompleted = Todo['completed']

export type TodoList = Todo[]

export type TodoFilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
