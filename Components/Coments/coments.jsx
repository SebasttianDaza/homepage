import "./coments.css";


function Coments (props) {
    return (
      <section className="Experience">
        <div className="experienceChild">
          <p>
            <cite>
              “Fast and outstanding resutls. Edie understands their customer’s
              needs. They have a young and talented team.”
            </cite>
          </p>
        </div>
        <div className="experienceChild1">
          <div className="childImage">
            <img
              src={props.image}
              alt="Image of person"
            ></img>
          </div>
          <div className="childImage2">
            <h5>Carlos Tran</h5>
            <p>The Decorate Gatsby</p>
          </div>
        </div>
      </section>
    );
}

export default Coments;