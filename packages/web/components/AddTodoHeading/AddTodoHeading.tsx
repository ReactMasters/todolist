import { Typography } from 'antd'
import React from 'react'

import styles from './AddTodoHeading.module.scss'

interface Props {
  left?: string | React.ReactNode
  onClickLeft?: () => void
  title: string | React.ReactNode
  onClickTitle?: () => void
  right?: string | React.ReactNode
  onClickRight?: () => void
}

const AddTodoHeading = ({
  left,
  onClickLeft,
  title,
  onClickTitle,
  right,
  onClickRight,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <Typography.Text onClick={onClickLeft}>{left}</Typography.Text>
      </div>
      <div className={styles.titleWrapper}>
        <Typography.Title
          onClick={onClickTitle}
          level={4}
          className={styles.title}
        >
          {title}
        </Typography.Title>
      </div>
      <div className={styles.rightWrapper}>
        <Typography.Title
          onClick={onClickRight}
          level={5}
          className={styles.right}
        >
          {right}
        </Typography.Title>
      </div>
    </div>
  )
}

export default AddTodoHeading
