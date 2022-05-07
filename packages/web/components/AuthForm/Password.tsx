import { useReactiveVar } from '@apollo/client'
import { Input } from 'antd'
import React, { ChangeEventHandler, useCallback } from 'react'

import { passwordVar } from './index.state'

const Password = () => {
  const password = useReactiveVar(passwordVar)
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => passwordVar(e.target.value),
    []
  )
  return <Input type="password" value={password} onChange={handleChange} />
}

export default Password
