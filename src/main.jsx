//Importaciones Comunes

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Importaciones components
import Nav from '../Components/Nav/nav.jsx'
import Banner from '../Components/Banner/banner.jsx'
import Card from '../Components/Card/card.jsx'



import Team from '../Components/Team/team.jsx'
import Coments from "../Components/Coments/coments.jsx";
import Footer from "../Components/Footer/footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div id='bodySecond'>
      <Nav></Nav>
      <Banner></Banner>
      <Card></Card>

      <Team></Team>
      <Coments></Coments>
    </div>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);
