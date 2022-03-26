import { useRouter } from 'next/router'

import { gql } from '@apollo/client'
import AuthForm from '@web/components/AuthForm'
import Layout from '@web/components/Layout'

import LoginHeader from './components/LoginHeader'
import styles from './index.module.scss'
import { useLoginPageQuery } from './index.page.generated'

export const query = gql`
  query LoginPage {
    me {
      __typename
      ... on MeError {
        message
      }
      ... on MeSuccess {
        user {
          id
          email
        }
      }
    }
  }
`

const LoginPage = () => {
  const router = useRouter()
  const { data, error, loading } = useLoginPageQuery()

  if (error) return <div>에러!</div>
  if (!data || loading) return <div>로딩중...</div>
  if (data.me.__typename === 'MeSuccess') {
    router.replace('/')
    return null
  }

  return (
    <Layout title="로그인" className={styles.wrapper}>
      <LoginHeader />
      <AuthForm type="login" />
    </Layout>
  )
}

export default LoginPage
