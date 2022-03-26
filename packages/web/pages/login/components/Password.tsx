import React, { ChangeEventHandler, useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { passwordVar } from '../index.state'
import { Input } from 'antd'

const Password = () => {
  const password = useReactiveVar(passwordVar)
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      passwordVar(e.target.value)
    },
    []
  )
  return <Input type="password" value={password} onChange={handleChange} />
}

export default Password
