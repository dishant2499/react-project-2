import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const PrivateComponent = () => {
  const add=localStorage.getItem("user");
  return (
      add ?<Outlet/>:<Navigate to="/signup" />
  )
}

export default PrivateComponent 