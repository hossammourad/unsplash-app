import React, { Fragment, useState } from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Window from '../Window/Window';
import PhotoCredit from '../PhotoCredit/PhotoCredit';
import FeaturedCollections from '../FeaturedCollections/FeaturedCollections';

export default function App() {
  const [photoCreditData, updatePhotoCreditData] = useState(null);
  const [featuredCollections, updateFeaturedCollections] = useState(null);
  const [selectedFeaturedCollectionId, updateSelectedFeaturedCollectionId] = useState(null);

  return (
    <Fragment>
      <StatusBar />
      <Window
        updatePhotoCreditData={updatePhotoCreditData}
        updateFeaturedCollections={updateFeaturedCollections}
      />

      {photoCreditData && <PhotoCredit user={photoCreditData} />}

      {featuredCollections && (
        <FeaturedCollections
          updateFeaturedCollections={updateFeaturedCollections}
          updateSelectedFeaturedCollectionId={updateSelectedFeaturedCollectionId}
          collections={featuredCollections}
        />
      )}
    </Fragment>
  );
}
