import React from 'react';

const PromoContent =(props)=>{
    return (
        <div className='promoContent'>
            <h1>{props.headText}</h1>
            <img
            src={props.promoSrc}
            alt='promoImg'
        />
        </div>
        
      );
}
export default PromoContent