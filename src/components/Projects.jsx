import React from "react";
import "./Projects.css"

const Projects = ({projetsc, projectId,blockProjectActiv}) => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="emphasize"> {projetsc.title}</h2>
                <ItemProjects item={projetsc.list} projectId={projectId} blockProjectActiv={blockProjectActiv}/>
                <p className="projects_a">{projetsc.more}</p>
            </div>
        </section>
    )
}
export default Projects
const ItemProjects = ({item, projectId,blockProjectActiv}) => {
    const activProject = (key) => {
        projectId(key)
        blockProjectActiv(true)
    }
    return (
        <ul className="projects_grid">
            {item.map((value, index) => (
                    <li key={value.title + index} style={{backgroundImage: `url(./assets/img/projects/${value.img})`}}
                        className="projects_grid_li">
                        <p className='projects_grid_li_a' onClick={() => {
                            activProject(value.id)
                        }}>{value.title}</p>
                    </li>
                )
            )}
        </ul>
    )
}