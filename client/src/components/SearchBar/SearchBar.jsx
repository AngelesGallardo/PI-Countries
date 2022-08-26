import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesByName } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const SearchBar = () => {

    const countries = useSelector(state => state.allCountries)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')

    const onHandleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)        
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(countries.find(c =>c.name === name)) dispatch(getCountriesByName(name))
        else history.push('/notfound')
    }

    return (
        <div>
            <input type= 'search' name='search' placeholder= "search countries by name" onChange= {onHandleChange}/>
            <button type= 'submit' onClick= {onHandleSubmit}>Search</button>
        </div>
    )
}


export default SearchBar;



