import authTypes from '../types/authTypes';

export const authCallbackError = (errorMessage) => ({
  type: authTypes.AUTH_CALLBACK_ERROR,
  payload: errorMessage
})

export const authCallbackSuccess = (credentials) => ({
  type: authTypes.AUTH_CALLBACK_SUCCESS,
  payload: {...credentials}
})