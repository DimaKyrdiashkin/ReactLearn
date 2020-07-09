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

const InfoFirstComponent = (props) => {
    return (
        <div className={"info_bg"}>
            <div className="container">
                <div className="info_first">
                    <div className={"info_first_left"}>
                        <h2 className={"info_first_left_h2"}>{props.text.first.left.title}</h2>
                        <ul className={'info_first_left_ul'}>
                            {props.text.first.left.list.map(value => {
                                return <li>{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className={'info_first_right'}>
                        <h2 className={'info_first_right_h2'}>{props.text.first.right.title}</h2>
                        <p>{props.text.first.right.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
