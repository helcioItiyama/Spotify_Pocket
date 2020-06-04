import userTypes from '../types/userTypes';

export const getUserRequest = () => ({
  type: userTypes.GET_USER_REQUEST,
});

export const getUserSuccess = (payload) => {
  const userProfile = {
    email: payload.email,
    name: payload.display_name,
    thumb: payload.images.length ? payload.images[0].url : '',
  }
  return {
    type: userTypes.GET_USER_SUCCESS,
    payload: {...userProfile},
  }
};

export const getUserFailed = ({ message }) => ({
  type: userTypes.GET_USER_FALEID,
  payload: { message },
});

export const logout = () => ({
  type: userTypes.USER_LOGOUT,
  payload: {},
});