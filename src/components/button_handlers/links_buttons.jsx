import './buttons.css'
import github from "../../images/github.svg";
import telegram from "../../images/telegram.svg";
import steam from "../../images/steam.svg";
import bmac from "../../images/bmac.svg";
import donatello from "../../images/donatello.svg";

const option = {
    "GitHub":[github, "https://github.com/teferdet"],
    "Telegram":[telegram, "https://t.me/teferdet_tells"],
    "Steam":[steam, "https://steamcommunity.com/id/teferdet/"],
    "Card":"https://send.monobank.ua/jar/8TC79v49FX",
    "BMaC":[bmac, "https://www.buymeacoffee.com/teferdet"],
    "Donatello":[donatello, "https://donatello.to/teferdet"]
};

function LinkButton({ children }) {
    let text, img, url;
    text = children;

    if (children !== "Card") {
        img = <img src={option[text][0]} alt="text"/>
        url = option[text][1];
    } else {
        img = <span className="material-icons">wallet</span>
        url = option[text];
    }

    const handleClick = () => {
        window.open(url, '_blank')
    };

    return (
        <button
            onClick={handleClick}
            className="main-button"
        >
            <div className="inside-button">
                {img} <p className="button-text">{text}</p>
            </div>
        </button>
    );
}

export default LinkButton;