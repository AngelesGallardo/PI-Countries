import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
  return (
    
    <div>
        <h1>Welcome to Countrie's Page</h1>
        <Link to='/home'>
            <button>Ingresar</button>
        </Link>
    </div> 
    
  )
}

export default LandingPage;