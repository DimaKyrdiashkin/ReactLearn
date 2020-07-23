import React from "react";
import "./Projects.css"
import {useTranslation} from "react-i18next";

const Projects = ({projetsc}) => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize">{projetsc.title}</h2>
                <ItemProjects category={projetsc.categories}/>
                <p className="projects_a">{projetsc.more}</p>
            </div>
        </section>
    )
}
export default Projects
const ItemProjects = ({category}) => {
    const {t} = useTranslation();
    const mass =t('project', {returnObjects: true});
    let massRes = []
    let num =0;
    mass.map(value=>{
        if(value.idCategory === category && num<7){
            massRes.push(value);
            num++
        }
    })
    return(
        <ul className="projects_grid">
            {massRes.map((value,index) =>(
                    <li
                        key={value.id+index}
                        className="projects_grid_li"
                        style={{backgroundImage:`url(./assets/img/projects/${value.idCategory}/${value.id}/${value.titleImg})`}}
                    >
                        <p className="projects_grid_li_a">
                            {value.title}
                        </p>
                    </li>
            )
            )}
        </ul>
    )
}