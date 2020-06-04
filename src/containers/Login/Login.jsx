import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import Ink from 'react-ink';

import { endpoints } from '../../modules/endpoints';

import mobileImage from '../../assets/images/app-intro-1.jpg';
import webImage from '../../assets/images/app-intro-2.jpg';
import { Logo } from '../../components';

import './Login.scss';


const Login = () => {
  const [ isMobile, setIsMobile ] = useState(false);
  
  const handleOnResize = event => {
    const { innerWidth } = event.target;
    if(innerWidth <= 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  }
  
  useEffect(() => {
    window.addEventListener('resize', debounce(handleOnResize, 250));
  
    return() => {
      window.removeEventListener('resize', debounce(handleOnResize));
    }
  }, [])
  
  const screenWidth = window.innerWidth;
  const image = isMobile || screenWidth <= 768 ? mobileImage : webImage;

  return (
    <main 
      className="login" 
      data-testid="login" 
      style={{backgroundImage: `url(${image})`}}>
      <div className="container">
        <Logo />

        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong>mas toca o seu 
            <span role="img" aria-label="coração" className="login__microcopy__heart">
              ❤️
            </span>
          </strong>
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com Spotify
          <Ink/>
        </a>
      </div>
    </main>
  );
}
export default Login;
