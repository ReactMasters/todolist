import { useReactiveVar } from '@apollo/client'
import { Input } from 'antd'
import React, { ChangeEventHandler, useCallback } from 'react'

import { emailVar } from './index.state'

const Email = () => {
  const email = useReactiveVar(emailVar)
  const handleEmailChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => emailVar(e.target.value),
    []
  )
  return <Input type="email" value={email} onChange={handleEmailChange} />
}

export default Email
