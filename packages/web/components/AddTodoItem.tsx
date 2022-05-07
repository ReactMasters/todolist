import {
  Add,
  CalendarToday,
  Event,
  LocalOfferOutlined,
  NextWeek,
  Today,
  TodayOutlined,
} from '@mui/icons-material'
import { Tag } from 'antd'
import { DatePicker } from '@mui/lab'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  colors,
  Icon,
  TextField,
  Typography,
} from '@mui/material'
import { getDayFromToday, includeDate } from '@web/utils/dateUtil'
import { genMockTags } from '@web/utils/mockUtil'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import AddTodoHeading from './AddTodoHeading/AddTodoHeading'
import styles from './AddTodoItem.module.scss'
import TagOption from './TagOption/TagOption'

enum AddTodoItemPage {
  TODO_TITLE,
  TODO_DATE,
  TODO_TAG,
}

const AddTodoItem = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [datePickerDate, setDatePickerDate] = useState(null)
  const [finalSelectedDate, setFinalSelectedDate] = useState(null)
  const datePickerRef = useRef<HTMLInputElement | null>(null)
  const [currentPage, setCurrentPage] = useState(AddTodoItemPage.TODO_DATE)
  const [tags, setTags] = useState(genMockTags(5))
  const [selectedTags, setSelectedTags] = useState([])
  const [finalSelectedTags, setFinalSelectedTags] = useState([])

  const tempRandomColors = useRef(
    Object.keys(colors)
      .filter((colorGroup) => colorGroup !== 'common')
      .sort(() => Math.random() - 0.5)
  ).current

  useEffect(() => {
    if (!isAddingTask) {
      setCurrentPage(AddTodoItemPage.TODO_TITLE)
      resetDateValues()
      setTaskTitle('')
    }
  }, [isAddingTask])

  useEffect(() => {
    setSelectedTags([...finalSelectedTags])
  }, [finalSelectedTags])

  const isCustomDateSelected =
    selectedDate &&
    !includeDate(selectedDate, [
      getDayFromToday(0),
      getDayFromToday(1),
      getDayFromToday(7),
    ])

  const customDateString = isCustomDateSelected
    ? dayjs(selectedDate).format('YYYY/MM/DD')
    : 'Pick a date'

  const onClickCalendarIcon = () => {
    setCurrentPage(AddTodoItemPage.TODO_DATE)
  }

  const onClickTagIcon = () => {
    setCurrentPage(AddTodoItemPage.TODO_TAG)
  }

  const resetDateValues = () => {
    setFinalSelectedDate(null)
    setDatePickerDate(null)
    setSelectedDate(null)
  }

  const deleteTag = (tag) => {
    setFinalSelectedTags(
      finalSelectedTags.filter((selected) => selected.name !== tag.name)
    )
  }

  const onToggleAccordion = (e, expanded) => {
    setIsAddingTask(expanded)
  }

  const renderTagChips = () => {
    return finalSelectedTags.map((tag, index) => (
      <Tag
        key={tag.name}
        className={styles.tag}
        color={colors[tempRandomColors[index % tempRandomColors.length]][100]}
        closable
        onClose={() => deleteTag(tag)}
      >
        <span>{tag.name}</span>
      </Tag>
    ))
  }

  const renderDateOption = (
    daysFromToday: number,
    label: string,
    IconComponent: typeof Icon
  ) => {
    const date = getDayFromToday(daysFromToday)
    return (
      <div
        style={{
          background: date.isSame(selectedDate, 'day') ? 'lightpink' : 'white',
        }}
        onClick={() => {
          setSelectedDate(date)
        }}
        className={styles.dateOption}
      >
        <IconComponent className={styles.dateIcon}></IconComponent>
        <Typography variant="h6">{label}</Typography>
        <Typography className={styles.dayName}>{date.format('ddd')}</Typography>
      </div>
    )
  }

  const renderAddTaskContent = () => {
    if (currentPage === AddTodoItemPage.TODO_TITLE) {
      const formattedDate = dayjs(finalSelectedDate).format('ddd, MMM D')
      const dateButton = finalSelectedDate ? (
        <Tag
          color={colors[tempRandomColors[0]][100]}
          className={styles.tag}
          onClick={onClickCalendarIcon}
          icon={<TodayOutlined className={styles.tagIcon} />}
          closable
          onClose={resetDateValues}
        >
          <span className={styles.tagLabel}>Due {formattedDate}</span>
        </Tag>
      ) : (
        <Today className={styles.todayIcon} onClick={onClickCalendarIcon} />
      )
      return (
        <div className={styles.editorWrapper}>
          <Add className={styles.gridPlus}></Add>
          <TextField
            className={`${styles.gridTitle}`}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div className={styles.gridFiller}></div>
          <div className={styles.gridBtns}>
            {dateButton}
            {renderTagChips()}
            <LocalOfferOutlined onClick={onClickTagIcon} />
          </div>
        </div>
      )
    }

    if (currentPage === AddTodoItemPage.TODO_DATE) {
      const okButton = (
        <Typography onClick={() => setSelectedDate(datePickerDate)}>
          Ok
        </Typography>
      )
      const cancelButton = (
        <Typography onClick={() => setDatePickerDate(selectedDate)}>
          Cancel
        </Typography>
      )

      const renderInput = (params) => (
        <TextField sx={{ display: 'none' }} {...params} />
      )
      const onPickDate = (newDate) => {
        setDatePickerDate(newDate)
      }

      const openDatePicker = () => {
        datePickerRef.current.click()
      }

      return (
        <div className={`${styles.col} ${styles.selectDateWrapper}`}>
          <AddTodoHeading
            title="Due"
            onClickRight={() => {
              setFinalSelectedDate(selectedDate)
              setCurrentPage(AddTodoItemPage.TODO_TITLE)
            }}
            right="Done"
          />
          {renderDateOption(0, 'Today', Today)}
          {renderDateOption(1, 'Tomorrow', Event)}
          {renderDateOption(7, 'Next Week', NextWeek)}
          <div
            style={{
              background: isCustomDateSelected ? 'lightpink' : 'white',
            }}
            onClick={openDatePicker}
            className={styles.dateOption}
          >
            <CalendarToday className={styles.dateIcon}></CalendarToday>
            <Typography variant="h6">{customDateString}</Typography>
          </div>
          <DatePicker
            inputRef={datePickerRef}
            value={datePickerDate}
            onChange={onPickDate}
            okText={okButton}
            cancelText={cancelButton}
            renderInput={renderInput}
          />
        </div>
      )
    }

    if (currentPage === AddTodoItemPage.TODO_TAG) {
      return (
        <div>
          <AddTodoHeading
            left="Edit"
            title="Tags"
            onClickRight={() => {
              setFinalSelectedTags([...selectedTags])
              setCurrentPage(AddTodoItemPage.TODO_TITLE)
            }}
            right="Done"
          />
          {renderTags()}
        </div>
      )
    }
  }

  const renderAccordionSummary = () => {
    if (!isAddingTask) {
      return (
        <>
          <div className={styles.plusIcon}>
            <Add></Add>
          </div>
          <Typography className={styles.addTodoItemText}>Add a task</Typography>
        </>
      )
    }
  }

  const renderTags = () => {
    return tags.map((tag, index) => {
      const isActive = selectedTags.find(
        (currentTag) => currentTag.name === tag.name
      )
      let newSelectedTags = [...selectedTags]
      const onClickTagOption = () => {
        if (isActive) {
          newSelectedTags = newSelectedTags.filter(
            (selectedTag) => selectedTag.name !== tag.name
          )
        } else {
          newSelectedTags.push(tag)
        }
        setSelectedTags(newSelectedTags)
      }

      return (
        <TagOption
          onClick={onClickTagOption}
          isActive={isActive}
          key={tag.name}
          color={colors[tempRandomColors[index % tempRandomColors.length]][100]}
          name={tag.name}
        ></TagOption>
      )
    })
  }

  return (
    <Accordion
      onChange={onToggleAccordion}
      className={`${styles.addTodoItem} ${
        isAddingTask ? styles.accordionActive : ''
      }`}
    >
      <AccordionSummary className={styles.addTodoItemButton}>
        {renderAccordionSummary()}
      </AccordionSummary>
      <AccordionDetails className={styles.addTodoItemContent}>
        {renderAddTaskContent()}
      </AccordionDetails>
    </Accordion>
  )
}

export default AddTodoItem
