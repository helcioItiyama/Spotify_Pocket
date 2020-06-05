import React  from 'react';
import PropTypes from 'prop-types';

import Ink from 'react-ink';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => (
  <div className="playlists__item" data-testid="playlist">
    <Link 
      to={`${path}/${categoryId}/${id}`}
      style={{backgroundImage: `url(${image.url})`}}
      title={name}
      className="playlists__item__link"
    >
      <Ink/>
    </Link>

    <p className="playlists__item__description">
      <strong>{name}</strong>
      {description}
    </p>
  </div>
);

PlaylistItem.propTypes = {
  categoryId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
}

export default PlaylistItem;

