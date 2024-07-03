import './buttons.css'
import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const data = {
    "Poems": <span className="material-icons">book</span>,
    "Projects": <span className="material-icons">precision_manufacturing</span>,
    "back": <span className="material-icons">arrow_back</span>
};

function FunctionButtons({children}) {
    const navigate = useNavigate();
    let img = data[children]

    if (children !== "back") {
        let url = children.toLowerCase();

        return (
            <button className="main-button">
                <Link to={url} className="inside-button">
                    {img} <p className="button-text">{children}</p>
                </Link>
            </button>
        );
    } else {
        const handleGoBack = () => {
            navigate(-1);
        };

        return (
            <button className="back-button" onClick={handleGoBack}>{img}</button>
        );
    }
}

export default FunctionButtons;