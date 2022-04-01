import { render, screen } from '@testing-library/react'
import TagOption, { tagOptionColors } from './TagOption'
import Color from 'color'

describe('tests TagOptions component', () => {
  it('tests if TagOption renders without crashing', () => {
    const props = {
      color: '#555',
      name: 'tag option name',
      isActive: true,
    }
    render(<TagOption {...props}></TagOption>)
    expect(screen.getByText(props.name)).toBeInTheDocument()
  })

  it('tests inactive style is properly applied', () => {
    const props = {
      color: '#555',
      name: 'tag option name',
      isActive: false,
    }
    render(<TagOption {...props}></TagOption>)
    const checkbox = screen.getByTestId('checkbox')
    const label = screen.getByTestId('label')

    const renderedBorderColor = Color(checkbox.style.borderColor).hex()
    const expectedBorderColor = Color(
      tagOptionColors.inactive.checkbox.border
    ).hex()
    expect(renderedBorderColor).toEqual(expectedBorderColor)

    const renderedLabelColor = Color(label.style.color).hex()
    const expectedLabelColor = Color(tagOptionColors.inactive.label.color).hex()
    expect(renderedLabelColor).toEqual(expectedLabelColor)
  })
})
