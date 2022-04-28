import React from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  const add=localStorage.getItem("user");
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Add-Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Edit</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Api">Api</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/time">Time</NavLink>
        </li>
        
          {add ? <li className="nav-item"><NavLink className="nav-link" onClick={logout} to="/signup" >logout</NavLink></li>:
          <>
          <li className="nav-item"><NavLink className="nav-link" to="/signup">signup</NavLink></li>  
          <li className="nav-item"><NavLink className="nav-link" to="/login">login</NavLink></li></>
          }
        
       
      
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar