
//importing files
//browser router to enable routing to different page
//importing navbar from the component
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar  from "./components/navbar";
import Greet from "./components/home";
import About from "./components/about";
import Footer from './components/footer';
import Cart from './components/cart';
import Payment from './components/payment';
import Products from './components/products';
import Signup from './components/signup';

function App() {
  return(
    
    <Router>
      
        <Navbar/>
        <Routes>
          <Route path="/" exact element = {<Greet/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/payment" element = {<Payment/>}/>
          <Route path="/shoes" element = {<Products/>}/>
          <Route path="/signup" element = {<Signup/>}/>
        </Routes>
        
          
          <Footer/>
    </Router>
      
      //  <Greet/>

 
  )
  
}


export default App;
