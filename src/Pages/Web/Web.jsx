import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {InfoContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";
import Projects from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";
import {Helmet} from 'react-helmet'


const Web = () => {

    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>Web Del</title>
                <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
                <meta property="og:title" content="Venstop"/>
                <meta property="og:description" content="test test"/>
            </Helmet>
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



