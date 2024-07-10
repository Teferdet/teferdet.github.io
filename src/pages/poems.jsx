import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ChangePage from "../components/button_handlers/change_page_buttons";
import { poems } from "./data";
import 'react-toastify/dist/ReactToastify.css';
import "./interface.css";

function Poems() {
    document.title = "teferdet: poems";

    const [activeButton, setActiveButton] = useState(null);
    const [content, setContent] = useState(null);
    const [burger, setBurger] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            const poem = poems.find(p => p.id === hash);
            if (poem) {
                button_handler(poem);
            }
        }
    }, [location]);

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
                    className={`button-option ${activeButton === props.id ? 'button-option-active' : ''}`}
                    onClick={() => button_handler(props)}
                >
                    <h3>{props.title}</h3>
                </button>
            </li>
        );
    }

    function button_handler(poem) {
        setActiveButton(poem.id);

        const newContent = (
            <div className="page-poem-contant" id={poem.id}>
                <div className="head">
                    <h1>
                        <button
                            onClick={() => copyToClipboard(`${window.location.origin}/poems#${poem.id}`)}
                            className="copy-to-clipboard"
                        >
                            <span className="material-icons">link</span>
                        </button>
                        {poem.title}
                    </h1>
                    <h3>published: {poem.published}</h3>
                </div>
                <div className="body">
                    <p className="poem-text">
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
        window.location.hash = poem.id;
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            toast.success("URL cope!", {
                className: 'custom-toast-success',
            });
        }, () => {
            toast.error("Sorry, try again", {
                className: 'custom-toast-error',
            });
        });
    }

    return (
        <>
            <div className="header-data">
                <ChangePage>back</ChangePage>
                <h1 className="page-name">Poems</h1>
            </div>
            <div onClick={() => setBurger(!burger)} className="mobile_btn">
                <span className="material-icons">{burger ? 'close' : 'menu'}</span>
            </div>
            <div className={
                burger ? ["contant-list", "active"].join(' ') : ["contant-list"]
            }>
                {
                    poems.map(poem =>
                        <ListItem
                            key={poem.id}
                            {...poem}
                        />)
                }
            </div>
            {content ? null : info}
            {!content ? null : content}
            <ToastContainer />
        </>
    );
}

export default Poems;
