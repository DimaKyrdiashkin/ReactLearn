import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {ClientContext, InfoContext, ProjectsContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png";

import infoText from "./webInfo.json"
import Projetsc from "../../components/Projects";
import Clirnt from "../../components/Client";

const Home = () => {

    return (
        <>
            <PromoContent headText={`GAME\nLIKE\n LIFE,\nIS\nNOT\nPREDICTIBLE`} promoSrc={Images}/>
            <InfoContext.Provider value={{infoText}}>
                <Info/>
            </InfoContext.Provider>
            <ProjectsContext.Provider value={{infoText}}>
                <Projetsc/>
            </ProjectsContext.Provider>
            <ClientContext.Provider value={{infoText}}>
                <Clirnt/>
            </ClientContext.Provider>
        </>
    );
}


export default Home