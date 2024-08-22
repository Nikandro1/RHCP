import React from "react";
export function CardIntegrante(props){
    
    return (
        <div>
            <img 
                src= {`/RHCP/src/imagenes/a-${props.name}.jpg` }
                alt=" ${props.name} "
            />
            <h1>{props.name}</h1>
        </div>
    )
}
