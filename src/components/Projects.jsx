import React from "react";
import {ProjectsContext} from "../App";
import "./Projects.css"

const Projects = () => {
    return (
        <ProjectsContext.Consumer>
            {value => (<ProjectsComponent {...value}/>)}

        </ProjectsContext.Consumer>
    )
}
export default Projects

const ProjectsComponent = ({infoText}) => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize"> {infoText.projects.title}</h2>
                <ItemProjects item={infoText.projects.list}/>
                <p className="projects_a">more</p>
            </div>
        </section>
    )
}

const ItemProjects = ({item}) => {
    return (
        <ul className="projects_grid">
            {item.map((value, index) => (
                    <li key={value.title + index} style={{backgroundImage:`url(./assets/img/projects/${value.img})`}} className="projects_grid_li">
                        <p className='projects_grid_li_a'>{value.title}</p>
                    </li>
                )
            )}
        </ul>
    )
}