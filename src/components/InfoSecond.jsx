import React from "react";
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
    return(
        <div className="container">
            <div className="info_second">
                <h2 className={"info_second_h2"}>{infoText.second.title}</h2>
                <ul className={"info_second_ul"}>
                    {
                        infoText.second.tiles.map((value, index) =>
                            <li key={index} className={"info_second_li"}>
                                <img src={value.img} alt={value.title}/>
                                <h5>{value.title}</h5>
                                <p>{value.text}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}