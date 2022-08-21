import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById } from "../../redux/actions";
import { useParams } from "react-router-dom";

const CountryDetail= (props) => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);    
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getDetailById(id))
    }, [])


    return (
        detail?
       ( <>       
            <img href={props.image} alt={`Bandera de ${props.name}`}/>        
            <div>
                    {props.image}
                    {props.name}
                    {props.continents}
                    {props.id}
                    {props.capital}
                    {props.subregion}
                    {props.area}
                    {props.population}
                    {props.activities}
            </div>
        </>):null
    )
}

export default CountryDetail;