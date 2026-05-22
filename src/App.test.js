import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  // Verify the app renders with the portfolio branding
  expect(screen.getByText('YM')).toBeInTheDocument();
});
