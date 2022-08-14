import { render, screen } from '@testing-library/react';
import Packing from '../pages/Packing';
import {BrowserRouter as Router} from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

test('renders the packing page', () => {
  render(
  <Router>
    <Packing />
  </Router>);

  expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent("Your packing list");

});




