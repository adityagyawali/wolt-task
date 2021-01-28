import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders Helsinki button element', () => {
  render(<App />)
  const linkElement = screen.getByText(/Helsinki/i)
  expect(linkElement).toBeInTheDocument()
})
