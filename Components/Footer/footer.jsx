import "./footer.css";
import Links from "../Links/links";
import Form from "../Form/form";

function Footer () {
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
                  src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/HomePage%2Finstagram.svg?alt=media&token=01217b4d-6868-403b-98cd-f7626b07ce26"
                  alt="Image of instagram"
                ></img>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/HomePage%2Flinkedin.svg?alt=media&token=337744f4-d8e3-4b3f-a503-41bbc57c9c5e"
                  alt="Image of Linkedin"
                ></img>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/HomePage%2Ftwitter.svg?alt=media&token=11b56e3b-11d5-4ecc-96a0-714cdf64e170"
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
