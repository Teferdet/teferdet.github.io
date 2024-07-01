import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders George Teferdet', () => {
  render(<App />);
  const textElement = screen.getByText(/George Teferdet/i);
  expect(textElement).toBeInTheDocument();
});
