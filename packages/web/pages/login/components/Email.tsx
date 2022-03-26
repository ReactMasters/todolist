import React, { ChangeEventHandler, useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { emailVar } from '../index.state'

type Props = {}

const Email = (props: Props) => {
  const email = useReactiveVar(emailVar)
  const handleEmailChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      emailVar(e.target.value)
    },
    []
  )
  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} />
    </div>
  )
}

export default Email
