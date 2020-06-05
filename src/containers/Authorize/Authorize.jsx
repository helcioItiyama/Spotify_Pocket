import React from 'react';

import image from '../../assets/images/app-intro-1.jpg';
import { Loading } from '../../components';

import './Authorize.scss';

const Authorize = () => {
  return (
  <div className="callback" data-testid="callback" style={{backgroundImage: `url(${image})`}}   data-testid="callback">
    <div className="container">
      <Loading text="Autenticando..."/>
    </div>
  </div>);
}

export default Authorize;

