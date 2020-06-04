import contentTypes from '../types/contentTypes';

export const addTrackToPlayer = (track) => ({
  type: contentTypes.ADD_PLAYERS_TRACK,
  payload: track,
});

export const getCategoriesRequest = () => ({
  type: contentTypes.GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = ({ categories }) => ({
  type: contentTypes.GET_CATEGORIES_SUCCESS,
  payload: categories.items,
});

export const getCategoriesFailed = ({ message }) => ({
  type: contentTypes.GET_CATEGORIES_FAILED,
  payload: { message },
});

export const getCategoryPlaylistRequest = () => ({
  type: contentTypes.GET_CATEGORY_PLAYLIST_REQUEST,
});

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: contentTypes.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: playlists.items,
});

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: contentTypes.GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
});

export const getPlaylistTracksRequest = () => ({
  type: contentTypes.GET_PLAYLIST_TRACKS_REQUEST,
});

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: contentTypes.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

export const getPlaylistTracksFailed = ({ message }) => ({
  type: contentTypes.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message }
});

export const removePlayerTrack = () => ({
  type: contentTypes.REMOVE_PLAYER_TRACK
});

export const setPlayerHeight = (height) => ({
  type: contentTypes.SET_PLAYER_HEIGHT,
  payload: height,
});


