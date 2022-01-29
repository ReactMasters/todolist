import { useReactiveVar } from '@apollo/client'
import localStates from '@web/lib/apollo/localStates'

import Item from './Item'

const ItemList = () => {
  const selectedItems = useReactiveVar(localStates.selectedItems)

  return (
    <div>
      {selectedItems.map((name, index) => (
        <Item key={index} name={name} />
      ))}
    </div>
  )
}

export default ItemList
