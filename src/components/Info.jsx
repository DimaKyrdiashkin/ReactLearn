import React from "react";
import './Info.css'
import bg from './../assets/info_bg.png'
import InfoFirst from "./InfoFirst";
import InfoSecond from "./InfoSecond";

const Info = () => {
    const style = {
        info: {
            backgroundImage: `url('${bg}')`
        }
    }
    return (
        <section className={"info"} style={style.info}>
            <InfoFirst/>
            {/*<InfoSecond/>*/}
        </section>
    )
}
export default Info