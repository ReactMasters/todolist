import { DownOutlined } from '@ant-design/icons'
import { gql, useQuery } from '@apollo/client'
import { TodoStatus } from '@web/lib/graphql/types'
import { Button, List } from 'antd'
import React, { useState } from 'react'

import TagBar from '../TagBar/TagBar'
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
        tags {
          ...TagBar_Tag
        }
      }
      ... on FindTodoListError {
        message
      }
    }
  }
  ${TodoItem.fragments.todoItem}
  ${TagBar.fragments.tag}
`

const TodoList = ({ todoListId }: Props) => {
  const [showCompleted, setShowCompleted] = useState<boolean>(false)
  const { loading, data, error } = useQuery(FindTodoListDocument, {
    variables: {
      input: { id: todoListId },
    },
    skip: !todoListId,
  })
  if (loading) return null
  if (!data || error) return <div>{JSON.stringify(error)}</div>
  if (data.findTodoList.__typename === 'FindTodoListError')
    return <div>{data.findTodoList.message}</div>

  return (
    <div>
      <TagBar tags={[]}></TagBar>
      <List
        dataSource={(data?.findTodoList.todoList.todos ?? []).filter(
          ({ status }) => status === TodoStatus.InProgress
        )}
        renderItem={(todo) => <TodoItem key={todo.id} todo={todo} />}
      />
      <Button
        type="primary"
        icon={<DownOutlined />}
        onClick={() => setShowCompleted((prev) => !prev)}
      >
        Completed
      </Button>
      {showCompleted && (
        <List
          dataSource={(data?.findTodoList.todoList.todos ?? []).filter(
            ({ status }) => status === TodoStatus.Completed
          )}
          renderItem={(todo) => <TodoItem key={todo.id} todo={todo} />}
        />
      )}
    </div>
  )
}

export default TodoList
