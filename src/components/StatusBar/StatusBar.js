import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

export default function StatusBar() {
  return (
    <header className="status-bar">
      <FontAwesomeIcon icon={faAppleAlt} />
      <span className="status-bar__app-name">Unsplash</span>
      <span>About</span>
    </header>
  );
}
