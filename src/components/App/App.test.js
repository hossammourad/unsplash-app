import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const { getByTestId, queryByTestId } = render(<App />);
  expect(getByTestId('status-bar')).toBeInTheDocument();
  expect(getByTestId('status-bar')).toBeInTheDocument();

  // At first render, there is no photo credit component
  expect(queryByTestId('photo-credit')).toEqual(null);
});
