import React from "react";
import './Projects.scss'
import {useTranslation} from "react-i18next";
import Form from "../../components/Forms";
import bg from "../../assets/info_bg.png";
import ProjectMass from "../../components/ProjectMass";

const Projects = ({ids, linkHome}) => {
    const {t} = useTranslation();
    const style = {
        bg: {
            backgroundImage: `url('${bg}')`
        }
    }
    window.scrollTo(0, 0);
    return (
        <section style={style.bg} className="projectsMass">
            <div className="container projectsMass_div">
                <ProjectMass id={ids} home={linkHome}/>
            </div>
            <Form form={t('form', {returnObjects: true})}/>
        </section>
    )
}
export default Projects


