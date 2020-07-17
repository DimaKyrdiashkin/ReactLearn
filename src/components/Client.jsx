import React, {useState} from "react";
import "./Cilient.css"
import bg from './../assets/info_bg.png'
import Form from "./Forms";
import {useTranslation} from "react-i18next";

const Clirnt = () => {

    const { t } = useTranslation();
    const [left, setLeft] = useState("0");
    const style = {
        info: {
            backgroundImage: `url('${bg}')`
        }
    }
    let mousePosition,
        offset = [0],
        isDown = false;
    return (
        <section className="client" style={style.info}>
            <div className="container client_container">
                <h2 className="emphasize">{t('web.client.title')}</h2>
                <div className="client_slider"
                     id="client_slider_sl"
                     onMouseDown={(e) => {

                         isDown = true;
                         offset = [
                             document.querySelector("#client_ul_slider").offsetLeft - e.clientX
                         ];
                     }}
                     onMouseMove={(e) => {
                         e.preventDefault();
                         if (isDown) {
                             mousePosition = {
                                 x: e.clientX
                             };
                             const widthLiser = document.getElementById('client_ul_slider').offsetWidth;
                             const widthBlockSl = document.getElementById('client_slider_sl').offsetWidth;
                             document.querySelector("#client_ul_slider").style.left = `${(mousePosition.x + offset[0])}px`;
                             const num = Math.abs(parseInt(document.querySelector("#client_ul_slider").style.left) / (widthLiser - widthBlockSl) * 100)
                             if (parseInt(document.querySelector("#client_ul_slider").style.left) < 0) {
                                 document.getElementById('sliderInputClient').value = `${num}`
                             }
                         }
                     }}
                     onTouchMove={(e) => {
                         if (isDown) {
                             mousePosition = {
                                 x: e.touches[0].pageX,
                             };
                             document.querySelector("#client_ul_slider").style.left = `${(mousePosition.x + offset[0])}px`;
                         }
                     }
                     }
                     onMouseUp={() => {
                         isDown = false;
                         const widthLiser = document.getElementById('client_ul_slider').offsetWidth,
                             widthBlockSl = document.getElementById('client_slider_sl').offsetWidth,
                             lefts = parseInt(document.querySelector("#client_ul_slider").style.left);
                         if (Math.abs(lefts) > widthLiser - widthBlockSl) {
                             document.querySelector("#client_ul_slider").style.left = `-${widthLiser - widthBlockSl}px`;
                             document.getElementById('sliderInputClient').value = 100;
                         } else if (lefts > 0) {
                             document.querySelector("#client_ul_slider").style.left = 0;
                             document.getElementById('sliderInputClient').value = 0;
                         }

                     }}
                >
                    <ul className="client_ul"
                        id="client_ul_slider"
                        style={{left: left}}

                    >
                        {t('web.client.list', {returnObjects: true}).map((value, index) => (
                                <li
                                    key={value.title + index}
                                    className="client_ul_li"
                                >
                                    <img src={`assets/img/client/${value.logo}`} alt={value.title}/>
                                    <p className=''>{value.title}</p>
                                </li>
                            )
                        )}
                    </ul>

                </div>
                <input
                    type="range"
                    id="sliderInputClient"
                    defaultValue="0"
                    className="sliderInput"
                    onMouseMove={(e) => {
                        const widthLiser = document.getElementById('client_ul_slider').offsetWidth;
                        const widthBlockSl = document.getElementById('client_slider_sl').offsetWidth;
                        setLeft(`-${Math.floor(widthLiser / 100 * e.target.value) - widthBlockSl}px`)
                    }}
                />
            </div>

            <Form  form={t('web.form', {returnObjects: true})}/>

        </section>
    )

}

export default Clirnt

