import "./App.css";
import React from "react";
import Navbar from "./container/Navbar"
import Contact from "./container/Contact"
import About from "./container/About"

import Home from "./container/Home"
import { Routes,Route } from "react-router";
import Footer from "./container/Footer";
import Signup from "./container/Signup";
import PrivateComponent from "./container/Privatecomponent";
import Login from "./container/Login";
import Time from "./container/Time";
import Api from "./container/Api";







export default function App() {


  return (
    
      <>
      
       
      <Navbar />
      <Routes>
      <Route  element={<PrivateComponent/>} > 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={ <About/>} />
      <Route path="/contact/:id" element={<Contact/>} />
      <Route path="/time" element={ <Time/>} />
      <Route path="/Api" element={ <Api/>} />
      <Route path="/logout" element={<h1>logout</h1>} />
      </Route>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
     
     
      
      </Routes>
      <Footer/>
      
      
        
      </>
    
  )
}
