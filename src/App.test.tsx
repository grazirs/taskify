import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project heading', () => {
  render(<App />);
  const title = screen.getByText(/taskify/i);
  expect(title).toBeInTheDocument();
});
