import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar =()=>{
    return(
        <nav>
            <h1></h1>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
            <NavLink to='/about'>About us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
      );
}
export default NavBar