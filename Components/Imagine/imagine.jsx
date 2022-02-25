import "./imagine.css"


function Imagine (props) {
    return (
      <aside className="Aside">
        <section className="asideChild1">
          <h4>Good design means good business</h4>
        </section>
        <section className="asideChild">
          <div className="sectionChild mar">
            <img src={props.image} alt="Image the service"></img>
            <p>Full stack application</p>
            <h5>Smart home dashboard</h5>
          </div>
          <div className="sectionChild">
            <img src={props.image1} alt="Image the service"></img>
            <p>UX/UI design</p>
            <h5>Onboard application</h5>
          </div>
          <div className="sectionChild mar">
            <img src={props.image2} alt="Image the service"></img>
            <p>Mobile application</p>
            <h5>Booking system</h5>
          </div>
          <div className="sectionChild ">
            <img
              src={props.image3}
              alt="Image the service"
            ></img>
            <p>Front End applicati on</p>
            <h5>Juice product homepage</h5>
            <div className="btn">
              <button>See More</button>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </section>
      </aside>
    );
}

export default Imagine