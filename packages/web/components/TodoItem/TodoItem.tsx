import { CalendarOutlined } from '@ant-design/icons'
import { Tag, Col, Row, Checkbox } from 'antd'
import dayjs from 'dayjs'
import { TodoStatus, Tag as TodoTag } from '@web/lib/graphql/types'
import styles from './TodoItem.module.scss'

interface Props {
  id: string
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
      <Checkbox
        checked={status === TodoStatus.Completed}
        style={{ marginRight: '0.8rem' }}
      />
      <Col>
        <Row>{content}</Row>
        {dueDateTime && (
          <Row align="middle">
            <CalendarOutlined style={{ marginRight: '0.5rem' }} />
            <span>{dayjs(dueDateTime).format('ddd MMM D, YYYY')}</span>
          </Row>
        )}
        {tags && (
          <Row>
            <Col>
              {tags.map((tag) => (
                <Tag key={tag.id} closable={true}>
                  {tag.name}
                </Tag>
              ))}
            </Col>
          </Row>
        )}
      </Col>
    </div>
  )
}

export default TodoItem
