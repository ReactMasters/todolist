import { DownOutlined } from '@ant-design/icons'
import { gql, useQuery } from '@apollo/client'
import { TodoStatus } from '@web/lib/graphql/types'
import { Button, List } from 'antd'
import TagBar from '../TagBar/TagBar'
import React, { useState } from 'react'
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
      id: todoListId,
    },
  })
  if (loading) return null
  if (error) return <div>error</div>
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
