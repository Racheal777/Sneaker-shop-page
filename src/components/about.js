import React from "react";

import '../App.css';
import { useState } from 'react';


//functional component
function About() {


    const details = {
        title : "JOURNEY STARTS FROM HERE",
        texts : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",

        textb : "Read More"
    }
  return (


    <div>
        <div className="bg-name">
            {/* <h1>About Us</h1> */}
        </div>


        <div className="story">
            <div className="ptext">

            <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore 
             magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo 
             consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                </div>
        
              <img src="images/img5.jpg" alt="pic"/>
        </div>
       
        <Child show = {details}/>
        

       
    </div>
  )
}


//using props for the child
function Child(props) {
    
    const[bgcolor, setbgcolor] = useState('white')
    const[more, setmore] = useState('')

    const color = () =>{
        setbgcolor ('#ffe8cc')
        setmore("This is an example of usestate, added a text to the page. enjoy😀 😃 😄 😁 😆 😅 😂 🤣 😛 😝 😜 🤪 ") 
    }

    return(
        <div className="story" style={{backgroundColor: bgcolor, color: "black", fontWeight: "bold"}}>

            <div className="ptext">
                
            <h1>{props.show.title}</h1>
            <p>{props.show.texts}</p>
            <span>{more}</span>
           <br></br>
            <button onClick={color}>{props.show.textb}</button>
                </div>
            
            {/* <img src="images/can.jpg" alt="pic"/> */}
        </div>
    )
}

export default About
