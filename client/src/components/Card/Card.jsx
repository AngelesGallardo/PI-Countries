import React from "react";
import { Link } from 'react-router-dom';

const CountryCard = ({image, id, name, continents, population}) =>{

    return (
        <div>
            <Link to={`/detail/${id}`}><img src={image} alt={`Flag of ${name}`} width='250px' height='200px'/>
            <h2>{name}</h2></Link>
            <h4>{continents}</h4>
            <h4>Population: {population}</h4>
        </div>
    )

}

export default CountryCard;