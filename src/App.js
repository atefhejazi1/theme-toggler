import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";

function App() {
  const [toggle, setToggle] = useState("light");

  const ThemeToggler = () => {
    toggle === "light" ? setToggle("dark") : setToggle("light");
    console.log(toggle);
  };

  return (
    <div className={toggle}>
      <button onClick={() => ThemeToggler()}>Btn Toggler</button>
      <Navbar />
    </div>
  );
}

export default App;
