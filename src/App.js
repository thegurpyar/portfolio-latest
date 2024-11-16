import React from "react";

import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
import PortFolio from "./Components/PortFolio/PortFolio"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Particle from "./Components/Particles/Particle";
const App = ()=>{
  return (
    
    <div>

      
      <Home/>
      <NavigationBar/>
      <About/>
      <PortFolio/>
      <Contact/>
      <Footer/>
      <Particle/>
    </div>

  )
}

export default App;
