import { gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { APP_TITLE } from '@web/lib/constant'
import styles from './index.module.scss'
import { useSignupPageMutation } from './index.page.generated'

type Props = {}

export const mutation = gql`
  mutation SignupPage($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      __typename
      ... on CreateUserError {
        message
      }
      ... on CreateUserSuccess {
        user {
          id
        }
        token
      }
    }
  }
`

const SignupPage = (props: Props) => {
  const router = useRouter()
  const [signupPageMutation, { error, data }] = useSignupPageMutation()

  if (data?.createUser?.__typename === 'CreateUserSuccess') {
    // 가입 완료
    router.replace('/')
    return null
  }

  return (
    <div>
      <h1 className={styles.title}>{APP_TITLE}</h1>
      <input type="text" />
      <input type="text" />
      <button>SIGN UP</button>
    </div>
  )
}
export default SignupPage
