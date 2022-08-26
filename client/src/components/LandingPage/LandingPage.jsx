import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    
    <div>
        <h1>Welcome to Countries Page</h1>
        <Link to='/home'>
            <button>Start</button>
        </Link>
    </div> 
    
  )
}

export default LandingPage;