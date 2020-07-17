import React, {useState} from "react";
import {InfoContext} from "../App";
import {useTranslation} from "react-i18next";


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
        <ul className={'info_first_ul'}>
            {tablsList.map((tabName, index) => (
                <li className={`${index === currentTab && "info_li_activ"}`} key={tabName + index}
                    onClick={() => tabClickHandler(index)}>
                    {tabName.title}
                </li>
            ))}
        </ul>
    )

}


const InfoFirstComponent = () => {
    const { t } = useTranslation();
    const [text, tabl] = useState(t("web.first.tiles.0.text"));
    const [liActiv, tablLiActiv] = useState(0)
    return (
        <div className="info_bg">
            <div className="container">
                <h3
                    className="emphasize info_h3"
                    onClick={() => {
                        tablLiActiv(null)

                    }}
                >
                    {t("web.first.title.title")}
                </h3>
                <div className="">
                    <ListTabs tablsList={t('web.first.tiles', { returnObjects: true })} activeTab={liActiv}
                              onTabChange={tabl}/>
                </div>
                <div className={'info_first_body'}>
                    <h5 className={'info_first_body_h5'}>{t("web.first.title.titleH2")}</h5>
                    <p>{text}</p>
                </div>
            </div>

        </div>
    )
}