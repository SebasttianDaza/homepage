import "./banner.css";
import Form from "../Form/form";

function Banner () {
    return (
      <main className="principal">
        <section className="first">
          <h5>Unhappy with your website?</h5>
          <h2>We create beautiful and fast web services</h2>
        </section>
        <section className="second">
          <img src={"../../assets/heroImage.jpg"} alt=""></img>
        </section>
        <section className="third">
          <h3>Story, emotion and purpose</h3>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <Form></Form>
        </section>
      </main>
    );
}



export default Banner;