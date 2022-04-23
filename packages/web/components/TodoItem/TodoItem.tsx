import { useState, useEffect } from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import { Tag, Col, Row, Checkbox } from 'antd'
import dayjs from 'dayjs'
import { TodoStatus, Tag as TodoTag } from '@web/lib/graphql/types'
import styles from './TodoItem.module.scss'
import { gql } from '@apollo/client'
import { TodoItem_TodoItemFragment } from './TodoItem.generated'

interface Props {
  todo?: TodoItem_TodoItemFragment
}

const TodoItem = ({ todo }: Props) => {
  const { id, content, status, tags, dueDateTime } = todo
  const [isExpired, setExpired] = useState(false)
  const [checked, setChecked] = useState(status === TodoStatus.Completed)

  useEffect(() => {
    if (!dueDateTime) return
    setExpired(dayjs(dueDateTime).isBefore(dayjs()))
  }, [dueDateTime])

  useEffect(() => {
    setChecked(status === TodoStatus.Completed)
  }, [status])

  const onStatusChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <div className={styles.todoItem}>
      <Checkbox
        defaultChecked={status === TodoStatus.Completed}
        onChange={onStatusChange}
        style={{ marginRight: '0.8rem' }}
      />
      <Col>
        <Row
          className={styles.content}
          data-checked={checked ? 'true' : 'false'}
        >
          {content}
        </Row>
        {!!dueDateTime && isExpired ? (
          <Row align="middle">
            <CalendarOutlined style={{ marginRight: '0.5rem', color: 'red' }} />
            <span
              className={styles.dueDateTime}
              data-checked={checked ? 'true' : 'false'}
              style={{ color: 'red' }}
            >
              {dayjs(dueDateTime).format('ddd MMM D, YYYY')}
            </span>
          </Row>
        ) : (
          <Row align="middle">
            <CalendarOutlined style={{ marginRight: '0.5rem' }} />
            <span
              className={styles.dueDateTime}
              data-checked={checked ? 'true' : 'false'}
            >
              {dayjs(dueDateTime).format('ddd MMM D, YYYY')}
            </span>
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

TodoItem.fragments = {
  todoItem: gql`
    fragment TodoItem_TodoItem on TodoItem {
      id
      content
      status
      dueDateTime
      tags {
        id
        name
      }
    }
  `,
}

export default TodoItem
