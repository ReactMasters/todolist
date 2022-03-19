import { useRouter } from 'next/router'

import { gql } from '@apollo/client'
import Layout from '@web/components/Layout'

import LoginHeader from './components/LoginHeader'
import styles from './index.module.scss'
import { useLoginPageQuery } from './index.page.generated'
import LoginForm from './components/LoginForm'

type Props = {}

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

const LoginPage = (props: Props) => {
  const router = useRouter()
  const { data, loading } = useLoginPageQuery()

  if (!data || loading) return <div>로딩중...</div>

  if (data.me.__typename === 'MeSuccess') {
    router.replace('/')
    return null
  }

  return (
    <Layout title="로그인" className={styles.wrapper}>
      <LoginHeader />
      <LoginForm />
    </Layout>
  )
}

export default LoginPage
