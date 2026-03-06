import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the keyboard', () => {
  render(<App />)
  // h, j, k, l are always present as core vim navigation keys
  expect(screen.getAllByText('h').length).toBeGreaterThan(0)
  expect(screen.getAllByText('j').length).toBeGreaterThan(0)
  expect(screen.getAllByText('k').length).toBeGreaterThan(0)
  expect(screen.getAllByText('l').length).toBeGreaterThan(0)
})

test('renders layout selector', () => {
  render(<App />)
  expect(screen.getByText('Qwerty')).toBeInTheDocument()
})

test('renders lesson level selector', () => {
  render(<App />)
  expect(screen.getByText('Full Layout')).toBeInTheDocument()
})
