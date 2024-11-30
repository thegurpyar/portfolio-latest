import React from "react";

import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
import PortFolio from "./Components/PortFolio/PortFolio"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = ()=>{
  return (
    
    <div>

      
      <Home/>
      <NavigationBar/>
      <About/>
      <PortFolio/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App;
