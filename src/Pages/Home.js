import React from 'react';
import PromoContent from '../components/PromoContent';
import Info from "../components/Info";
import {InfoContext} from "../App";
import Images from "../assets/promoImg/promo1.png"; 


const Home =()=>{
     const infoText ={
         first: {
             left: {
                 title: 'SERVICES',
                 list: ['STRATEGY', 'UX', 'VISUAL DESIGN', 'DEVELOPMENT']
             },
             right: {
                 title: 'Fermentum nulla bibendum pretium facilisis elit imperdiet. Sed cras dolor nisi quam at maecenas ut.',
                 text: 'lorem lorem lorem lorem'
             }
         },
         secondary:{
             title: "TECHNOLOGIES",
             tiles:[
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'HTML 5',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'CSS 3',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'JAVA SCRIPT',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'JQUERY',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'FIGMA',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'PHOTOSHOP',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'ILLUSTRATOR',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 },
                 {
                     img: './assets/img/techologies/web/js.svg',
                     title:'AFTER EFFECTS',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed purus cras risus eget amet interdum faucibus tincidunt.'
                 }
             ]
         }
     }
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