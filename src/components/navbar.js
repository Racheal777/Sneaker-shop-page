import React from "react";
import '../App.css';

//importing link from the react router dom library
import {Link} from "react-router-dom"
// import Greet from "./home";

//functional component
function Navbar() {
    return (
      <div className="Nav">
        <div className="Logo">

        <li><Link to='/'>MaameEsi</Link></li>
        </div>


        <ul>
          

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/'>Service</Link></li>
            <li><Link to='/'>Portfolio</Link></li>
            
          
        </ul>
      </div>
    );
    
}

{/* <Greet/> */}

export default  Navbar;