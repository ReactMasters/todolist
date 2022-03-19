import React, { ChangeEventHandler, useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { passwordVar } from '../index.state'

type Props = {}

const Password = (props: Props) => {
  const password = useReactiveVar(passwordVar)
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      passwordVar(e.target.value)
    },
    []
  )
  return (
    <div>
      <input type="password" value={password} onChange={handleChange} />
    </div>
  )
}

export default Password
