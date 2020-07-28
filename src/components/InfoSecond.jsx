import React, {useState} from "react";
import {InfoContext} from "../App";
import {useTranslation} from "react-i18next";

const InfoSecond = () => {
    return (
        <InfoContext.Consumer>
            {value => (<InfoSecondComponent {...value}/>)}
        </InfoContext.Consumer>
    )

}
export default InfoSecond
const InfoSecondComponent = (value) => {
    return (
        <div className="container">
            <div className="info_second">
                <h2 className="emphasize">{value.second.title}</h2>
                <ul className="info_second_ul">
                    {
                        value.second.technologies.map((value, index) => <Item value={value} key={index}/>)
                    }
                </ul>
            </div>
        </div>
    )
}


const Item = (props) => {
    const {t} = useTranslation();
    const [color, setColor] = useState("linear-gradient(135.07deg, #0C0C0C 0%, rgba(12, 12, 12, 0) 100%");
    const [imgUrl, setImgUrl]= useState(`./assets/img/technologyLogoWhite/`)
    const project =t('technologies', {returnObjects: true});
    for (const i of project){
        if(i.id === props.value){
            return (
                <li
                    onMouseOver={() => {
                        setColor(i.bgColor)
                        setImgUrl(`./assets/img/technologyLogoColor/`)
                    }}
                    onMouseOut={() => {
                        setColor("linear-gradient(135.07deg, #0C0C0C 0%, rgba(12, 12, 12, 0) 100%")
                        setImgUrl(`./assets/img/technologyLogoWhite/`)
                    }}
                    className="info_second_li"
                    style={{background: color}}
                >
                    <img
                        src={`${imgUrl}${i.img}`}
                        alt={i.title}
                    />
                    <h5>{i.title}</h5>
                    <p>{i.text}</p>
                </li>
            )
        }
    }
}
