import ItemList from '@web/components/ItemList'
import TodoList from '@web/components/TodoList/TodoList'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'

type Props = {}

const TodoListPage = (props: Props) => {
  return (
    <>
      <Header></Header>
      <div>
        <TodoList todoListId="623e45133f4c5d61e137a573"></TodoList>
        <ItemList />
      </div>
    </>
  )
}

export default TodoListPage
