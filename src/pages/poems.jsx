import React, { useState } from "react";
import "./interface.css";
import ChangePage from "../components/button_handlers/change_page_buttons";
import { poems } from "./data";

function Poems() {
    document.title = "teferdet: poems";

    const [activeButton, setActiveButton] = useState(null);
    const [content, setContent] = useState(null);

    let info = (
        <div className="info">
            <span className="material-icons">book</span>
            <h1>Choose the poetry you want</h1>
            <h2>only in Ukrainian language</h2>
        </div>
    );

    function ListItem(props) {
        return (
            <li>
                <button
                    className={`button-option ${activeButton === props.title ? 'button-option-active' : ''}`}
                    onClick={() => button_handler(props)}
                >
                    <h3>{props.title}</h3>
                </button>
            </li>
        );
    }

    function button_handler(poem) {
        setActiveButton(poem.title);

        const newContent = (
            <div className="poem">
                <div className="poem-head">
                    <h1>{poem.title}</h1>
                    <h3>published: {poem.published}</h3>
                </div>
                <div className="poem-body">
                    <p>
                        {poem.poem.split('<br>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        );


        setContent(newContent);
    }

    return (
        <>
            <div className="header-data">
                <ChangePage>back</ChangePage>
                <h1>Poems</h1>
            </div>
            <div className="poem-list-container">
                <div className="poem-list">
                    {
                        poems.map(poem =>
                            <ListItem
                                key={poem.title}
                                {...poem}
                            />)
                    }
                </div>
            </div>
            {content ? null : info }
            {!content ? null : content  }
        </>
    );
}

export default Poems;
