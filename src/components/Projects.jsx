import React from "react";
import "./Projects.scss"
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

const Projects = ({projetsc, projectButton}) => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize">{projetsc.title}</h2>
                <ItemProjects category={projetsc.categories}/>
                <NavLink to={projectButton} className="projects_a">{projetsc.more}</NavLink>
            </div>
        </section>
    )
}
export default Projects
const ItemProjects = ({category}) => {
    const {t} = useTranslation();
    const mass = t('project', {returnObjects: true});
    let massRes = []
    let num = 0;
    for (let value of mass) {
        if (value.idCategory === category && num < 7) {
            massRes.push(value);
            num++
        }
    }
    return (
        <ul className="projects_grid">
            {massRes.map((value, index) => (
                    <li
                        key={value.id + index}
                        className="projects_grid_li"
                        style={{backgroundImage: `url(./assets/img/projects/${value.idCategory}/${value.id}/${value.titleImg})`}}
                    >
                        <NavLink to={`/project/${value.id}`}  className="projects_grid_li_a" >{value.title}</NavLink>
                    </li>
                )
            )}
        </ul>
    )
}