import './App.css';
import './components/button_handlers/links_buttons';
import avatar from './images/avatar.jpg'
import LinkButton from "./components/button_handlers/links_buttons";

function App() {
  return(
      <header id="Main" className="about">
        <img src={avatar} className="avatar" alt="face"/>
        <div className="text">
          <h1>George Teferdet</h1>
          <p className="description">programmer, writer & creator of finances </p>
            <div className="button-container">

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
        </div>
      </header>
  );
}

export default App;
