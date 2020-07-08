import React from "react";
import './Info.css'
import bg from './../assets/info_bg.png'
import InfoFirst from "./InfoFirst";
const  Info = (props)=>{
    const style ={
        info:{
            backgroundImage: `url('${bg}')`
        }
    }

    const text ={
        first: {
            left: {
                title: 'SERVICES',
                list: ['STRATEGY', 'UX', 'VISUAL DESIGN', 'DEVELOPMENT']
            },
            right: {
                title: 'Fermentum nulla bibendum pretium facilisis elit imperdiet. Sed cras dolor nisi quam at maecenas ut.',
                text: 'lorem lorem lorem lorem'
            }
        }
    }
    return(
        <section className={"info"} style={style.info}>
            <InfoFirst left={text.first.left} right={text.first.right} />
        </section>
    )
}
export default Info