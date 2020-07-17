import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const InfoSecond = () => {
    const { t } = useTranslation();
    console.log()
    return (

        <div className="container">
            <div className="info_second">
                <h2 className="emphasize">{t("web.second.title")}</h2>
                <ul className="info_second_ul">
                    {
                        t('web.second.tiles', { returnObjects: true }).map((value, index) =><Item value={value} key={index}/>)
                    }
                </ul>
            </div>
        </div>

    )

}
export default InfoSecond




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
