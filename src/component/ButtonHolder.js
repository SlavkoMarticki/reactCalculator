import React from "react";
import "../css/buttonHolder.css";

export default function ButtonHolder(props){

    //console.log(props.functions.deleteAll);
    
    return(
        <div className="holder">
            <div className="line">
                <button onClick={() => props.functions.deleteAll()} className="grayColor" >C</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("+/-")} className="grayColor" >+/-</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("%")} className="grayColor" >%</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("/")} className="orangeColor">/</button>
            </div>
            <div className="line">
                <button onClick={() => props.functions.takeAndSaveUserInput("7")}>7</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("8")}>8</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("9")}>9</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("*")} className="orangeColor">*</button>
            </div>
            <div className="line">
                <button onClick={() => props.functions.takeAndSaveUserInput("4")} >4</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("5")} >5</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("6")} >6</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("-")}  className="orangeColor">-</button>
            </div>
            <div className="line">
                <button onClick={() => props.functions.takeAndSaveUserInput("1")} >1</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("2")} >2</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("3")} >3</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("+")}  className="orangeColor">+</button>
            </div>
            <div className="line">
                <button onClick={() => props.functions.takeAndSaveUserInput("0")} className="zeroButton">0</button>
                <button onClick={() => props.functions.takeAndSaveUserInput(".")} >.</button>
                <button onClick={() => props.functions.takeAndSaveUserInput("=")} className="orangeColor">=</button>
            </div>
        </div>
    );
}
