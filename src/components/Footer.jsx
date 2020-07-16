import React from "react";
import "./Footer.css"
import {NavLink} from "react-router-dom";

const Footer = ({footer}) => {
    console.log(footer)
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
        <nav className="footer_nav">
            <NavLink exact to='/'>web design</NavLink>
            <NavLink to='/motion'>motion design</NavLink>
            <NavLink to='/sound'>sound production</NavLink>
            <NavLink to='/game'>game development</NavLink>
            <NavLink to='/about'>about us</NavLink>
        </nav>
    )
}
