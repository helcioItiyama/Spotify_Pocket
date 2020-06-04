import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authCallbackError, authCallbackSuccess } from '../actions';
import { getInfoFromUrlHash } from '../modules/url';
import { Authorize } from '../containers';

const AuthorizeRoute = () => {
  const [ redirect, setRedirect ] = useState(false);
  const isLogged = useSelector(state => state.authReducer.isLogged);
  const dispatch = useDispatch();
  const urlHash = window.location.hash
  
  useEffect(() => { 
    const hashData = getInfoFromUrlHash(urlHash);
    if(hashData.error) {
      dispatch(authCallbackError(hashData.error))
      return;
    }
    dispatch(authCallbackSuccess(hashData));
  }, [dispatch, urlHash])

  useEffect(() => {
    if(isLogged) {
      setTimeout(() => setRedirect(true), 3000);
    }
  }, [isLogged])

  if(redirect) {
    return(<Redirect to={{pathname:'/dashboard'}}/>);
  }

  return (<Authorize/>)

}

export default AuthorizeRoute;