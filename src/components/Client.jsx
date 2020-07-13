import React, {useState} from "react";
import {ClientContext} from "../App";
import "./Cilient.css"
import bg from './../assets/info_bg.png'

const Clirnt = () => {
    return (
        <ClientContext.Consumer>
            {value => (<ClientComponent {...value}/>)}

        </ClientContext.Consumer>
    )

}

export default Clirnt


const ClientComponent = ({infoText}) => {
    const [left, setLeft] = useState(0);
    const style = {
        info: {
            backgroundImage: `url('${bg}')`
        }
    }
    return (
        <section className="client"  style={style.info}>
            <div className="container">
                <h2 className="emphasize">{infoText.client.title}</h2>
                <div className="client_slider">
                    <ul className="client_ul"
                        style={{left:left}}
                        onMouseMove={()=>{

                        }}
                    >
                        {infoText.client.list.map((value, index) => (
                                <li key={value.title + index} className="client_ul_li">
                                    <img src={`assets/img/client/${value.logo}`} alt={value.title}/>
                                    <p className=''>{value.title}</p>
                                </li>
                            )
                        )}
                    </ul>

                </div>
                <input
                    type="range"
                    defaultValue="0"
                    className="sliderInput"
                    onMouseMove={(e)=>{
                        setLeft(`-${e.target.value}%`)
                    }}
                />
            </div>
        </section>
    )
}
