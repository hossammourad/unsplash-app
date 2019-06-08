import React from 'react';
import { render } from '@testing-library/react';
import Window from './Window';

it('renders with the Random button', () => {
  const { getByTestId } = render(<Window updatePhotoCreditData={() => {}} />);
  expect(getByTestId('random-wallpaper')).toBeInTheDocument();
});
