import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import Ink from 'react-ink';

import { addTrackToPlayer, removePlayerTrack } from '../../actions';

import './Track.scss';

const Track = ({ track }) => {
  const { playingNowId } = useSelector(state => state.contentReducer);
  const [isPlaying, setIsPlaying ] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(isPlaying && playingNowId === track.id) {
      setIsPlaying(false)
      dispatch(removePlayerTrack());
      return;
    }

    dispatch(addTrackToPlayer(track));
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if(playingNowId === track.id) {
      return;
    }

    setIsPlaying(false);
  }, [playingNowId, track.id])

  return (
    <div 
      className={`track ${isPlaying && 'is_playing'}`}
      data-testid="track"
      onClick={handleClick}  
    >
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play__icon"/>
          <BsVolumeUpFill className="track__play__icon"/>
        </div>
      </div>

      <div className="track__info">
        <span className="track__name">{track.name}</span>
        <span className="track__artist">
          {track.artists.length && track.artists.map(({name}) => name).join(',')}
        </span>
      </div>

      <Ink/>
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired
}

export default Track;

