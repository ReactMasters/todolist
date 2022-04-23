import { gql, useQuery } from '@apollo/client'
import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { FindTodoListDocument } from './TodoList.generated'

type Props = {
  todoListId?: string
}

export const findTodoList = gql`
  query FindTodoList($input: FindTodoListInput!) {
    findTodoList(findTodoListInput: $input) {
      ... on FindTodoListSuccess {
        todoList {
          id
          todos {
            ...TodoItem_TodoItem
          }
        }
      }
      ... on FindTodoListError {
        message
      }
    }
  }
  ${TodoItem.fragments.todoItem}
`

const TodoList = ({ todoListId }: Props) => {
  const { loading, data, error } = useQuery(FindTodoListDocument, {
    variables: {
      id: todoListId,
    },
    skip: !todoListId,
  })
  if (loading) return null
  if (!data || error) return <div>{JSON.stringify(error)}</div>
  if (data.findTodoList.__typename === 'FindTodoListError')
    return <div>{data.findTodoList.message}</div>

  const todos = (data?.findTodoList.todoList.todos ?? []).map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })
  return <div>{todos}</div>
}

export default TodoList
