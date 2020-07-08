import React from "react";





const InfoFirst = (props)=>{
    console.log(props)
    return(
        <div className={"info_bg"}>
            <div className="container">
                <div className="info_first">
                    <div className={"info_first_left"}>
                        <h2 className={"info_first_left_h2"}>{props.left.title}</h2>
                        <ul className={'info_first_left_ul'}>
                            {props.left.list.map(value => {
                                return <li >{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className={'info_first_right'}>
                        <h2 className={'info_first_right_h2'}>{props.right.title}</h2>
                        <p>{props.right.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default InfoFirst

