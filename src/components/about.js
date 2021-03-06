import React from "react";

import '../App.css';
import "../styles.css"
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
        <div className="about-image">
         
         <div className="image">
            <img src="images/can7.jpg" alt="pic" />
         </div>
            
          

          <div className="about-text">
            <h4>Shop is fun</h4>
            <h1>Browse Our Premium Product</h1>
            <p>
              Us which over of signs divide dominion deep fill bring they're
              meat beho upon own earth without morning over third. Their male
              dry. They are great appear whose land fly grass.
            </p>
          </div>
          </div>
        </div>
      

      <div className="story">
        <div className="ptext">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <img src="images/news.png" alt="pic" />
      </div>

      <Child show={details} />
    </div>
  );
}


//using props for the child
function Child(props) {
    
    const[bgcolor, setbgcolor] = useState('white')
    const[more, setmore] = useState('')

    const color = () =>{
        setbgcolor ('#ffe8cc')
        setmore("This is an example of usestate, added a text to the page. enjoy???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ") 
    }

    return(
        <div className="story" style={{backgroundColor: bgcolor, color: "black", fontWeight: "bold"}}>

            <div className="ptext">
                
            <h1>{props.show.title}</h1>
            <p>{props.show.texts}</p>
            <p>This whole section is prop and use state</p>
            <span>{more}</span>
           <br></br>
            <button onClick={color}>{props.show.textb}</button>
                </div>
            
            {/* <img src="images/can.jpg" alt="pic"/> */}
        </div>
    )
}

export default About
