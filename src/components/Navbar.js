import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <>
        <ul>
            <li><Link className="active" to="/">Welcome</Link></li>
            <li><Link className="active" to="/home">Home</Link></li>
            
        </ul>
        </>
  )
}

export default Navbar