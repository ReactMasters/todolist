import React, { ChangeEventHandler, useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { emailVar } from './index.state'
import { Input } from 'antd'

const Email = () => {
  const email = useReactiveVar(emailVar)
  const handleEmailChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => emailVar(e.target.value),
    []
  )
  return <Input type="email" value={email} onChange={handleEmailChange} />
}

export default Email