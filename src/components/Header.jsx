import React from 'react';
import './Header.css';
import logo from '../logo.svg';
import NavBar from './NavBar'
import {useTranslation} from "react-i18next";


const Header = () => {
    const { i18n } = useTranslation();

    return (
        <div className='header'>
            <header>
                <img src={logo}
                     alt='logo'
                     className='logo'
                />
                <NavBar classUser={"header_nav"}/>
                <ul className="header_languages">
                    <li>
                        <button onClick={()=>i18n.changeLanguage("en")}>EN</button>
                    </li>
                    <li>
                        <button onClick={()=>i18n.changeLanguage("ru")}>RU</button>
                    </li>
                </ul>
            </header>
        </div>
    );
}
export default Header