import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FindTodoListDocument } from './TodoList.generated'
import TodoItem from '../TodoItem'

type Props = {
  todoListId?: string
}

export const findTodoList = gql`
  query FindTodoList($id: String!) {
    findTodoList(findTodoListInput: { id: $id }) {
      ... on FindTodoListSuccess {
        todoList {
          id
          todos {
            id
            dueDateTime
            content
            status
          }
        }
      }
      ... on FindTodoListError {
        message
      }
    }
  }
`

const TodoList = ({ todoListId }: Props) => {
  const { loading, data, error } = useQuery(FindTodoListDocument, {
    variables: {
      id: todoListId,
    },
  })
  if (loading) return null
  if (error) return <div>error</div>
  if (data.findTodoList.__typename === 'FindTodoListError')
    return <div>{data.findTodoList.message}</div>

  const todos = (data?.findTodoList.todoList.todos ?? []).map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        content={todo.content}
        status={todo.status}
        dueDateTime={todo.dueDateTime}
      />
    )
  })
  return <div>{todos}</div>
}

export default TodoList
