import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = ()=> {

    return (
        <div>
            <h1>Page Not Found</h1>
            <h3>{'<<'} Oops! You got lost?.. Go back to the main page {'>>'}</h3><Link to='/home'><button>Go back</button></Link>            
        </div>

    )
}

export default PageNotFound;