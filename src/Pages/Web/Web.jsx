import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {InfoContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";
import Projects from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";


const Web = (props) => {

    const {t} = useTranslation();
    return (
        <>
            <PromoContent headText={t('web.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider value={t('web.info', {returnObjects: true})}>
                <Info/>
            </InfoContext.Provider>
            <Projects projetsc={t('web.projects', {returnObjects: true})} projectButton={'/projects'}/>
            <Client client={t('web.client', {returnObjects: true})} form={t('form', {returnObjects: true})}/>
        </>
    );
}
export default Web



