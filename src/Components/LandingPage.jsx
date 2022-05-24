import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <ul>
            <li><Link to="/Parallax-Alice">Parallax Effect (Alice in Wonderland)</Link></li>
            <li><Link to="/Parallax-Rocket">Parallax Effect (Rocket)</Link></li>
        </ul>
    </div>
  )
}

export default LandingPage