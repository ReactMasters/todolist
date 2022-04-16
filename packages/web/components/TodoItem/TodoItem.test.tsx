import { render, screen } from '@testing-library/react'
import '@web/__mocks__/matchMedia.mock'
import TodoItem from './TodoItem'
import { TodoStatus } from '@web/lib/graphql/types'

describe('tests TodoItem component', () => {
  const props = {
    id: '1',
    content: 'Yunyoung is watching me',
    status: TodoStatus.Completed,
    tags: [
      {
        id: '10',
        createdAt: '0000',
        updatedAt: '0000',
        name: 'Tag1',
        owner: {
          id: '100',
          createdAt: '0000',
          updatedAt: '0000',
          email: 'test@test.com',
        },
      },
    ],
    dueDateTime: '2022-04-04T16:00:00.000Z',
  }
  const dateDisplayed = 'Tue Apr 5, 2022'
  it('tests TodoItem renders without crashing', () => {
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(props.content)).toBeInTheDocument()
  })
  it('status에 따라 checkbox.isChecked가 결정된다.', () => {
    props.status = TodoStatus.Completed
    render(<TodoItem {...props}></TodoItem>)
    // TODO: 체크박스를 가리킬 명칭을 아직 안정함
    // expect(screen.getByLabelText('')).toBeChecked()
    props.status = TodoStatus.InProgress
    // expect(screen.getByLabelText('')).not.toBeChecked()
  })
  it('dueDateTime이 있을 경우, 만료일이 MMM D, YYYY 형식으로 표시된다.', () => {
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(dateDisplayed)).toBeInTheDocument()
  })
  it('dueDateTime이 만료됐을 경우, 아이콘과 날짜 표시가 빨간색으로 표시된다.', () => {
    render(<TodoItem {...props}></TodoItem>)
    const styleRed = `color: red`
    expect(screen.getByText(dateDisplayed)).toHaveStyle(styleRed)
  })
  it('tags 목록 내 TodoTag 아이템이 모두 표시된다.', () => {
    props.tags.push({
      id: '11',
      createdAt: '0000',
      updatedAt: '0000',
      name: 'Tag2',
      owner: {
        id: '101',
        createdAt: '0000',
        updatedAt: '0000',
        email: 'test@test.com',
      },
    })
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(props.tags[0]?.name)).toBeInTheDocument()
    expect(screen.getByText(props.tags[1]?.name)).toBeInTheDocument()
  })
  it('체크되었을 경우, Strikethrough 스타일을 적용한다.', () => {
    props.status = TodoStatus.Completed
    render(<TodoItem {...props}></TodoItem>)
    const styleStrikeThrough = `text-decoration: line-through`
    expect(screen.getByText(props.content)).toHaveStyle(styleStrikeThrough)
    expect(screen.getByText(dateDisplayed)).toHaveStyle(styleStrikeThrough)
  })
  it('체크 해제되었을 경우, Strikethrough 스타일을 해제한다.', () => {
    props.status = TodoStatus.InProgress
    render(<TodoItem {...props}></TodoItem>)
    const styleStrikeThrough = `text-decoration: line-through`
    expect(screen.getByText(props.content)).not.toHaveStyle(styleStrikeThrough)
    expect(screen.getByText(dateDisplayed)).not.toHaveStyle(styleStrikeThrough)
  })
  it('dueDateTime 정보만 없을 경우, content와 tags만 표시된다.', () => {
    if (props.dueDateTime) delete props.dueDateTime
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(props.content)).toBeInTheDocument()
    expect(screen.getByText(dateDisplayed)).not.toBeInTheDocument()
  })
  it('tags 정보만 없을 경우, content와 dueDateTime만 표시된다.', () => {
    if (!props.dueDateTime) {
      props.dueDateTime = '2022-04-04T16:00:00.000Z'
    }
    if (props.tags) delete props.tags
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(props.content)).toBeInTheDocument()
    expect(screen.getByText(dateDisplayed)).toBeInTheDocument()
    // TODO: 태그 엘리먼트를 가리킬 명칭을 아직 안정함
    // expect(screen.getByText()).not.toBeInTheDocument()
  })
  it('dueDateTime과 tags 모두 없을 경우, content만 표시된다.', () => {
    if (props.dueDateTime) delete props.dueDateTime
    if (props.tags) delete props.tags
    render(<TodoItem {...props}></TodoItem>)
    expect(screen.getByText(props.content)).toBeInTheDocument()
    expect(screen.getByText(dateDisplayed)).not.toBeInTheDocument()
    // TODO: 태그 엘리먼트를 가리킬 명칭을 아직 안정함
    // expect(screen.getByText()).not.toBeInTheDocument()
  })
})
