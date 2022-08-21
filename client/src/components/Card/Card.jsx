import React from "react";

const CountryCard = ({image, name, continents}) =>{

    return (
        <div>
            <img src={image} alt={`Bandera de ${name}`} width='250px' height='200px'/>
            <h3>{name}</h3>
            <h4>{continents}</h4>
        </div>
    )

}

export default CountryCard;