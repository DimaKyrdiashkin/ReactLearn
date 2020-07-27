import React from 'react';

const PromoContent =(props)=>{
    window.scroll(0,0);
    return (
        <div className='promoContent'>
            <div className='container'>
                <h1>{props.headText}</h1>
                <img
                    src={props.promoSrc}
                    alt='promoImg'
                />
            </div>
        </div>
        
      );
}
export default PromoContent