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
                        <h3 className={"info_first_left_h2"}>{infoText.first.left.title}</h3>
                        <ul className={'info_first_left_ul'}>
                            {infoText.first.left.list.map((value) => {
                                return <li key={value.toString()}>{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className={'info_first_right'}>
                        <h2 className={'info_first_right_h2'}>{infoText.first.right.title}</h2>
                        <p>{infoText.first.right.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


