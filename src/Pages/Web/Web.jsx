import React, {useState} from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {InfoContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";
import Projetsc from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";
import Project from "../../components/Project";


const Web = () => {
    const [projectActiv, setProjectActiv] = useState(false);
    const [projectId, setProjectId] = useState(null)
    const {t} = useTranslation();
    if(projectActiv){
        return(
            <Project projectId={projectId} form={t('form', {returnObjects: true})} list={t('web.projects.list', {returnObjects: true})}/>
        )
    }
    return (
        <>
            <PromoContent headText={t('web.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider value={t('web.info', {returnObjects: true})}>
                <Info/>
            </InfoContext.Provider>
            <Projetsc projetsc={t('web.projects', {returnObjects: true})} projectId={setProjectId} blockProjectActiv={setProjectActiv}/>
            <Client client={t('web.client', {returnObjects: true})} form={t('form', {returnObjects: true})}/>
        </>
    );
}
export default Web



