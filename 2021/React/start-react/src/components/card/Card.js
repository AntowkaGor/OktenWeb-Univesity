import React from "react";

export const delateFunction =()=>{

}

export function Card (props){

    return(
        <li>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <button onClick={delateFunction}>Delate</button>
        </li>
    )
}



