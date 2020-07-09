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
    let text2 = `GAME LIKE \n LIFE, IS\nNOT PREDICTIBLE`;
    return (
    <>
      <PromoContent headText={text2}/>
    <InfoContext.Provider
        value ={{text}}
        
    >
        <Info/>
    </InfoContext.Provider>
</>
  );
}
  
    
export default Home