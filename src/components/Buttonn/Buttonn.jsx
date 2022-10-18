import React from "react";
import "./Buttonn.css";

function Buttonn ({type, title, disable, onClick}) {
    return (
        <button
        className={`btn ${
            (type === "add" && "add") ||
            (type === "remove" && "remove") ||
            (type === "checkout" && "checkout")
        }`}
        disabled = {disable}
        onClick = {onClick}
        >{title}</button>
    )
}

export default Buttonn;