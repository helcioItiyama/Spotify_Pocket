import contentTypes from '../types/contentTypes';

const initialState = {
  categories: [],
  playlist: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
}

const contentReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case contentTypes.ADD_PLAYERS_TRACK:
      return {
        ...state,
        playingNowId: payload.id,
        playingNowTrack: payload,
      };
    
    case contentTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        status: 'running',
      };
    
    case contentTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        categories: payload,
        status: 'success',
      };
    
    case contentTypes.GET_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
        errorMessage: payload.message,
        status: 'error',
      };

    case contentTypes.GET_CATEGORY_PLAYLIST_REQUEST:
      return {
        ...state,
        playlist: [],
        status: 'running',
      };

    case contentTypes.GET_CATEGORY_PLAYLIST_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        playlist: payload,
        status: 'success',
      };

    case contentTypes.GET_CATEGORY_PLAYLIST_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        playlist: [],
        status: 'error',
      };

    case contentTypes.GET_PLAYLIST_TRACKS_REQUEST:
      return {
        ...state,
        tracks: [],
        status: 'running',
      };

    case contentTypes.GET_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        tracks: payload.filter(({track}) => track),
        status: 'success',
      };

    case contentTypes.GET_PLAYLIST_TRACKS_FAILED:
      return {
        ...state,
        tracks: [],
        errorMessage: payload.message,
        status: 'error',
      };
    
    case contentTypes.REMOVE_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
        playerHeight: 0,
      };
    
    case contentTypes.SET_PLAYER_HEIGHT:
      return {
        ...state,
        playerHeight: payload,
      };
    
    default:
      return state;
  }
}

export default contentReducer;