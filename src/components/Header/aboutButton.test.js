import { render, screen } from '@testing-library/react'
import Header from '../components/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";


it('should render a button with the class of About', () => {
    render(
        <Router>
            <Header />
        </Router>);
    const aboutButton = screen.getByRole('button', { name: /About/i })
    expect(aboutButton).toHaveClass('aboutButton')
  });

  it('should link to About', () => {
    render(
        <Router>
            <Header />
        </Router>);
    const buttonAsLink = screen.getByRole('link', { name: /about/i })
    expect(buttonAsLink).toHaveAttribute('href', '/About')
  })