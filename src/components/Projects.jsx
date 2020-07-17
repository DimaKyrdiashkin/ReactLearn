import React from "react";
import "./Projects.css"
import {useTranslation} from "react-i18next";

const Projects = () => {
    const {t} = useTranslation();
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize"> {t("web.projects.title")}</h2>
                <ItemProjects item={t('web.projects.list', {returnObjects: true})}/>
                <p className="projects_a">{t("web.projects.more")}</p>
            </div>
        </section>
    )
}
export default Projects
const ItemProjects = ({item}) => {
    return (
        <ul className="projects_grid">
            {item.map((value, index) => (
                    <li key={value.title + index} style={{backgroundImage: `url(./assets/img/projects/${value.img})`}}
                        className="projects_grid_li">
                        <p className='projects_grid_li_a'>{value.title}</p>
                    </li>
                )
            )}
        </ul>
    )
}