import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/landingPageNav.css';
import logo from '../assets/rick.png'

const LandingPageNav = () => {
  return (
    <div className='nav' >
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <span className='subheading'>Battle of the Ricks</span>
      </div>
      <div className='nav-links'>
        <Link> About</Link>
        <Link>Features</Link>
        <Link>Rules</Link>        
      </div>
      <div className='nav-links'>
        <Link className='secondary-button'> Login</Link>
        <Link className='primary-button'> Register</Link>
      </div>

    </div>
  )
}

export default LandingPageNav
