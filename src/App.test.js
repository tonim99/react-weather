import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const textBox = screen.getByRole('textbox', {name: ''});
  expect(textBox).toBeInTheDocument();
});
