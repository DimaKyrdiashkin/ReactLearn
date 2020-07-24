import React from "react";

import facebook from "./../assets/soc/facebook.svg"
import instagram from "./../assets/soc/instagram.svg"
import linkedin from "./../assets/soc/linkedin.svg"
import telegram from "./../assets/soc/telegram.svg"


const Form = ({form}) => {
    return (
        <div className="form">
            <div className="container">
                <h2 className="emphasize">{form.title}</h2>
                <form className="clients_form">
                    <textarea className="clients_textarea" name="messedger"></textarea>
                    <input className="clients_input" type="name" name="name" placeholder={form.phone}/>
                    <input className="clients_input" type="email" name="email" placeholder={form.email}/>
                    <input className="clients_submit" type="button" value={form.button}/>
                </form>
                <p className="form_or">{form.text}</p>
                <ul className="form_ul">
                    <li>
                        <a href={form.facebook}>
                            <h5>
                                <img
                                    src={facebook}
                                    alt="facebook"
                                />
                                facebook</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.linkedin}>
                            <h5>
                                <img
                                    src={linkedin}
                                    alt="linkedin"
                                />
                                linkedin</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.instagram}>
                            <h5>
                                <img
                                    src={instagram}
                                    alt="instagram"
                                />
                                instagram</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.telegram}>
                            <h5>
                                <img
                                    src={telegram}
                                    alt="telegram"
                                />
                                telegram
                            </h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Form