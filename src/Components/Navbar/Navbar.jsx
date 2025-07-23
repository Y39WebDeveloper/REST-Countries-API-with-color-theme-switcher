import './Navbar.css'
import { useContext } from "react";
import {LightIcon, DarkIcon} from "../";
import ThemeContext from "../../Contexts/ThemeContext";

function Navbar() {

    const {darkMode, setDarkMode} = useContext(ThemeContext)
    function toggleMode() {
        setDarkMode((a) => !a);
      }

  return (
    <nav>
      <h3>Where in the world?</h3>
      <div className="mode" onClick={toggleMode}>
        {darkMode ? <LightIcon /> : <DarkIcon />}
        {darkMode ? "Light" : "Dark"} Mode
      </div>
    </nav>
  );
}

export default Navbar;
