import React from 'react'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Home/About';
import Service from './components/Home/Service';
import Pricing from './components/Home/Pricing';
import Contact from './components/Home/Contact';
import Footer from './components/partials/Footer';
import MyNavbar from './components/partials/MyNavbar';
import LeftNavbar from './components/partials/LeftNavbar';
export default function App() {
  return (
    <React.Fragment>
      <MyNavbar/>
      <LeftNavbar/>
      <Home/>
      <About/>
      <Service/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  )
}

