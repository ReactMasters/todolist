import { Typography } from '@mui/material'
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
        <Typography onClick={onClickLeft}>{left}</Typography>
      </div>
      <div className={styles.titleWrapper}>
        <Typography
          onClick={onClickTitle}
          variant="h5"
          className={styles.title}
        >
          {title}
        </Typography>
      </div>
      <div className={styles.rightWrapper}>
        <Typography
          onClick={onClickRight}
          variant="h6"
          className={styles.right}
        >
          {right}
        </Typography>
      </div>
    </div>
  )
}

export default AddTodoHeading
