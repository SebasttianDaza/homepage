import "./card.css"

function Card() {
    return (
      <header className="Card">
        <section className="CardTitle">
          <h3>We offer high demand services </h3>
        </section>
        <section className="CardChild">
          {/* Priemr Child */}
          <div className="Child">
            <div className="Icon">
              <i class="bi bi-brush-fill"></i>
            </div>
            <div className="Information">
              <h4>UI/UX Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get Started</button>
            </div>
          </div>
          {/* Second Child */}
          <div className="Child">
            <div className="Icon">
              <i class="bi bi-code"></i>
            </div>
            <div className="Information">
              <h4>Front End</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get Started</button>
            </div>
          </div>
          {/* Third Child */}
          <div className="Child">
            <div className="Icon">
              <i class="bi bi-inboxes"></i>
            </div>
            <div className="Information">
              <h4>Back End</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </section>
      </header>
    );

}

export default Card