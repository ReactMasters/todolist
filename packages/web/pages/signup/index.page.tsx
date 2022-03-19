import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Typography, Input, Button } from 'antd'

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

  const onButtonClick = () => {
    router.replace('/')
    return null
  }

  if (data?.createUser?.__typename === 'CreateUserSuccess') {
    // 가입 완료
    router.replace('/')
    return null
  }

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={2}>{APP_TITLE}</Typography.Title>
      <Input
        type="text"
        placeholder="Email"
        style={{ marginBottom: '0.8rem' }}
      />
      <Input
        type="text"
        placeholder="Password"
        style={{ marginBottom: '1.6rem' }}
      />
      <Button
        type="primary"
        onClick={onButtonClick}
        style={{ marginBottom: '0.8rem' }}
      >
        <a>SIGN UP</a>
      </Button>
      <Link href="/login">Already have an account?</Link>
    </div>
  )
}
export default SignupPage
