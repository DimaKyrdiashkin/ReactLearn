import React from 'react';
import PromoContent from '../../components/PromoContent';
import Images from "../../assets/promoImg/promo2.png";
import {InfoContext} from "../../App";
import Info from "../../components/Info";
import Projects from "../../components/Projects";
import Client from "../../components/Client";
import {useTranslation} from "react-i18next";

const Motion = () => {
    const {t} = useTranslation();
    return (
        <>
            <PromoContent headText={t('motion.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider value={t('motion.info', {returnObjects: true})}>
                <Info/>
            </InfoContext.Provider>
            <Projects projetsc={t('motion.projects', {returnObjects: true})} projectButton={'/motion/projects'}/>
            <Client client={t('motion.client', {returnObjects: true})} form={t('form', {returnObjects: true})}/>
        </>
    );
}
export default Motion