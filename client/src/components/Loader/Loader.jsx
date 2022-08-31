import React from 'react';
import l from './Loader.module.css';


function Loader() {
  return (
    <div className={l.spinner}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Loader;

