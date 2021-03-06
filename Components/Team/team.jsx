import "./team.css";


function Team (props) {
    return (
      <section className="Team">
        <div className="teamChild">
          <h4>Meet the team</h4>
          <h3>We are chilled and a laidback team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="teamChild2">
          <div>
            <img src={props.image3} alt="Image of Team"></img>
          </div>
          <aside>
            <img src={props.image} alt="Image of Team"></img>
            <img src={props.image2} alt="Image of Team"></img>
          </aside>
        </div>
      </section>
    );
}

export default Team