import React from 'react';
import './Header.css';
import logo from '../logo.svg';
import NavBar from './NavBar'


const Header =()=>  {
  return(
        <div className='header'>
            <header>
                <img src={logo}
                      alt='logo'
                      className='logo'
                />
                <NavBar/>
            </header>
        </div>
    );
}
export default Header