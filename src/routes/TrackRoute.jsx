import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
} from '../actions';

import { endpoints } from '../modules/endpoints';
import { getContentNameById } from '../modules/helpers';
import { request, sanitizeUrl } from '../modules/request';

import { Tracks } from '../containers';

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({path}) => {
  const { authReducer, contentReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  const { playlistId  } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: {'Authorization': `Bearer ${authReducer.accessToken}`}
    }

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(getPlaylistTracks.url, { playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(error => {
        if(error === 401) {
          dispatch(logout());
          return;
        }

        dispatch(getPlaylistTracksFailed(error))
      })
  }, [authReducer.accessToken, dispatch, playlistId])

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, contentReducer.playlistId)}
      data={contentReducer.tracks}
      isLoading={contentReducer.status==='running'}
      path={path}
    />
  );
}

export default TracksRoute;