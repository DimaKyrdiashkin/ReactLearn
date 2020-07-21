import React from "react";
import "./Projects.css"

const Projects = ({projetsc}) => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize"> {projetsc.title}</h2>
                <ItemProjects item={projetsc.list}/>
                <p className="projects_a">{projetsc.more}</p>
            </div>
        </section>
    )
}
export default Projects
const ItemProjects = ({item }) => {

    return (
        <ul className="projects_grid">
            {item.map((value, index) => (
                    <li key={value.title + index} style={{backgroundImage: `url(./assets/img/projects/${value.img})`}}
                        className="projects_grid_li">
                        <p className='projects_grid_li_a' onClick={()=>{}}>{value.title}</p>
                    </li>
                )
            )}
        </ul>
    )
}