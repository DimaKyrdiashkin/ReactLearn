import React from "react";
import {InfoContext} from "../App";


const InfoFirst = () => {
    return (
        <InfoContext.Consumer>
            {value => (<InfoFirstComponent {...value}/>)}

        </InfoContext.Consumer>
    )

}
export default InfoFirst

const InfoFirstComponent = ({infoText}) => {
    return (
        <div className={"info_bg"}>
            <div className="container">
                <div className="info_first">
                    <div className={"info_first_left"}>
                        <h2 className={"info_first_left_h2"}>{infoText.first.left.title}</h2>
                        <ul className={'info_first_left_ul'}>
                            {infoText.first.left.list.map(value => {
                                return <li>{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className={'info_first_right'}>
                        <h2 className={'info_first_right_h2'}>{infoText.first.right.title}</h2>
                        <p>{infoText.first.right.text}</p>
                    </div>
                </div>
                <div className="info_secondary">
                    <h3>{infoText.secondary.title}</h3>
                    <ul>
                        {
                            infoText.secondary.tiles.map(value =>{
                                return (
                                    <li>
                                        <img src={value.img} alt={value.title}/>
                                        <h5>{value.title}</h5>
                                        <p>{value.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
