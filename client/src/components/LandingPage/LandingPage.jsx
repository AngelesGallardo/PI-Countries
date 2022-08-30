import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'


function LandingPage() {
  return (
    
    <div className={s.container}>
      <div className={s.title}>
          <div className={s.welcome}>Welcome</div>
          <div className={s.to}>to</div>
          <div className={s.countries}>Countries</div>
          <div className={s.app}>App</div>
      </div>
      <div className={s.buttonContainer}>
        <Link to='/home' className={s.link}>
          <button className={s.button}>START</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;