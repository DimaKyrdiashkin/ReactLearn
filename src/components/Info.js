import React from "react";
import './Info.css'
import bg from './../assets/info_bg.png'
import InfoFirst from "./InfoFirst";
const Info = () => {
    const style = {
        info: {
            backgroundImage: `url('${bg}')`
        }
    }
    return (
        <section className={"info"} style={style.info}>
            <InfoFirst />
        </section>
    )
}
export default Info