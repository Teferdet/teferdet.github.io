import React from "react";
import "./interface.css"
import FunctionButtons from "../components/button_handlers/change_page_buttons";

function Projects(){
    document.title = "teferdet: poems";

    return (
        <>
            <div className="header-data">
                <FunctionButtons>back</FunctionButtons>
                <h1>Projects</h1>
            </div>
        </>
    )
}

export default Projects;