import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   
      <nav class="navbar navbar-light navcss" >
        <div clss="navbar">
      <ul class="navbar-nav ">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Users <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
      </nav>
      
    </>
  )
}

export default Navbar
