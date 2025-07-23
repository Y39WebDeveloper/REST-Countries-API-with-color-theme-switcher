import { useState } from "react";
import "./App.css";
import { AppContainer, Details, Navbar } from "./Components";
import ThemeContext from "./Contexts/ThemeContext";
import { Route, Routes } from "react-router-dom";

function App() {
  // Dark Mode //
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  if (darkMode) {
    document.body.setAttribute("data-theme", "dark");
  } else if (!darkMode) {
    document.body.setAttribute("data-theme", "light");
  }
  //=Dark Mode=//


  //=Fetch Data=//



  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<AppContainer/>} />
            <Route path="/Details/:code" element={<Details/>} />
          </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
