import React, { FormEventHandler, useCallback } from 'react'
import Email from './email'
import Password from './Password'

type Props = {}

const LoginForm = (props: Props) => {
  const handleSubmit = useCallback<FormEventHandler>((e) => {
    e.preventDefault()
    // todo login mutation and handling
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Email />
        <Password />
        <button type="submit">로그인</button>
      </form>
      <button type="button">회원가입</button>
    </div>
  )
}

export default LoginForm
