import { useState } from "react";
import "./App.css";

import Footer from "./Parts/Footer";
import HeroBaanner from "./Parts/HeroBaanner";
import Images from "./Parts/Images";
import Intro from "./Parts/Intro";
import MenuBar from "./Parts/MenuBar";
import Window1 from "./Parts/Window1";

function App() {
  const [change, setChange] = useState(false);
  function handleChange(e) {
    setChange(e);
  }
  return (
    <div className="App">
      {change ? (
        <MenuBar func={handleChange} />
      ) : (
        <Window1 func={handleChange} />
      )}
    </div>
  );
}

export default App;
