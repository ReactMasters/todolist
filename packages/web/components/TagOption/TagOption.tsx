import { Typography } from '@mui/material'
import React from 'react'
import styles from './TagOption.module.scss'

type Props = {
  color: string
  name: string
  isActive: boolean
  onClick?: () => void
}

// TODO: use colors from a custom theme when a new UI library is decided.
export const tagOptionColors = {
  inactive: {
    checkbox: {
      border: '#9990A1',
      backgroundColor: '#FFF',
    },
    label: {
      color: '#9990A1',
    },
  },
  active: {
    label: {
      color: '#000',
    },
  },
}

const TagOption = ({ color, name, isActive, onClick = () => {} }: Props) => {
  const checkboxStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '12px',
    border: `solid 2px ${
      isActive ? color : tagOptionColors.inactive.checkbox.border
    }`,
    backgroundColor: `${
      isActive ? color : tagOptionColors.inactive.checkbox.backgroundColor
    }`,
    marginRight: '5px',
  }
  const labelStyle = {
    color: `${
      isActive
        ? tagOptionColors.active.label.color
        : tagOptionColors.inactive.label.color
    }`,
    fontSize: '15px',
  }
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <div data-testid="checkbox" style={checkboxStyle}></div>
      <Typography data-testid="label" style={labelStyle}>
        {name}
      </Typography>
    </div>
  )
}

export default TagOption
