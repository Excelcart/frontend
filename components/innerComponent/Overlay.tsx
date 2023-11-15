import React, { useState } from "react";

const Overlay = ({...props}) => {
    return (
        <>
            <div className={`overlay ${props.visible} z-30`} onClick={props.action}> 
            
            </div>
        </>
    )
}

export default Overlay