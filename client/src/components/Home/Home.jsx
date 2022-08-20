import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index.js';

function Home() {

    // const dispatch = useDispatch();
    // const allCountries = useSelector(state => state.countries)

    // useEffect(()=>{
    //   dispatch(getAllCountries());
    // },[])




  return (
    <div>
        <h1>COUNTRIES</h1>
        
    
    </div>
  )
}

export default Home;