import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {InfoContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";
import Projetsc from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";


const Web = () => {
    const { t } = useTranslation();
    return (
        <>
            <PromoContent headText={t('web.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider  >
                <Info/>
            </InfoContext.Provider>
            <Projetsc projetsc={t('web.projects', { returnObjects: true })}/>
            <Client client={t('web.client', { returnObjects: true })} form={t('form', { returnObjects: true })}/>
        </>
    );
}


export default Web