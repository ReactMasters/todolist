/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'antd'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { FormEventHandler, useCallback } from 'react'

import { gql, useApolloClient, useReactiveVar } from '@apollo/client'
import { MESSAGES, TOKEN_KEY } from '@web/lib/constant'

import styles from './index.module.scss'
import Email from './Email'
import { useLoginMutation } from './index.generated'
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

interface Props {
  type: 'login' | 'signup'
}
const AuthForm = ({ type }: Props) => {
  const clinet = useApolloClient()
  const router = useRouter()
  const [login] = useLoginMutation()
  const loading = useReactiveVar(loginLoadingVar)
  const handleSubmit = useCallback<FormEventHandler>(async (e) => {
    e.preventDefault()
    if (loginLoadingVar()) return alert(MESSAGES.MUTATION_LOADING)
    loginLoadingVar(true)
    if (type === 'login') {
      const { data } = await login({
        variables: {
          loginInput: {
            email: emailVar(),
            password: passwordVar(),
          },
        },
      })
      if (data.login.__typename === 'LoginError') {
        loginLoadingVar(false)
        return alert(data.login.message)
      }
      Cookies.set(TOKEN_KEY, data.login.token)
      clinet.resetStore()
      emailVar('')
      passwordVar('')
      loginLoadingVar(false)
      router.replace('/')
    } else {
    }
  }, [])
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Email />
      <Password />
      <Button type="primary" htmlType="submit" disabled={loading}>
        로그인
      </Button>
      <Button htmlType="button">회원가입</Button>
    </form>
  )
}

AuthForm.mutation = {
  Login,
  SignUp,
}

export default AuthForm
