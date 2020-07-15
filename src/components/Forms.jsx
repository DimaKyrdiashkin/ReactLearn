import React from "react";
import {FormContext} from "../App";



const Form = () => {
    return (
        <FormContext.Consumer>
            {value => (<FormComponent {...value}/>)}
        </FormContext.Consumer>
    )
}

export default Form
const FormComponent = ({formText}) => {
    console.log(formText)
    return (
        <div className="form">
            <div className="container">
                <h2 className="emphasize">{formText.title}</h2>
                <form className="footer_form">
                    <textarea className="footer_textarea"></textarea>
                    <input className="footer_input" type="name" placeholder={formText.phone}/>
                    <input className="footer_input" type="email" placeholder={formText.email}/>
                    <input className="footer_submit" type="button" value={formText.button} />
                </form>
                <p className="form_or">{formText.text}</p>
                <ul className="form_ul">
                    <li>
                        <a href={formText.facebook}>
                            <h5><img src="./assets/img/soc/facebook.svg" alt="facebook"/>
                            facebook</h5>
                        </a>
                    </li>
                    <li>
                        <a href={formText.linkedin}>
                            <h5><img src="./assets/img/soc/linkedin.svg" alt="linkedin"/>
                            linkedin</h5>
                        </a>
                    </li>
                    <li>
                        <a href={formText.instagram}>
                            <h5><img src="./assets/img/soc/instagram.svg" alt="instagram"/>
                            instagram</h5>
                        </a>
                    </li>
                    <li>
                        <a href={formText.telegram}>
                            <h5><img src="./assets/img/soc/telegram.svg" alt="telegram"/>
                            telegram</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
