import React from "react";
import "./Footer.css"
import {useTranslation} from "react-i18next";
import NavBar from "./NavBar";

const Footer = () => {
    const { t } = useTranslation();
    const footer = t('footer', {returnObjects: true});
    return (
        <footer className="footer">
            <div className="container">
                <FooterForm form={footer.form}/>
                <FooterNav/>
            </div>
        </footer>
    )
}

export default Footer

const FooterForm = ({form}) => {
    return (
        <form className="footer_form">
            <p className='footer_form_p subtitle'>{form.title}</p>
            <div className="footer_form_body">
                <input type="text" name="email" className="footer_form_email" placeholder={form.emailText}/>
                <button type="button" className="footer_form_bt"></button>
            </div>
        </form>
    )
}

const FooterNav = () => {
    return (
        <NavBar classUser={"footer_nav"}/>
    )
}
