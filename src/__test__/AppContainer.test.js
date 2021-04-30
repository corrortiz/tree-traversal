import { render, screen } from '@testing-library/react';
import App from '../AppContainer';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText('Tree Traversal');
  expect(title).toBeInTheDocument();
});
