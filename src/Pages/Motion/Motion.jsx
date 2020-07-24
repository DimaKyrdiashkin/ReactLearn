import React from 'react';
import PromoContent from '../../components/PromoContent';
import Images from "../../assets/promoImg/promo2.png";
import {InfoContext} from "../../App";
import Info from "../../components/Info";
import Projetsc from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";

const Motion = () => {
    const {t} = useTranslation();
    return (
        <>
            <PromoContent headText={t('web.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider value={t('web.info', {returnObjects: true})}>
                <Info/>
            </InfoContext.Provider>
            <Projetsc projetsc={t('web.projects', {returnObjects: true})}/>
            <Client client={t('web.client', {returnObjects: true})} form={t('form', {returnObjects: true})}/>
        </>

    );
}
export default Motion