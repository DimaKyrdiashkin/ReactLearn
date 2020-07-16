import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {ClientContext, InfoContext, ProjectsContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";
import infoText from "./webInfo.json"
import Projetsc from "../../components/Projects";
import Clirnt from "../../components/Client";
import Footer from "../../components/Footer";
import {useTranslation} from "react-i18next";
import Header from "../../components/Header";

const Web = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <PromoContent headText={t('web.promo.title')} promoSrc={Images}/>
            <InfoContext.Provider value={{infoText}}>
                <Info/>
            </InfoContext.Provider>
            <ProjectsContext.Provider value={{infoText}}>
                <Projetsc/>
            </ProjectsContext.Provider>
            <ClientContext.Provider value={{infoText}}>
                    <Clirnt/>
            </ClientContext.Provider>
            <Footer footer={infoText.footer}/>
        </>
    );
}


export default Web