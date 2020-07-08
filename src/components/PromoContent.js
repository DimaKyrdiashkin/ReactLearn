import React from 'react';
import Header from "./Header"

const PromoContent =(props)=>{
    return (
        <div className='promoContent'>
            <Header/>
            <h1>{props.headText}</h1>
        </div>
      );
}
export default PromoContent