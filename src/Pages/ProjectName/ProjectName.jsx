import React, {useState} from "react";
import bg from "../../assets/info_bg.png";

const ProjectName = ({project}) => {
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
        <>
            <section className="client" style={style.info}>
sdfsd
            </section>
        </>
    )
}

export default ProjectName