import { PlusOutlined, TagOutlined, CalendarOutlined } from '@ant-design/icons'
import { getDayFromToday, includeDate } from '@web/utils/dateUtil'
import { genMockTags } from '@web/utils/mockUtil'
import { Tag, Collapse, Typography, Input } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

import AddTodoHeading from '../AddTodoHeading/AddTodoHeading'
import DatePicker from '../DatePicker'
import tagColors from '../TagBar/tagColors'
import TagOption from '../TagOption/TagOption'
import styles from './AddTodoItem.module.scss'

enum AddTodoItemPage {
  TODO_TITLE,
  TODO_DATE,
  TODO_TAG,
}

const AddTodoItem = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [finalSelectedDate, setFinalSelectedDate] = useState(null)
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(AddTodoItemPage.TODO_DATE)
  const [tags, setTags] = useState(genMockTags(5))
  const [selectedTags, setSelectedTags] = useState([])
  const [finalSelectedTags, setFinalSelectedTags] = useState([])

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
    setSelectedDate(null)
  }

  const deleteTag = (tag) => {
    setFinalSelectedTags(
      finalSelectedTags.filter((selected) => selected.name !== tag.name)
    )
  }

  const onToggleAccordion = (key) => {
    setIsAddingTask(key === '1')
  }

  const renderTagChips = () => {
    return finalSelectedTags.map((tag, index) => (
      <Tag
        key={tag.name}
        className={styles.tag}
        color={tagColors[index % tagColors.length]}
        closable
        onClose={() => deleteTag(tag)}
      >
        <span>{tag.name}</span>
      </Tag>
    ))
  }

  const renderDateOption = (daysFromToday: number, label: string) => {
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
        <Typography.Text className={styles.dateLabel}>{label}</Typography.Text>
        <span className={styles.dayName}>{date.format('ddd')}</span>
      </div>
    )
  }

  const renderAddTaskContent = () => {
    if (currentPage === AddTodoItemPage.TODO_TITLE) {
      const formattedDate = dayjs(finalSelectedDate).format('ddd, MMM D')
      const dateButton = finalSelectedDate ? (
        <Tag
          color={tagColors[0]}
          className={styles.tag}
          onClick={onClickCalendarIcon}
          icon={<CalendarOutlined className={styles.tagIcon} />}
          closable
          onClose={resetDateValues}
        >
          <span className={styles.tagLabel}>Due {formattedDate}</span>
        </Tag>
      ) : (
        <CalendarOutlined
          className={styles.todayIcon}
          onClick={onClickCalendarIcon}
        />
      )
      return (
        <div className={styles.editorWrapper}>
          <PlusOutlined className={styles.gridPlus} />
          <Input
            className={`${styles.gridTitle}`}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div className={styles.gridFiller}></div>
          <div className={styles.gridBtns}>
            {dateButton}
            {renderTagChips()}
            <TagOutlined onClick={onClickTagIcon} />
          </div>
        </div>
      )
    }

    if (currentPage === AddTodoItemPage.TODO_DATE) {
      const openDatePicker = () => {
        setDatePickerOpen((prev) => !prev)
      }

      const onDatePickerChange = (date) => {
        setSelectedDate(date)
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
          {renderDateOption(0, 'Today')}
          {renderDateOption(1, 'Tomorrow')}
          {renderDateOption(7, 'Next Week')}
          <div
            style={{
              background: isCustomDateSelected ? 'lightpink' : 'white',
            }}
            onClick={openDatePicker}
            className={styles.dateOption}
          >
            <Typography.Text className={styles.dateLabel}>
              {customDateString}
            </Typography.Text>
            <DatePicker
              open={datePickerOpen}
              onChange={onDatePickerChange}
              style={{
                position: 'relative',
                left: '-10rem',
                top: '-1rem',
                visibility: 'hidden',
                width: 0,
                height: 0,
              }}
            />
          </div>
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PlusOutlined className={styles.plusIcon} />
          <span className={styles.addTodoItemText}>Add a task</span>
        </div>
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
          color={tagColors[index % tagColors.length]}
          name={tag.name}
        />
      )
    })
  }

  return (
    <Collapse
      accordion
      bordered={false}
      onChange={onToggleAccordion}
      className={`${styles.addTodoItem} ${
        isAddingTask ? styles.accordionActive : ''
      }`}
    >
      <Collapse.Panel
        showArrow={false}
        header={renderAccordionSummary()}
        key="1"
      >
        {renderAddTaskContent()}
      </Collapse.Panel>
    </Collapse>
  )
}

export default AddTodoItem
