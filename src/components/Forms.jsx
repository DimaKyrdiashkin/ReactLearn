import React from "react";



const Form = ({form}) => {
    return (
        <div className="form">
            <div className="container">
                <h2 className="emphasize">{form.title}</h2>
                <form className="clients_form">
                    <textarea className="clients_textarea" name="messedger"></textarea>
                    <input className="clients_input" type="name" name="name" placeholder={form.phone}/>
                    <input className="clients_input" type="email" name="email" placeholder={form.email}/>
                    <input className="clients_submit" type="button" value={form.button} />
                </form>
                <p className="form_or">{form.text}</p>
                <ul className="form_ul">
                    <li>
                        <a href={form.facebook}>
                            <h5><img src="./assets/img/soc/facebook.svg" alt="facebook"/>
                            facebook</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.linkedin}>
                            <h5><img src="./assets/img/soc/linkedin.svg" alt="linkedin"/>
                            linkedin</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.instagram}>
                            <h5><img src="./assets/img/soc/instagram.svg" alt="instagram"/>
                            instagram</h5>
                        </a>
                    </li>
                    <li>
                        <a href={form.telegram}>
                            <h5><img src="./assets/img/soc/telegram.svg" alt="telegram"/>
                            telegram</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Form