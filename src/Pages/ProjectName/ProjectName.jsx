import React, {useState} from "react";
import './ProjectName.css'
import {useTranslation} from "react-i18next";
import {useParams} from 'react-router-dom'
import bg from "../../assets/info_bg.png";
import Form from "../../components/Forms";

const ProjectName = () => {
    const {t} = useTranslation();
    const id = useParams();

    const [left, setLeft] = useState("0");
    const style = {
        bg: {
            backgroundImage: `url('${bg}')`
        }
    }
    let mousePosition,
        offset = [0],
        isDown = false;

    let res;
    for (const value of t('project', {returnObjects: true})) {
        if (value.id === id.id) {
            res = value;
            break;
        }
    }
    if (res === undefined) {
        return (
            <section>
                <div className="container">
                    <h2>404</h2>
                </div>
            </section>
        )

    }
    return (
        <section style={style.bg} className="project">
            <div className="container">
                <h5 className="emphasize" style={{textTransform: "uppercase"}}>{res.title}</h5>
                <div className="project_slider"
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
                     }}
                     onMouseUp={() => {
                         isDown = false;
                         const widthLiser = document.getElementById('client_ul_slider').offsetWidth,
                             widthBlockSl = document.getElementById('client_slider_sl').offsetWidth,
                             lefts = parseInt(document.getElementById("client_ul_slider").style.left);
                         if (Math.abs(lefts) > widthLiser - widthBlockSl) {
                             document.getElementById("client_ul_slider").style.left = `-${widthLiser - widthBlockSl}px`;
                             document.getElementById('sliderInputClient').value = 100;
                         } else if (lefts > 0) {
                             document.getElementById("client_ul_slider").style.left = 0;
                             document.getElementById('sliderInputClient').value = 0;
                         }
                     }}
                >
                    <div className="project_ul"
                         id="client_ul_slider"
                         style={{left: left}}
                    >
                        {res.slider.map((value, index) => (
                                <img key={"" + value.title + index}
                                     src={`./../assets/img/projects/${res.idCategory}/${res.id}/${value}`} alt={res.title}/>
                            )
                        )}
                    </div>
                </div>
                <input
                    type="range"
                    id="sliderInputClient"
                    defaultValue="0"
                    className="sliderInput"
                    onMouseMove={(e) => {
                        const widthLiser = document.getElementById('client_ul_slider').offsetWidth;
                        const widthBlockSl = document.getElementById('client_slider_sl').offsetWidth;
                        setLeft(`-${Math.floor((widthLiser - widthBlockSl) / 100 * e.target.value)}px`)
                    }}
                />


                <p className="project_body_text_title"><b>{res.title}</b></p>
                <div className="project_body">
                    <div className="project_body_text">
                        <p className="project_body_title"><b>{t("strProject.description")}</b></p>
                        <TextProject text={res.text}/>
                    </div>
                    <div className="project_body_technology">
                        <p className="project_body_title"><b>{t("strProject.technology")}</b></p>
                        <ul className="project_body_technology_items">
                            {
                                res.technologies.map((value, index) => <TechnologyProject item={value} key={index}/>)
                            }
                        </ul>
                    </div>
                </div>


            </div>
            <Form form={t('form', {returnObjects: true})}/>

        </section>
    )
}
export default ProjectName
const TextProject = ({text}) => {
    return (
        <div>
            {text.map((value, index) => <p key={index}>{value}</p>)}
        </div>
    )
}
const TechnologyProject = ({item}) => {
    const {t} = useTranslation();
    const mass = t('technologies', {returnObjects: true});
    for (let i in mass) {
        if (mass[i].id === item) {
            return (
                <li
                    key={mass[i].id}
                >
                    <img
                        src={`./../assets/img/technologyLogoColor/${mass[i].img}`}
                        alt={mass[i].title}
                    />
                </li>
            )
        }
    }


}