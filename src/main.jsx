//Importaciones Comunes

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Importaciones components
import Nav from '../Components/Nav/nav.jsx'
import Banner from '../Components/Banner/banner.jsx'
import Card from '../Components/Card/card.jsx'
import Imagine from '../Components/Imagine/imagine.jsx'
import Team from '../Components/Team/team.jsx'
import Coments from "../Components/Coments/coments.jsx";
import Footer from "../Components/Footer/footer.jsx";

//Import Image
import heroImage from "./images/heroImage.jpg";
import smarthome from "./images/smarthome.jpg";
import onboard from "./images/onboard.png";
import booking from "./images/booking.png";
import juice from "./images/juice-product.png";
import person1 from "./images/person1.png";
import person2 from "./images/person2.png";
import person3 from "./images/person3.png";
import person4 from "./images/person4.png";
import Instagram from "./images/instagram.svg";
import Linkedin from "./images/linkedin.svg";
import Twitter from "./images/twitter.svg";

ReactDOM.render(
  <React.StrictMode>
    <div id='bodySecond'>
      <Nav></Nav>
      <Banner image={heroImage}></Banner>
      <Card></Card>
      <Imagine image={smarthome} image1={onboard} image2={booking} image3={juice}></Imagine>
      <Team image={person1} image2={person2} image3={person3}></Team>
      <Coments image={person4}></Coments>
    </div>
    <Footer instagram={Instagram} twitter={Twitter} linkedin={Linkedin}></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);
