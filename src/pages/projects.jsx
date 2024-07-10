import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ChangePage from "../components/button_handlers/change_page_buttons";
import 'react-toastify/dist/ReactToastify.css';
import "./interface.css";
import financesImage from './images/finances.jpg';
import github from './images/github.svg'
import telegram from './images/telegram.svg'
import { projects } from "./data";

const image = {
    finances: <img src={financesImage} className="project-img" alt="finances logo" />,
};

const icons = {
    github: <img src={github} alt="github logo" />,
    telegram: <img src={telegram} alt="telegram logo" />,
}


function Projects() {
    document.title = "teferdet: projects";

    const [activeButton, setActiveButton] = useState(null);
    const [content, setContent] = useState(null);
    const [burger, setBurger] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            const project = projects.find(p => p.id === hash);
            if (project) {
                button_handler(project);
            }
        }
    }, [location]);

    let info = (
        <div className="info">
            <span className="material-icons">code</span>
            <h1>Choose a project that interests you</h1>
        </div>
    );

    const handleClick = (url) => {
        window.open(url, '_blank')
    };

    function LinkButtons({ children }, data) {
        return (
            <button
                onClick={() => handleClick(data[children])}
                className="project-link-button"
            >
                {icons[children]}
            </button>
        );
    }

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

    function button_handler(project) {
        setActiveButton(project.id);

        const newContent = (
            <>
                <div className="page-project-contant" id={project.id}>
                    <div className="head">
                        <h1>
                            <button
                                onClick={() => copyToClipboard(`${window.location.origin}/?/projects#${project.id}`)}
                                className="copy-to-clipboard"
                            >
                                <span className="material-icons">link</span>
                            </button>
                            {project.title}
                        </h1>
                        <h3>version: {project.version}</h3>
                    </div>
                    <div className="body-project">
                        {image[project.id]}
                        <p className="about-project">
                            {project.about.split('<br>').map((line, index) => (
                                <React.Fragment key={index}>
                                    <span dangerouslySetInnerHTML={{__html: line}}/>
                                    <br/>
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="link-buttons">
                    <LinkButtons data={project.urls}>github</LinkButtons>
                    <LinkButtons data={project.urls}>telegram</LinkButtons>
                </div>
            </>);

        setContent(newContent);
        window.location.hash = project.id;
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
                <h1 className="page-name">Projects</h1>
            </div>
            <div onClick={() => setBurger(!burger)} className="mobile_btn">
                <span className="material-icons">{burger ? 'close' : 'menu'}</span>
            </div>
            <div className={
                burger ? ["contant-list", "active"].join(' ') : ["contant-list"]
            }>
                {
                    projects.map(project =>
                        <ListItem
                            key={project.id}
                            {...project}
                        />)
                }
            </div>
            {content ? null : info}
            {!content ? null : content}
            <ToastContainer />
        </>
    );
}

export default Projects;
