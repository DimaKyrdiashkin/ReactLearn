import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";


const ProjectMass = ({id, home}) => {
    const {t} = useTranslation();
    const massProject = t('project', {returnObjects: true});
    let categorysTitle;
    let massRes = [];
    for (let i of t('category', {returnObjects: true})) {
        if (i.id === id) {
            categorysTitle = i.title;
        }
    }
    for (const value of massProject) {
        if (value.idCategory === id) {
            massRes.push(value);
        }
    }
    const [massStop, setMassStop] = useState(6);


    return (
        <>
            <h3 className="emphasize">{categorysTitle}</h3>
            <ul className="projectsMass_ul">
                <FunProjectItem mass={massRes} massStop={massStop}/>
            </ul>
            <div className="projectsMass_footer">
            <NavLink to={home} className="projectsMass_prev"><b>{t('projects.back')}</b></NavLink>
            <ButtonBlock setMassStop={setMassStop} massStop={massStop} mass={massRes}/>
            </div>
        </>
    )

}
export default ProjectMass


const ButtonBlock = ({setMassStop, massStop, mass}) => {

    if (massStop > mass.length) {
        return false
    }
    return (
        <button
            className="projectsMass_add projectsMass_prev"
            onClick={() => setMassStop(massStop + 6)}
        >
            next
        </button>
    )


}

const FunProjectItem = ({mass, massStop}) => {
    let num = 0
    let massRes = []
    for (let value of mass) {
        if (num < massStop) {
            massRes.push(value);
        } else {
            break
        }
        num++;
    }
    return massRes.map((value, index) => (
        <li
            key={value.id + index}
            className="projectsMass_li"
            style={{backgroundImage: `url(./assets/img/projects/${value.idCategory}/${value.id}/${value.titleImg})`}}
        >
            <NavLink to={`/project/${value.id}`} className="projectsMass_li_a">{value.title}</NavLink>
        </li>
    ))
}
