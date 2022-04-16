import { gql, useQuery } from '@apollo/client'
import { TodoStatus } from '@web/lib/graphql/types'
import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TodoItem_TodoItemFragment } from '../TodoItem/TodoItem.generated'
import { FindTodoListDocument } from './TodoList.generated'

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
  })
  if (loading) return null
  if (error) return <div>error</div>
  if (data.findTodoList.__typename === 'FindTodoListError')
    return <div>{data.findTodoList.message}</div>

  // const exampleTodos: TodoItem_TodoItemFragment[] = [
  //   {
  //     id: '1',
  //     content: 'item1',
  //     status: TodoStatus.Completed,
  //     dueDateTime: '2022-04-17',
  //     tags: [],
  //   },
  //   {
  //     id: '2',
  //     content: 'item2',
  //     status: TodoStatus.InProgress,
  //     dueDateTime: '2022-04-18',
  //     tags: [],
  //   },
  // ]
  const todos = (data?.findTodoList.todoList.todos ?? []).map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })
  return <div>{todos}</div>
}

export default TodoList
