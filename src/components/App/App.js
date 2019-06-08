import React, { Fragment, useState } from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Window from '../Window/Window';
import PhotoCredit from '../PhotoCredit/PhotoCredit';
import FeaturedCollections from '../FeaturedCollections/FeaturedCollections';
import CollectionImages from '../CollectionImages/CollectionImages';

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

      {featuredCollections && !selectedFeaturedCollectionId && (
        <FeaturedCollections
          updateFeaturedCollections={updateFeaturedCollections}
          updateSelectedFeaturedCollectionId={updateSelectedFeaturedCollectionId}
          collections={featuredCollections}
        />
      )}

      {selectedFeaturedCollectionId && (
        <CollectionImages
          collectionId={selectedFeaturedCollectionId}
          updateCollectionId={updateSelectedFeaturedCollectionId}
          updatePhotoCreditData={updatePhotoCreditData}
          updateFeaturedCollections={updateFeaturedCollections}
        />
      )}
    </Fragment>
  );
}
