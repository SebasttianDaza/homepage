import "./nav.css";

function Nav () {
    return (
      <nav className="navegation">
        <div className="title">
          <h1>Edie</h1>
        </div>

        <ul id='nav' className="linksNavegation">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Our Works</a>
          </li>
          <li>
            <a href="">Clients</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button onClick={() => { document.getElementById('btn').classList.toggle('is-active');document.getElementById("nav").classList.toggle("is-actives");}}  id='btn' className="hamburger hamburger--arrow icon" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    );
}

export default Nav;