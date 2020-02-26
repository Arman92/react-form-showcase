import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  act(() => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/ERP Test Case/i);
    expect(linkElement).toBeInTheDocument();
  });
});
