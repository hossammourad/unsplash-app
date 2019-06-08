import React from 'react';
import { render } from '@testing-library/react';
import PhotoCredit from './PhotoCredit';

it('renders without crashing providing all the props', () => {
  const { getByTestId } = render(
    <PhotoCredit
      user={{
        name: 'full-name',
        bio: 'bio',
        instagram_username: 'instagram-username',
        twitter_username: 'twitter-username'
      }}
    />
  );
  expect(getByTestId('photo-credit-name')).toBeInTheDocument();
  expect(getByTestId('photo-credit-bio')).toBeInTheDocument();
  expect(getByTestId('photo-credit-instagram')).toBeInTheDocument();
  expect(getByTestId('photo-credit-twitter')).toBeInTheDocument();
});

it("doesn't render the instagram block when there is prop provided for it", () => {
  const { queryByTestId } = render(
    <PhotoCredit
      user={{
        name: 'full-name',
        bio: 'bio',
        twitter_username: 'twitter-username'
      }}
    />
  );
  expect(queryByTestId('photo-credit-instagram')).toEqual(null);
});
