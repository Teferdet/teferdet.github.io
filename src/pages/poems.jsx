import React from "react";
import "./interface.css";
import FunctionButtons from "../components/button_handlers/function_buttons";
import { poems } from "./data";

function Poems() {
    document.title = "teferdet: poems";

    return (
        <div className="container">
            <div className="header-data">
                <FunctionButtons>back</FunctionButtons>
                <h1>Poems</h1>
            </div>
            <div className="choose-item">
                <ul>
                    {
                        poems.map(poem =>
                            <ListItem key={poem.title} {...poem} />)
                    }
                </ul>
            </div>
            <div className="main-contant">
                <span className="material-icons">book</span>
                <h1>Choose the poetry you want</h1>
                <h2>only in Ukrainian language</h2>
            </div>
        </div>
    );
}

function ListItem(props) {
    return (
        <li>
            <button className="button-option">
                <h3>{props.title}</h3>
            </button>
        </li>
    );
}

export default Poems;
