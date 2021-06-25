import React from 'react';
import { render, screen } from '@testing-library/react';
import BurningBush from './BurningBush';

test('renders learn react link', () => {
  render(<BurningBush />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});