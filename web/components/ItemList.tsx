import { useReactiveVar } from '@apollo/client'

import localStates from '../lib/apollo/localStates'

const ItemList = () => {
  const selectedItems = useReactiveVar(localStates.selectedItems)

  return (
    <div>
      {selectedItems.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  )
}

export default ItemList
