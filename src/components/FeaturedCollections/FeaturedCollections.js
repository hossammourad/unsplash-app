import React from 'react';
import { arrayOf, shape, string, number, func } from 'prop-types';

export default function FeaturedCollections({
  updateFeaturedCollections,
  updateSelectedFeaturedCollectionId,
  collections
}) {
  return (
    <div className="featured-collections animated bounceInRight">
      <div className="margin-bottom-double">
        <button className="button" onClick={() => updateFeaturedCollections(null)}>
          Close
        </button>
      </div>

      {collections.map(collection => (
        <div
          className="featured-collections__single"
          style={{ backgroundImage: `url(${collection.cover_photo.urls.small})` }}
          key={collection.id}
          onClick={() => updateSelectedFeaturedCollectionId(collection.id)}
        >
          <h3>
            {collection.title} ({collection.total_photos})
          </h3>
        </div>
      ))}
    </div>
  );
}

FeaturedCollections.propTypes = {
  updateFeaturedCollections: func.isRequired,
  updateSelectedFeaturedCollectionId: func.isRequired,
  collections: arrayOf(
    shape({
      title: string.isRequired,
      total_photos: number.isRequired,
      cover_photo: shape({
        urls: shape({
          small: string.isRequired
        }).isRequired
      }).isRequired
    })
  ).isRequired
};
