import {
  Add,
  LocalOffer,
  Today,
  Event,
  NextWeek,
  CalendarToday,
} from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import styles from './AddTodoItem.module.scss'

const AddTodoItem = () => {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const toggleAddingTask = () => {
    setIsAddingTask(!isAddingTask)
  }

  const onClickCalendarIcon: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation()
    setShowCalendarMenu(true)
  }

  const renderAddTaskContent = () => {
    if (!isAddingTask) {
      return (
        <>
          <Add></Add>
          <span className={styles.addTodoItemText}>Add a task</span>
        </>
      )
    }
    if (!showCalendarMenu) {
      return (
        <>
          <TextField
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          ></TextField>
          <Today onClick={onClickCalendarIcon} />
          <LocalOffer />
        </>
      )
    }
    if (selectedDate) {
      return (
        <>
          <span>Due</span>
          <Button>Done</Button>
          <div>
            <Today></Today>
            <span>Today</span>
          </div>
          <div>
            <Event></Event>
            <span>Tomorrow</span>
          </div>
          <div>
            <NextWeek></NextWeek>
            <span>Next Week</span>
          </div>
          <div>
            <CalendarToday></CalendarToday>
            <span>Pick a date</span>
          </div>
        </>
      )
    } else {
      ;<>
        <span>Tags</span>
      </>
    }
  }

  return (
    <Button
      onClick={toggleAddingTask}
      className={styles.addTodoItem}
      size="large"
      variant="contained"
    >
      {renderAddTaskContent()}
    </Button>
  )
}

export default AddTodoItem
