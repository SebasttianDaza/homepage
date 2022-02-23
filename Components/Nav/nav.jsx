import "./nav.css";
import Links from "../Links/links.jsx";

function Nav () {
    return (
      <nav className="navegation">
        <div className="title">
          <h1>Edie</h1>
        </div>

        <Links id="nav" className="linksNavegation"></Links>

        <button
          onClick={() => {
            document.getElementById("btn").classList.toggle("is-active");
            document.getElementById("nav").classList.toggle("is-actives");
          }}
          id="btn"
          className="hamburger hamburger--arrow icon"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    );
}

export default Nav;