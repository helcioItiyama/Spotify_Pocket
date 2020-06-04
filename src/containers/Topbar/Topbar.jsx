import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar">
    <div className="container">
      <Link to="/" className="spotify-brand">
        <Logo/>
      </Link>

      <div className="user">
        <span className="user__name">
          Helcio
        </span>

        <div className="user__thumb">
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  </header>
  );

export default Topbar;
