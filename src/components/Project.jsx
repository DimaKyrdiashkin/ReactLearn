import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import bg from "../assets/info_bg.png";
import Form from "./Forms";

const Project = ({projectId, form,list})=>{
    const {t} = useTranslation();

        list.map((value) =>{
            if(projectId === value['id']){
                console.log(value);


            }
        })

    const [left, setLeft] = useState("0");
    const style = {
        info: {
            backgroundImage: `url('${bg}')`
        }
    }
    let mousePosition,
        offset = [0],
        isDown = false;
    return (
        <section className="client" style={style.info}>
            <div className="container client_container">
                {/*<h5 className="emphasize">{item["title"]}</h5>*/}

            </div>

            <Form form={form}/>
        </section>
    )
}

export default Project