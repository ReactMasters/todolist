import TodoList from '@web/components/TodoList/TodoList'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'

type Props = {}

const TodoListPage = (props: Props) => {
  return (
    <>
      <Header></Header>
      <div>
        <TodoList></TodoList>
      </div>
    </>
  )
}

export default TodoListPage
