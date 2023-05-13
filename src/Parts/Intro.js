import "./PartsCSS/Intro.css";
import { Width } from "./Window1";
import Image1 from "../images/mobile/image-interactive.jpg";
import Image2 from "../images/desktop/image-interactive.jpg";
import { useEffect, useState } from "react";
export default function Intro() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <article className="weird-card">
      <div>
        {screenSize.dynamicWidth >= 780 ? (
          <img src={Image2} className="desktop-img"></img>
        ) : (
          <img src={Image1} className="mobile-img"></img>
        )}
      </div>
      <div className="white-card">
        <p className="all-in-one-heading"> The leader in interactive VR</p>
        <br></br>
        <p id="content">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
}
