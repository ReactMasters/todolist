import { CalendarToday } from '@mui/icons-material'
import { Checkbox, Tag } from 'antd'
import styles from './TodoItem.module.scss'

interface Props {
  name: string
}

const TodoItem: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.todoItem}>
      <Checkbox className={styles.checkBox} />
      <div>
        <div>{name}</div>
        <div>
          <CalendarToday />
          <span>Tomorrow</span>
        </div>
        <div>
          <Tag closable={true}>Tag1</Tag>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
