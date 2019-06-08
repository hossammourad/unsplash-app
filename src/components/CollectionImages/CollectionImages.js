import React, { useEffect, useState } from 'react';
import { number, func } from 'prop-types';
import axios from 'axios';

export default function CollectionImages({
  collectionId,
  updateCollectionId,
  updatePhotoCreditData,
  updateFeaturedCollections
}) {
  const [images, updateImages] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/collections/${collectionId}/photos?per_page=25&client_id=76ea967f06acc4fc0e20f384ec0b987d64dc71dc92c47c5546301ea4a2fc366a`
      )
      .then(result => updateImages(result.data))
      .catch(error => console.error(error));
  }, [collectionId]);

  const imageOnClick = image => {
    document.body.style.backgroundImage = `url(${image.urls.full})`;
    updatePhotoCreditData(image.user);
  };

  return (
    <div className="collection-images">
      <div className="margin-bottom-double">
        <button
          className="button"
          onClick={() => {
            updateCollectionId(null);
            updateFeaturedCollections(null);
          }}
        >
          Close
        </button>
      </div>
      {images && (
        <div className="collection-images__content">
          {images.map(image => (
            <img
              key={image.id}
              src={image.urls.thumb}
              alt={image.name}
              onClick={() => imageOnClick(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

CollectionImages.propTypes = {
  collectionId: number.isRequired,
  updateCollectionId: func.isRequired,
  updatePhotoCreditData: func.isRequired,
  updateFeaturedCollections: func.isRequired
};
