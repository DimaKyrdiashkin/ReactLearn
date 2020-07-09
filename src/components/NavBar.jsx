import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar =()=>{
    return(
        <nav>
            <NavLink exact to='/'>web design</NavLink>
            <NavLink to='/motion'>motion design</NavLink>
            <NavLink to='/sound'>sound production</NavLink>
            <NavLink to='/game'>game development</NavLink>
            <NavLink to='/about'>about us</NavLink>
        </nav>
      );
}
export default NavBar