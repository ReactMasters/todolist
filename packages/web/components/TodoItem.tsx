import { CalendarToday } from '@mui/icons-material'
import { Checkbox, Tag } from 'antd'
import { TodoStatus, Tag as TodoTag } from '@web/lib/graphql'
import styles from './TodoItem.module.scss'

interface Props {
  id: number
  content: string
  status: TodoStatus
  tags?: TodoTag[]
  dueDateTime?: string
}

const TodoItem: React.FC<Props> = ({
  id,
  content,
  status,
  tags,
  dueDateTime,
}) => {
  return (
    <div className={styles.todoItem}>
      <Checkbox className={styles.checkBox} />
      <div>
        <div>{content}</div>
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
