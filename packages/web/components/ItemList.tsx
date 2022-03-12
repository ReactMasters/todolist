import { useReactiveVar } from '@apollo/client'
import localStates from '@web/lib/apollo/localStates'

import TodoItem from '@web/components/TodoItem/TodoItem'

const ItemList = () => {
  const selectedItems = useReactiveVar(localStates.selectedItems)

  return (
    <div>
      {selectedItems.map((name, index) => (
        <TodoItem key={index} name={name} />
      ))}
    </div>
  )
}

export default ItemList
