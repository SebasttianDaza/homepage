import "./nav.css";

function Nav () {
    return (
      <nav className="navegation">
        <div className="title">
          <h1>Edie</h1>
        </div>

        <ul className="linksNavegation">
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

        <div className="icon">
            <i className="fas fa-bars"></i>
        </div>
      </nav>
    );
}


export default Nav;