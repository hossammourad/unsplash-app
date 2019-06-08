import React from 'react';
import { shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function PhotoCredit({ user }) {
  return (
    <div className="photo-credit" data-testid="photo-credit">
      <span className="display-block">
        <FontAwesomeIcon icon={faUser} className="margin-right-base" />
        <b data-testid="photo-credit-name">{user.name}</b>
      </span>

      {user.bio && <p data-testid="photo-credit-bio">"{user.bio}"</p>}

      {user.instagram_username && (
        <span className="display-block" data-testid="photo-credit-instagram">
          <FontAwesomeIcon icon={faInstagram} />{' '}
          <a href={`https://instagram.com/${user.instagram_username}`}>{user.instagram_username}</a>
        </span>
      )}

      {user.twitter_username && (
        <span className="display-block" data-testid="photo-credit-twitter">
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <a href={`https://twitter.com/${user.twitter_username}`}>{user.twitter_username}</a>
        </span>
      )}
    </div>
  );
}

PhotoCredit.propTypes = {
  user: shape({
    name: string.isRequired,
    bio: string,
    instagram_username: string,
    twitter_username: string
  }).isRequired
};
