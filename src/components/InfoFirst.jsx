import React, {useState,useEffect} from "react";
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

    const [text, tabl] = useState(infoText.first.title.text);
    const [title, tablTitle] = useState(infoText.first.title.titleH2);
    const [liActiv, tablLiActiv] = useState(null)


    useEffect(()=>{
        const funcTions = ()=>{
            tablLiActiv(null)
        }

    })
    console.log(infoText)




    return (
        <div className={"info_bg"}>
            <div className="container">
                <div className="info_first">
                    <div className={"info_first_left"}>
                        <h3
                            className={"info_first_left_h2"}
                            onClick={()=>{
                                tabl(infoText.first.title.text)
                                tablTitle(infoText.first.title.titleH2)
                            }}
                        >
                            {infoText.first.title.title}
                        </h3>
                        <ul className={'info_first_left_ul'}>
                            {infoText.first.tiles.map((value, index) => {
                                return <li
                                    className={liActiv}
                                    key={index}
                                    onClick={()=>{
                                        tabl(value.text)
                                        tablTitle("")
                                    }}
                                >
                                    {value.title}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className={'info_first_right'}>
                        <h2 className={'info_first_right_h2'}>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


