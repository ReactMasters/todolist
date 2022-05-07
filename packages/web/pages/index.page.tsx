/* eslint-disable react-hooks/exhaustive-deps */
import AddTodoItem from 'components/AddTodoItem/AddTodoItem'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Button } from 'antd'

import { gql, useApolloClient, useQuery } from '@apollo/client'
import AddItem from '@web/components/AddItem'
import TodoList from '@web/components/TodoList/TodoList'
import { ROUTES, TOKEN_KEY } from '@web/lib/constant'

import styles from './index.module.scss'
import { IndexPageDocument } from './index.page.generated'

export const query = gql`
  query IndexPage {
    me {
      ... on MeError {
        message
      }
      ... on MeSuccess {
        user {
          id
          email
          lastLoginAt
        }
      }
    }
  }
`

const Index = () => {
  const router = useRouter()
  const client = useApolloClient()
  const { data, error, loading } = useQuery(IndexPageDocument)

  const handleLogout = useCallback(() => {
    Cookies.remove(TOKEN_KEY)
    client.resetStore()
    router.replace(ROUTES.LOGIN)
  }, [])

  if (error) return <div className={styles.wrapper}>에러!</div>
  if (loading) return <div className={styles.wrapper}>로딩중...</div>
  if (data.me.__typename === 'MeError') {
    return (
      <div className={styles.wrapper}>
        {data.me.message}
        <Link href={ROUTES.LOGIN}>
          <a>로그인</a>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h1>email : {data.me.user.email}</h1>
      <h1>lastLoginAt : {data.me.user.lastLoginAt}</h1>
      <Button onClick={handleLogout}>로그아웃</Button>
      <AddItem />
      <TodoList />
      <AddTodoItem></AddTodoItem>
    </div>
  )
}

export default Index
