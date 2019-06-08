import React from 'react';
import { func } from 'prop-types';
import axios from 'axios';

export default function Window({ updatePhotoCreditData, updateFeaturedCollections }) {
  const getRandomImage = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=76ea967f06acc4fc0e20f384ec0b987d64dc71dc92c47c5546301ea4a2fc366a`
      )
      .then(result => {
        document.body.style.backgroundImage = `url(${result.data.urls.full})`;
        updatePhotoCreditData(result.data.user);
      })
      .catch(error => console.error(error));
  };

  const getFeaturedCollections = () => {
    axios
      .get(
        `https://api.unsplash.com/collections/featured?client_id=76ea967f06acc4fc0e20f384ec0b987d64dc71dc92c47c5546301ea4a2fc366a`
      )
      .then(result => updateFeaturedCollections(result.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="window" data-testid="app-window">
      <div className="window__controls">
        <span className="btn btn-close">Close</span>
        <span className="btn btn-mini">Mini</span>
        <span className="btn btn-expand">Expand</span>
      </div>

      <div className="edit-content">
        <p>Hi! welcome to your virtual desktop</p>
        <p>You can use this app to change your virtual desktop wallpaper!</p>
        <button
          className="button margin-bottom-double"
          onClick={() => getRandomImage()}
          data-testid="random-wallpaper"
        >
          Random
        </button>
        <br />
        <button
          className="button"
          onClick={() => getFeaturedCollections()}
          data-testid="select-from-featured-images"
        >
          Select From Featured Images
        </button>
      </div>
    </div>
  );
}

Window.propTypes = {
  updatePhotoCreditData: func.isRequired,
  updateFeaturedCollections: func.isRequired
};
