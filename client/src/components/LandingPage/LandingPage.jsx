import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'


function LandingPage() {
  return (
    
    <div className= {s.container}>
        <h1 className= {s.letterC}>Welcome to Countries Page</h1>
        <Link to='/home'>
            <button className={s.buttStart}>Start</button>
        </Link>
    </div> 
    
  )
}

export default LandingPage;