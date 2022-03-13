import React, { useState } from "react";
import Navbar  from "../components/navbar";
import '../App.css';

//class component
{/* <Navbar/> */}

class Greet extends React.Component{
    constructor(props){
        super(props)

        //setting a state
        this.state = {
            val: "Our Amazing"
        }
    }

        //changing the state
        changeValue = () =>{
            this.setState(
                {
                    val: "Maame Esi Sneakers "
                }
            );
        }

        

     //rendering the function
    //adding an event to the button to change the state
    render(){
        return (
          <div>
            <div className="Bg-image">
              <div className="text">
                <p className="faint">50% OFF </p>
                <h1>Sneakers at cost</h1>
                <p>Hello, welcome to  {this.state.val} Shop</p>
                <button type="button" onClick={this.changeValue}>
                  Click Here
                </button>
              </div>
            </div>

              <div className="home-text">
                <h1>Popular Product</h1>
                <p>
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>

              <div className="list">
                  <ul >
                        <li><a href="#">Nike</a></li>
                        <li><a href="#">Addidas</a></li>
                        <li><a href="#">Balianciaga</a></li>
                        <li><a href="#">Oasics</a></li>
                        {/* <li><a href="#"></a></li> */}
                        
                  </ul>
                  
              </div>
              <hr></hr> 
              
            

            <div className="Card">
              <div className="Card-item">
                <img src="images/pic3.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/pic4.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/pic6.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/pic5.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>
            </div>

            <Promo/>
            <TopPick/>
          </div>
        );
    }   
    }

    function Promo() {
        const[text, settext] = useState()

        const Alert = () => {
            settext('Yieeeeyyyyyy 🥳 🥳 🥳 Great decision to buy from us')
        }
        return (
          <div className="main">
            <h1>Promotion</h1>

            <div className="Promo-main">
              <div className="Promo-card">
                  <div className="card-text">
                  <h3>DISCOUNT</h3>
                    <p>Giving 60% off to students</p>

                    <br></br>
                    <h3>{text}</h3>
                    <button onClick={Alert}>Order Now</button>
                  </div>
                
              </div>

              <div className="image-tag">
                <img src="images/pic3.jpg" />
              </div>
            </div>
          </div>
        );
    }
    
    function TopPick() {

        //usestate
        const[bgColor, setbgColor] = useState()

        const Change = () => {
            setbgColor('#DBD7D2')
        }
        return(
            <div className="Picks" style={{backgroundColor: bgColor,}}>
                <div className="home-text">
                    <h1>Top Pick</h1>
                    <p>Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>

                <div className="Card">
              <div className="Card-item">
                <img src="images/img.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/can.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/img5.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>

              <div className="Card-item">
                <img src="images/new.jpg" />
                <h3>Jordan </h3>
                <p>250Ghc</p>
                <button>Add to Cart</button>
              </div>
            </div>

            <button className="btn" onClick={Change}>DISCOVER MORE</button>
            </div>
        )
        
    }



export default Greet