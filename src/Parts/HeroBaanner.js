import { useRef, useState, useSyncExternalStore } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-hamburger.svg";
import "./PartsCSS/HeroBanner.css";
import MenuBar2 from "./MenuBar2";
export default function HeroBaanner(props) {
  console.log(props.changes);
  const [visible, setVisible] = useState(false);
  function handleMenu() {
    setVisible(true);
    props.changes(visible);
  }
  return (
    <article className="banner-style">
      <div className="heading-menus-logo">
        <img src={Logo} className="logo-mob"></img>

        <div>
          {props.windowsize > 780 ? (
            <MenuBar2 />
          ) : (
            <button className="Menu" onClick={handleMenu}>
              <img src={Menu}></img>
            </button>
          )}
        </div>
      </div>
      {/** her put some flex or grid for positioning the components */}
      <div>{/* puut the elemrnts her perform flex her */}</div>
      <div className="banner-word">
        <p className="banner-letters">Immersive experiences that deliver</p>
      </div>
    </article>
  );
}
