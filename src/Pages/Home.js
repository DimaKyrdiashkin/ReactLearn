import React from 'react';
import PromoContent from '../components/PromoContent';
import Info from "../components/Info";
import {InfoContext} from "../App";


const Home =()=>{
     const text ={
         first: {
             left: {
                 title: 'SERVICES',
                 list: ['STRATEGY', 'UX', 'VISUAL DESIGN', 'DEVELOPMENT']
             },
             right: {
                 title: 'Fermentum nulla bibendum pretium facilisis elit imperdiet. Sed cras dolor nisi quam at maecenas ut.',
                 text: 'lorem lorem lorem lorem'
             }
         }
     }
    return (
    <>
      <PromoContent headText={`GAME\nLIKE\n LIFE,\nIS\nNOT\nPREDICTIBLE`}/>
    <InfoContext.Provider
        value ={{text}}
    >
        <Info/>
    </InfoContext.Provider>
</>
  );
}
  
    
export default Home