//Importaciones Comunes

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Importaciones components
import Nav from '../Components/Nav/nav.jsx'
import Banner from '../Components/Banner/banner.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Nav></Nav>
    <Banner></Banner>
  </React.StrictMode>,
  document.getElementById('root')
)
