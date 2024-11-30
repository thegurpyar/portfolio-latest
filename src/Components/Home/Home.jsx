import React, { useState } from "react";
import "./home.css"
import Particle from "../Particles/Particle"

import {Link} from "react-scroll"
const Home = ()=>{
    const [work,changeWork]=useState("View My Skills →")

    return (
        
        <div id="home">
       <Particle />
        <div className="home" >
        
            <h1>Hello,I’m <span style={{fontWeight:"800",color:"#F900BF"}}>Gurpyar Singh.</span>
            <p style={{fontWeight:"600",fontSize:"80%"}}>I’m a full-stack web developer</p>
            </h1>

            <button type="button" className="btn btn-outline-light" 
            style={{marginTop:"150px"}}
            onMouseEnter={()=>changeWork("View My Skills ↓")}
            onMouseLeave={()=>changeWork("View My Skills →")}>
                <Link to="portfolio" >{work}</Link>
                </button>
        </div>
        
        </div>
        
    )
}

export default Home;