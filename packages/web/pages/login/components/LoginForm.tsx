/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEventHandler, useCallback } from 'react'
import Cookies from 'js-cookie'
import { gql, useApolloClient, useReactiveVar } from '@apollo/client'
import { MESSAGES, TOKEN_KEY } from '@web/lib/constant'

import { emailVar, loginLoadingVar, passwordVar } from '../index.state'
import Email from './Email'
import { useLoginMutation } from './LoginForm.generated'
import Password from './Password'
import { useRouter } from 'next/router'

export const query = gql`
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

const LoginForm = () => {
  const clinet = useApolloClient()
  const router = useRouter()
  const [login] = useLoginMutation()
  const loading = useReactiveVar(loginLoadingVar)
  const handleSubmit = useCallback<FormEventHandler>(async (e) => {
    e.preventDefault()
    if (loginLoadingVar()) return alert(MESSAGES.MUTATION_LOADING)
    loginLoadingVar(true)
    const email = emailVar()
    const password = passwordVar()
    const { data } = await login({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    })

    if (data.login.__typename === 'LoginError') {
      loginLoadingVar(false)
      return alert(data.login.message)
    }

    Cookies.set(TOKEN_KEY, data.login.token)
    clinet.resetStore()
    loginLoadingVar(false)
    router.replace('/')
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Email />
        <Password />
        <button type="submit" disabled={loading}>
          로그인
        </button>
      </form>
      <button type="button">회원가입</button>
    </div>
  )
}

export default LoginForm
