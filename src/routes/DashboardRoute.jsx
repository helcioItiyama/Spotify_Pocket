import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router-dom';

import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailed,
  getUserRequest, 
  getUserSuccess, 
  getUserFailed, 
  logout } from '../actions';

import { endpoints } from '../modules/endpoints';

import { request } from '../modules/request';
import { WelcomeBox } from '../components';

import { Categories, Dashboard, PrivateRoute, Topbar } from '../containers';
import PlaylistRoute from './PlaylistRoute';
import TracksRoute from './TrackRoute';

const { getCategories, getUserProfile } = endpoints;

const DashboardRoute = () => {
  const { authReducer, contentReducer, userReducer } = useSelector(state => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: {'Authorization': `Bearer ${authReducer.accessToken}`}
    }

    dispatch(getUserRequest());

    request(getUserProfile.url, requestOptions)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(error => {
        if(error === 401) {
          dispatch(logout());

          return;
        }
        dispatch(getUserFailed(error))
      })
  }, [authReducer.accessToken, dispatch]);


  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers:{'Authorization': `Bearer ${authReducer.accessToken}`}
    }
    
    dispatch(getCategoriesRequest());

    request(getCategories.url, requestOptions)
      .then(data => dispatch(getCategoriesSuccess(data)))
      .catch(error => {
        if(error === 401) {
          dispatch(logout());
          return;
        }
        dispatch(getCategoriesFailed(error))
      })
  }, [authReducer.accessToken, dispatch]);

  return (
    <Dashboard>
      <Topbar/>
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={userReducer.name}/>
          <Categories
            isLoading={contentReducer.status === 'running' && contentReducer.categories.length === 0}
            data={contentReducer.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistRoute path={path}/>
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute/>
        </PrivateRoute>
      </Switch>
    </Dashboard>
  )};
  
  export default DashboardRoute;