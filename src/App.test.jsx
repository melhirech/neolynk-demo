import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders messages app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Messages/i);
  expect(linkElement).toBeInTheDocument();
});
