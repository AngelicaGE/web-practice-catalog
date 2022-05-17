import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <ul>
            <li><Link to="/Parallax">Parallax Effect</Link></li>
        </ul>
    </div>
  )
}

export default LandingPage