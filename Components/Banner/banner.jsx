import "./banner.css";


function Banner () {
    return (
      <main className="principal">
        <section className="first">
          <h5>Unhappy with your website?</h5>
          <h2>We create beautiful and fast web services</h2>
        </section>
        <section className="second">
          <img src="../../assets/heroImage.jpg" alt=""></img>
        </section>
        <section className="third">
          <h3>Story, emotion and purpose</h3>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <form id='form'>
            <label for="Email">Want us to contact you?</label>
            <div>
                <input type="email" name="email" id="Email" placeholder="Email"></input>
                <button type="submit">Send</button>
            </div>
          </form>
        </section>
      </main>
    );
}



export default Banner;