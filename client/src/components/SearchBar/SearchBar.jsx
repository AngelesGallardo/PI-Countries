import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountriesByName } from "../../redux/actions";
import s from './SearchBar.module.css'
const SearchBar = () => {

    
    const dispatch = useDispatch()
    
    const [name, setName] = useState('')

    const onHandleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)        
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(name))        
    }

    return (

        <div className={s.group}>
            <input className={s.input} type= 'search' name='search' placeholder= "Search countries by name" onChange= {onHandleChange}/>
            
            <button className={s.btn} type= 'submit' onClick= {onHandleSubmit}>Search</button>
        </div>
    )
}


export default SearchBar;



