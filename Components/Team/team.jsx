import "./team.css";


function Team () {
    return (
      <section className="Team">
        <div className="teamChild">
          <h4>Meet the team</h4>
          <h3>We are chilled and a laidback team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="teamChild2">
          <div>
            <img src="../../assets/person3.png" alt="Image of Team"></img>
          </div>
          <aside>
            <img src="../../assets/person1.png" alt="Image of Team"></img>
            <img src="../../assets/person2.png" alt="Image of Team"></img>
          </aside>
        </div>
      </section>
    );
}

export default Team