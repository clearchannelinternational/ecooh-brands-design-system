import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Button} from './Button'

describe('As a user I want to have a button', () => {
  it('should render a primary button', () => {
    const { container } = render(
      <Button mode="primary" />
    )
    expect(container).toMatchSnapshot()
  })
  it('should render a secondary button', () => {
    const { container } = render(
      <Button mode="secondary" />
    )
    expect(container).toMatchSnapshot()
  })
  it('should allow additional classes', () => {
    const { container } = render(
      <Button mode="secondary" classes="custom custom2"/>
    )
    expect(container).toMatchSnapshot()
  })
  it('should allow custom content', () => {
    const { container } = render(
      <Button mode="secondary" >button test</Button>
    )
    expect(container).toMatchSnapshot()
  })
  it('should handle clicks', () => {
    const mockClick = jest.fn()
    render(
      <Button mode="secondary" onClick={mockClick}>button test</Button>
    )
    userEvent.click(screen.getByRole("button"))
    expect(mockClick).toHaveBeenCalled()
  })
})
