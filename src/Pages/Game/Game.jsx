import React from 'react';
import PromoContent from '../../components/PromoContent';
import Images from "../../assets/promoImg/promo3.png";
import {useTranslation} from "react-i18next";

const Game = () => {
    const {t} = useTranslation();
    return (
        <PromoContent headText={t('motion.promo.title')} promoSrc={Images}/>
    );
}
export default Game