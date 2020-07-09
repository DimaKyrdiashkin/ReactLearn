import React from 'react';
import PromoContent from '../../components/PromoContent';
import Info from "../../components/Info";
import {InfoContext} from "../../App";
import Images from "../../assets/promoImg/promo1.png"; 

import infoText from "./homeInfo.json"

const Home =()=>{

    return (
    <>
    <PromoContent headText={`GAME\nLIKE\n LIFE,\nIS\nNOT\nPREDICTIBLE`} promoSrc={Images}/>

    <InfoContext.Provider value ={{infoText}}>
        <Info/>
    </InfoContext.Provider>
</>
  );
}
  
    
export default Home