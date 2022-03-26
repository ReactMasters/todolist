import { Typography } from '@mui/material'
import { Box } from '@mui/system'
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
    <Box className={styles.wrapper}>
      <Box className={styles.leftWrapper}>
        <Typography onClick={onClickLeft}>{left}</Typography>
      </Box>
      <Box className={styles.titleWrapper}>
        <Typography
          onClick={onClickTitle}
          variant="h5"
          className={styles.title}
        >
          {title}
        </Typography>
      </Box>
      <Box className={styles.rightWrapper}>
        <Typography
          onClick={onClickRight}
          variant="h6"
          className={styles.right}
        >
          {right}
        </Typography>
      </Box>
    </Box>
  )
}

export default AddTodoHeading
