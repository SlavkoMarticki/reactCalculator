import React from "react";
import "../css/screen.css"




export default function Screen(props){
    console.log(props)
    return (
        <div className="screen">
            <p>{props.value}</p>
        </div>
    );
}

