/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  gql,
  useApolloClient,
  useMutation,
  useReactiveVar,
} from '@apollo/client'
import { MESSAGES, ROUTES, TOKEN_KEY } from '@web/lib/constant'
import { LoginInput } from '@web/lib/graphql/types'
import { Button } from 'antd'
import Cookies from 'js-cookie'
import React, { FormEventHandler, useCallback } from 'react'

import Email from './Email'
import { LoginDocument, SignUpDocument } from './index.generated'
import styles from './index.module.scss'
import { emailVar, loginLoadingVar, passwordVar } from './index.state'
import Password from './Password'

const Login = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      ... on LoginSuccess {
        token
      }
      ... on LoginError {
        message
      }
    }
  }
`

const SignUp = gql`
  mutation SignUp($signUpInput: SignupInput!) {
    signup(signupInput: $signUpInput) {
      ... on SignupError {
        message
      }
      ... on SignupSuccess {
        user {
          id
          email
          lastLoginAt
        }
        token
      }
    }
  }
`

interface Props {
  type: 'login' | 'signup'
}
const AuthForm = ({ type }: Props) => {
  const client = useApolloClient()
  const router = useRouter()
  const [login] = useMutation(LoginDocument)
  const [signup] = useMutation(SignUpDocument)
  const loading = useReactiveVar(loginLoadingVar)

  const handleSubmit = useCallback<FormEventHandler>(async (e) => {
    e.preventDefault()

    if (loginLoadingVar()) return alert(MESSAGES.MUTATION_LOADING)
    loginLoadingVar(true)

    let token = ''

    const inputs: LoginInput = {
      email: emailVar(),
      password: passwordVar(),
    }
    if (type === 'login') {
      const { data } = await login({ variables: { loginInput: inputs } })
      if (data.login.__typename === 'LoginError') {
        loginLoadingVar(false)
        return alert(data.login.message)
      }
      token = data.login.token
    } else {
      const { data } = await signup({ variables: { signUpInput: inputs } })
      if (data.signup.__typename === 'SignupError') {
        loginLoadingVar(false)
        return alert(data.signup.message)
      }
      token = data.signup.token
    }

    Cookies.set(TOKEN_KEY, token)
    emailVar('')
    passwordVar('')
    loginLoadingVar(false)
    client.resetStore()
    router.replace('/')
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Email />
      <Password />
      <Button type="primary" htmlType="submit" disabled={loading}>
        {type === 'login' ? 'Sign in' : 'Sign up'}
      </Button>
      {type === 'login' ? (
        <Button htmlType="button" onClick={() => router.push(ROUTES.SIGNUP)}>
          Sign up
        </Button>
      ) : (
        <Link href={ROUTES.LOGIN}>
          <a>Already have an account?</a>
        </Link>
      )}
    </form>
  )
}

AuthForm.mutation = {
  Login,
  SignUp,
}

export default AuthForm
