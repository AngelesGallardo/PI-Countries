import React from "react";
import { Link } from "react-router-dom";
import nf from './PageNotFound.module.css'

const PageNotFound = ()=> {

    return (
        <div className={nf.container}>
            <h1 className={nf.letterA}>Page Not Found</h1>
            
            <h3 className={nf.letterB}>{'<<'} OOPS! You got lost?.. Go back to the main page {'>>'}</h3>
            <Link to='/home'><button className={nf.btnGoBack}>{'<'} Go back</button></Link> 
                       
        </div>

    )
}

export default PageNotFound;