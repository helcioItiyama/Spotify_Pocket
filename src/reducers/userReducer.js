import userTypes from '../types/userTypes';

const initialState = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
}

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case userTypes.GET_USER_REQUEST:
      return {
        ...state,
        status: 'running'
      };

    case userTypes.GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        status: 'success'
      };
    
    case userTypes.GET_USER_FALEID:
      return {
        ...state,
        errorMessage: payload.message,
        status: 'error'
      };

    default:
      return state;
  }
}

export default userReducer;