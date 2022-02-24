import "./imagine.css"


function Imagine () {
    return (
      <aside className="Aside">
        <section className="asideChild1">
          <h4>Good design means good business</h4>
        </section>
        <section className="asideChild">
          <div className="sectionChild">
            <img src="../../assets/smarthome.jpg" alt="Image the service"></img>
            <p>Full stack application</p>
            <h5>Smart home dashboard</h5>
          </div>
          <div className="sectionChild">
            <img src="../../assets/onboard.png" alt="Image the service"></img>
            <p>UX/UI design</p>
            <h5>Onboard application</h5>
          </div>
          <div className="sectionChild">
            <img src="../../assets/booking.png" alt="Image the service"></img>
            <p>Mobile application</p>
            <h5>Booking system</h5>
          </div>
          <div className="sectionChild">
            <img src="../../assets/juice-product.png" alt="Image the service"></img>
            <p>Front End applicati on</p>
            <h5>Juice product homepage</h5>
          </div>
        </section>
      </aside>
    );
}

export default Imagine