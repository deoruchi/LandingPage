import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Insta from "../images/icon-instagram.svg";
import "./PartsCSS/Footer.css";
export default function Footer() {
  return (
    <section className="landing-footer">
      <div className="aside1">
        <h2>loopstudios</h2>
        <br></br>
        <ul className="links-footer">
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Careers</li>
          </a>
          <a href="">
            <li>Events</li>
          </a>
          <a href="">
            <li>Products</li>
          </a>
          <a href="">
            <li>Support</li>
          </a>
        </ul>
      </div>

      <div className="aside2">
        <div className="social-icons">
          <img src={Facebook}></img>
          <img src={Twitter}></img>
          <img src={Pinterest}></img>
          <img src={Insta}></img>
        </div>
        <br></br>
        <p id="light"> © 2021 Loopstudios. All rights reserved.</p>
      </div>
    </section>
  );
}
