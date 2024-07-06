import avatar from "./images/avatar.jpg"
import ChangePage from "../components/button_handlers/change_page_buttons";
import LinkButton from "../components/button_handlers/links_buttons";

function Home(){
    return (
        <header className="about">
            <img src={avatar} className="avatar" alt="face"/>
            <div className="text">
                <h1>George Teferdet</h1>
                <p className="description">programmer, writer & creator of finances </p>
            </div>
            <div className="button-container">
                <div className="front row">
                    <ChangePage>Poems</ChangePage>
                    <ChangePage>Projects</ChangePage>
                </div>
                <div className="second row">
                    <LinkButton>GitHub</LinkButton>
                    <LinkButton>Telegram</LinkButton>
                    <LinkButton>Steam</LinkButton>
                </div>
                <div className="third  row">
                    <LinkButton>BMaC</LinkButton>
                    <LinkButton>Donatello</LinkButton>
                    <LinkButton>Card</LinkButton>
                </div>
            </div>
        </header>
    );
}

export default Home;