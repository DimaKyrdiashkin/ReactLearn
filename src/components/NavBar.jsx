import React from 'react';
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";


const NavBar =({classUser})=>{
    const { t } = useTranslation();
    return(
        <nav className={classUser}>
            <NavLink exact to='/'>{t("nav.web")}</NavLink>
            <NavLink to='/motion'>{t("nav.motion")}</NavLink>
            <NavLink to='/sound'>{t("nav.sound")}</NavLink>
            <NavLink to='/game'>{t("nav.game")}</NavLink>
            <NavLink to='/about'>{t("nav.about")}</NavLink>
        </nav>
      );
}
export default NavBar