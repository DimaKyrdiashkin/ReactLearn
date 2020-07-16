import React from 'react';
import './Header.css';
import logo from '../logo.svg';
import NavBar from './NavBar'
import {useTranslation} from "react-i18next";


const Header = () => {
    const { t, i18n } = useTranslation();
    const transliteL = (lang)=>{
        i18n.changeLanguage(lang);

    }

    return (
        <div className='header'>
            <header>
                <img src={logo}
                     alt='logo'
                     className='logo'
                />
                <NavBar/>
                <ul className="header_languages">
                    <li>
                        <a onClick={()=>transliteL("en")}>EN</a>
                    </li>
                    <li>
                        <a onClick={()=>transliteL("ru")}>RU</a>
                    </li>
                </ul>
            </header>
        </div>
    );
}
export default Header