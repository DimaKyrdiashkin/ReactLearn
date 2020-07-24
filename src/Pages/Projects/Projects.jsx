import React, {useState} from "react";
import './Projects.css'
import {useTranslation} from "react-i18next";
import Form from "../../components/Forms";
import bg from "../../assets/info_bg.png";
import {NavLink} from "react-router-dom";


const Projects = ({ids}) => {
    window.scrollTo(0, 0);
    const numberStep = 4;
    const {t} = useTranslation();
    const massProject = t('project', {returnObjects: true});
    const style = {
        bg: {
            backgroundImage: `url('${bg}')`
        }
    }
    let categorysTitle;
    for (let i of t('category', {returnObjects: true})) {
        if (i.id === ids) {
            categorysTitle = i.title;
        }
    }
    let massRes = [];
    const [numberStart, setNumberStart] = useState(0);
    const funFassItem = () => {
        let num = 0;
        for (let i = numberStart + 0; i < massProject.length; i++) {
            console.log(massProject[0].idCategory );
            if (massProject[i].idCategory === ids ) {
                massRes.push(massProject[i]);
                num++;
            }
        }
        // return (
        //     <ul>
        //         {massRes.push(value =>
        //             <li style={{backgroundImage:`url(./assets/img/projects/${value.id}/${value.titleImg})`}}>
        //
        //                 <NavLink to={`/project/${value.id}`} className="projects_grid_li_a" >{value.title}</NavLink>
        //             </li>
        //         )}
        //     </ul>
        // )
    }
    console.log(massRes)
    return (
        <section style={style.bg}>
            <div className="container">

                <h3 className="emphasize">{categorysTitle}</h3>

                {funFassItem()}

            </div>

            <Form form={t('form', {returnObjects: true})}/>
        </section>
    )
}
export default Projects
