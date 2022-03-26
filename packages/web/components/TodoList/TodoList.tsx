import { gql, useQuery } from '@apollo/client'
import React from 'react'

type Props = {
  todoListId: string
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
  const { loading, data, error } = useQuery(findTodoList, {
    variables: {
      id: todoListId,
    },
  })
  if (loading) return null
  if (error) return <div>error</div>
  const todos = (data?.findTodoList?.todoList?.todos ?? []).map((todo) => {
    return <div key={todo.id}>{todo.name}</div>
  })
  return <div>{todos}</div>
}

export default TodoList
