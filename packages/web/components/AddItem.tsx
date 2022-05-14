import { useReactiveVar } from '@apollo/client'
import localStates from '@web/lib/apollo/localStates'
import React, { useCallback, useState } from 'react'

import styles from './AddItem.module.scss'

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
    <form className={styles.form} onSubmit={handleAddItem}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <button className={styles.button} type="submit">
        추가
      </button>
    </form>
  )
}

export default AddItem
