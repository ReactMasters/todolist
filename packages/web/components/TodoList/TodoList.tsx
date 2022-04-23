import { DownOutlined } from '@ant-design/icons'
import { gql, useQuery } from '@apollo/client'
import { Button } from 'antd'
import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
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

  const todos = (data?.findTodoList.todoList.todos ?? []).map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })

  return (
    <div>
      {todos}
      <Button type="primary" icon={<DownOutlined />}>
        Completed
      </Button>
    </div>
  )
}

export default TodoList
