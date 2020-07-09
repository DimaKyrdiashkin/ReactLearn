import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar =()=>{
    return(
        <nav>
            <NavLink exact to='/'>web design</NavLink>
            <NavLink to='/gallery'>motion design</NavLink>
            <NavLink to='/about'>sound production</NavLink>
            <NavLink to='/contact'>game development</NavLink>
            <NavLink to='/contact'>about us</NavLink>
        </nav>
      );
}
export default NavBar