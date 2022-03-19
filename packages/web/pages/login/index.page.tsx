import { gql } from '@apollo/client'
import { APP_TITLE } from '@web/lib/constant'
import { useRouter } from 'next/router'

import styles from './index.module.scss'
import { useLoginPageQuery } from './index.page.generated'

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
  const { data } = useLoginPageQuery()

  if (data?.me?.__typename === 'MeSuccess') {
    // 이미 로그인됨
    router.replace('/')
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{APP_TITLE}</h1>
      <input type="text" />
      <input type="text" />
      <button>로그인</button>
      <button>회원가입</button>
    </div>
  )
}

export default LoginPage
