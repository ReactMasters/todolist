import { fireEvent, render, screen } from '@testing-library/react'
import AddTodoHeading from './AddTodoHeading'

describe('tests AddTodoHeading component', () => {
  it('tests AddTodoHeading renders without crashing', () => {
    const props = {
      left: 'left',
      onClickLeft: jest.fn(),
      title: 'title',
      onClickTitle: jest.fn(),
      right: 'right',
      onClickRight: jest.fn(),
    }
    render(<AddTodoHeading {...props}></AddTodoHeading>)
    expect(screen.getByText(props.left)).toBeInTheDocument()
    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.right)).toBeInTheDocument()
  })

  it('tests AddTodoHeading click event callbacks', () => {
    const props = {
      left: 'left',
      onClickLeft: jest.fn(),
      title: 'title',
      onClickTitle: jest.fn(),
      right: 'right',
      onClickRight: jest.fn(),
    }
    render(<AddTodoHeading {...props}></AddTodoHeading>)
    const left = screen.getByText(props.left)
    const title = screen.getByText(props.title)
    const right = screen.getByText(props.right)
    fireEvent.click(left)
    fireEvent.click(title)
    fireEvent.click(right)
    expect(props.onClickLeft).toHaveBeenCalledTimes(1)
    expect(props.onClickRight).toHaveBeenCalledTimes(1)
    expect(props.onClickTitle).toHaveBeenCalledTimes(1)
  })
})
