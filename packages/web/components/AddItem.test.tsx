import { render, screen } from '@testing-library/react'
import AddItem from './AddItem'

describe('AddItem test', () => {
  it('should have button with "추가" text', async () => {
    render(<AddItem />)
    const Button = screen.getByText(`추가`)
    expect(Button).toBeInTheDocument()
  })
})
