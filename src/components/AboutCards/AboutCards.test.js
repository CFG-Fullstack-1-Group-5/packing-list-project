import AboutCard from './AboutCards.js'
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test('should display without crashing', () => {
    render(<AboutCard />)
})

test('renders team member name', () => {
    render(<AboutCard />)
    const teamName = screen.getAllByRole("heading")
    expect(teamName).toHaveLength(1)
})