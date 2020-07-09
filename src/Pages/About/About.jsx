import React from 'react';
import PromoContent from '../../components/PromoContent';
import Images from "../../assets/promoImg/promo3.png"; 

 const About =()=> {
    return (
      <PromoContent headText={`COMPILE\nIDEAS\nINTO\nCODE\nAND\nDESIGN`} promoSrc={Images}/>
    );
}
export default About