import authTypes from '../types/authTypes';

const initialState = {
  accessToken: '',
  tokenType: '',
  expiresIn: '',
  expirationTime: '',
  errorMessage: '',
  isLogged: false,
}

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case authTypes.AUTH_CALLBACK_ERROR:
      return {
        ...state,
        accessToken: '',
        tokenType: '',
        expiresIn: '',
        errorMessage: payload,
        isLogged: false
      };
    
    case authTypes.AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        tokenType: payload.tokenType,
        expiresIn: payload.expiresIn,
        expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
        errorMessage: '',
        isLogged: true,
      };
  
    default:
      return state;
  }
}

export default authReducer;