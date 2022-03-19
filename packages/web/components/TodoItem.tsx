import { CalendarToday, LocalOfferRounded } from '@mui/icons-material'
import { Checkbox } from 'antd'
import styles from './TodoItem.module.scss'

interface Props {
  name: string
}

const TodoItem: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.todoItem}>
      <Checkbox />
      <div>
        <div>{name}</div>
        <div>
          <div>
            <CalendarToday />
            Tomorrow
          </div>
          <div>
            <LocalOfferRounded />
            Tag1
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
