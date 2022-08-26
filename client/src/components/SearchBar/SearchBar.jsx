import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountriesByName } from "../../redux/actions";

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
        <div>
            <input type= 'search' name='search' placeholder= "Search in countries.." onChange= {onHandleChange}/>
            <button type= 'submit' onClick= {onHandleSubmit}>Search</button>
        </div>
    )
}


export default SearchBar;



