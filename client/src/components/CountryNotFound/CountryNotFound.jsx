import React from "react";
import { Link } from "react-router-dom";

const CountryNotFound = ()=> {

    return (
        <div>
            <h1>Country Not Found</h1>
            <h3>{'<<'} Oops! No matches with the search.. Go back to the main page {'>>'}</h3><Link to='/home'><button>Go back</button></Link>            
        </div>

    )
}

export default CountryNotFound;