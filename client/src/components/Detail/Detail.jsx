import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById } from "../../redux/actions";
import { useParams } from "react-router-dom";

const CountryDetail= () => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);    
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getDetailById(id))
    }, [])


    return (
        
    )
}

export default CountryDetail;