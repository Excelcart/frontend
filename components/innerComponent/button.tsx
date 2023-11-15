import React from "react";

const Button = ({...props}) => {    
    return (
        <button className={`bg-[#6ec0b8] text-white ${props.class} font-semibold hover:bg-[#00AB9B] px-5 pb-2 pt-1 text-[1.5rem]`} onClick={props.action}>{props.title}</button>
    )
}

export default Button