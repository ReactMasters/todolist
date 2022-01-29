import React, { useCallback, useState } from 'react'

import { useReactiveVar } from '@apollo/client'

import localStates from '../lib/apollo/localStates'

const AddItem = () => {
  const [name, setName] = useState('')
  const selectedItems = useReactiveVar(localStates.selectedItems)
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setName(e.target.value), [])
  const handleAddItem: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const _selectedItems = selectedItems.slice()
    _selectedItems.push(name)
    localStates.selectedItems(_selectedItems)
    setName('')
  }
  return (
    <form onSubmit={handleAddItem}>
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="submit">추가</button>
    </form>
  )
}

export default AddItem
