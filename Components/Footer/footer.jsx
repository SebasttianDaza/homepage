import "./footer.css";
import Links from "../Links/links";

function Footer () {
    return (
      <footer className="footer">
        <section className="content">
          <div className="navFooter">
            <Links id="link" className="links"></Links>
          </div>
          <div className='navFooter1'>
            <h4>Edie</h4>
            <div>
              <img src="../../assets/instagram.svg" alt="Image of Team"></img>
              <img src="../../assets/linkedin.svg" alt="Image of Team"></img>
              <img src="../../assets/twitter.svg" alt="Image of Team"></img>
            </div>
          </div>
          <div>Hola</div>
        </section>
        <p>created by Sebasttian Daza - devChallenges.io</p>
      </footer>
    );
}

export default Footer;
