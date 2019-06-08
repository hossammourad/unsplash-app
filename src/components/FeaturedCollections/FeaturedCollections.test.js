import React from 'react';
import { render } from '@testing-library/react';

import FeaturedCollections from './FeaturedCollections';
import collections from './mocks';

it("it doesn't render the collections blocks when there is NO collections data", () => {
  const { getByTestId, queryByTestId } = render(
    <FeaturedCollections
      collections={[]}
      updateFeaturedCollections={() => {}}
      updateSelectedFeaturedCollectionId={() => {}}
    />
  );
  expect(getByTestId('featured-collections-close')).toBeInTheDocument();
  expect(queryByTestId(/featured-collection-/)).toEqual(null);
});

it('renders without crashing when there is collections data', () => {
  const { getByTestId } = render(
    <FeaturedCollections
      collections={collections}
      updateFeaturedCollections={() => {}}
      updateSelectedFeaturedCollectionId={() => {}}
    />
  );
  expect(getByTestId('featured-collection-1')).toBeInTheDocument();
});
