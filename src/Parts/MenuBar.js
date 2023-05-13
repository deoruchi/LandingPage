import Logo from "../images/logo.svg";
import Close from "../images/icon-close.svg";
import "./PartsCSS/HeroBanner.css";
export default function MenuBar(props) {
  const handleMenu = () => {
    props.func(false);
  };
  return (
    <div className="menu_back">
      <div className="heading-menu-page">
        <img src={Logo} className="logo-mob"></img>

        <button className="Menu2" onClick={handleMenu}>
          <img src={Close}></img>
        </button>
      </div>

      <div>
        <ul className="item-container">
          <a href="" className="font-own">
            <li className="all-in-one-heading" style={{ fontSize: "1.25rem" }}>
              About
            </li>
          </a>

          <a href="" className="font-own">
            <li className="all-in-one-heading" style={{ fontSize: "1.25rem" }}>
              careers
            </li>
          </a>

          <a href="" className="font-own">
            <li className="all-in-one-heading" style={{ fontSize: "1.25rem" }}>
              Events
            </li>
          </a>

          <a href="" className="font-own">
            <li className="all-in-one-heading" style={{ fontSize: "1.25rem" }}>
              Products
            </li>
          </a>

          <a href="" className="font-own">
            <li className="all-in-one-heading " style={{ fontSize: "1.25rem" }}>
              Support
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
