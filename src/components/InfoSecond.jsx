import React, {useState} from "react";
import {InfoContext} from "../App";

const InfoSecond = () => {
    return (
        <InfoContext.Consumer>
            {value => (<InfoSecondComponent {...value}/>)}
        </InfoContext.Consumer>
    )

}
export default InfoSecond


const InfoSecondComponent = ({infoText}) => {

    return (
        <div className="container">
            <div className="info_second">
                <h2 className={"info_second_h2"}>{infoText.second.title}</h2>
                <ul className={"info_second_ul"}>
                    {
                        infoText.second.tiles.map((value, index) =><Item value={value} key={index}/>)
                    }
                </ul>
            </div>
        </div>
    )
}

const Item = (props)=>{
    const [color, setColor] = useState("linear-gradient(135.07deg, #0C0C0C 0%, rgba(12, 12, 12, 0) 100%");
    return(
        <li
            onMouseOver={()=>setColor(props.value.color)}
            onMouseOut={()=>setColor("linear-gradient(135.07deg, #0C0C0C 0%, rgba(12, 12, 12, 0) 100%")}
            className={"info_second_li"}
            style={{background:color}}
        >
            <img
                src={props.value.img}
                alt={props.value.title}
            />
            <h5>{props.value.title}</h5>
            <p>{props.value.text}</p>
        </li>
    )

}
