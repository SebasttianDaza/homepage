import "./footer.css";
import Links from "../Links/links";
import Form from "../Form/form";

function Footer (props) {
    return (
      <footer className="footer">
        <section className="content">
          <div className="navFooter">
            <Links id="link" className="links"></Links>
          </div>
          <div className="navFooter1">
            <section>
              <h4>Edie</h4>
              <div id='contentImage'>
                <img
                  src={props.instagram}
                  alt="Image of instagram"
                ></img>
                <img
                  src={props.twitter}
                  alt="Image of Linkedin"
                ></img>
                <img
                  src={props.linkedin}
                  alt="Image Twitter"
                ></img>
              </div>
            </section>
          </div>
          <div className="navFooter3">
            <Form></Form>
          </div>
        </section>
        <p>created by Sebasttian Daza - devChallenges.io</p>
      </footer>
    );
}

export default Footer;
