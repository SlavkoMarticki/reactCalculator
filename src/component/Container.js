import React from "react";
import "../css/container.css";
import Screen from "./Screen";
import ButtonHolder from "./ButtonHolder";


export default function Container(){

    const [number, setNumber] = React.useState([]);

    const takeAndSaveUserInput = (num) => {
        setNumber(() => [...number, num]);
        console.log(number);
    }

    const deleteAll = () => {
        return setNumber(() => []);
    }
    
    const writeToScreen = number.map((item)=> {
        return(item);
    })
     

    return(
        <div className="container">
            <Screen value={writeToScreen}/>
            <ButtonHolder functions={{takeAndSaveUserInput, deleteAll}}/>
        </div>
    );
}