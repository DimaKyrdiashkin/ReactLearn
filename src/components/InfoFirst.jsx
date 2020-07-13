import React, {useState} from "react";
import {InfoContext} from "../App";


const InfoFirst = () => {
    return (
        <InfoContext.Consumer>
            {value => (<InfoFirstComponent {...value}/>)}

        </InfoContext.Consumer>
    )

}
export default InfoFirst


const ListTabs = ({tablsList, activeTab, onTabChange}) => {
    const [currentTab, setCurrentTab] = useState(activeTab)
    const tabClickHandler = (newActiveIndex) => {
        onTabChange(tablsList[newActiveIndex].text);
        setCurrentTab(newActiveIndex);
    }
    return (
        <ul className={'info_first_left_ul'}>
            {tablsList.map((tabName, index) => (
                <li className={`${index === currentTab && "info_li_activ"}`} key={tabName + index}
                    onClick={() => tabClickHandler(index)}>
                    {tabName.title}
                </li>
            ))}
        </ul>
    )

}


const InfoFirstComponent = ({infoText}) => {
    const [text, tabl] = useState(infoText.first.tiles[0].text);
    const [title, tablTitle] = useState(infoText.first.title.titleH2);
    const [liActiv, tablLiActiv] = useState(0)

    return (
        <div className={"info_bg"}>
            <div className="container">
                <div className="info_first">
                    <div className={"info_first_left"}>
                        <p
                            className={"info_first_left_h2 subtitle"}
                            onClick={()=>{
                                tablLiActiv(null)

                            }}
                        >
                            {infoText.first.title.title}
                        </p>
                        <ListTabs tablsList={infoText.first.tiles} activeTitle={tablTitle} activeTab={liActiv} onTabChange={tabl}/>
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