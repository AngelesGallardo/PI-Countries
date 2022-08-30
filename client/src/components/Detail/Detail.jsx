import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById, cleanCountry } from "../../redux/actions";
import { Link, useParams} from "react-router-dom";
import d from './Detail.module.css';


const CountryDetail= (props) => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail); 
    
    const {id} = useParams()  ;

    useEffect(()=>{
        dispatch(getDetailById(id))
        return () => dispatch(cleanCountry())        
    }, [dispatch, id])

    return (
        <div className={d.container}>
            <Link to='/home'><button className={d.btnGoBack}>{'<'} Go Back</button></Link>
            <div className={d.area}>
            {detail.length? 
            <div>
                <div>
                    <img className={d.image} src={detail[0].image} alt={`Flag of ${detail[0].name}`}/>                
                    <h1 className={d.country}>{detail[0].name}</h1>
                </div>
                <div>
                    <h3 className={d.dit}>ID: {detail[0].id}</h3>
                    <h4 className={d.dit}>Continent: {detail[0].continents}</h4>
                    <h4 className={d.dit}>Subregion: {detail[0].subregion}</h4>
                    <h4 className={d.dit}>Capital: {detail[0].capital}</h4>
                    <h4 className={d.dit}>Area: {detail[0].area} Km2</h4>
                    <h4 className={d.dit}>Population: {detail[0].population}</h4>            

             
                    <h4 className={d.dit}>Activities: {detail[0].activities.length>0? detail[0].activities.map(a=>(
                        <ul className={d.punto} key={a.id}>
                            <li key={a.name}>{a.name.toUpperCase()}</li>
                            <li key={a.difficulty}>Difficulty Level: {a.difficulty}</li>
                            <li>Duration: {a.duration} minutes</li>
                            <li>Season: {a.season}</li>
                        </ul>)
                            
                    ) : <h5>No related activities</h5>}</h4>
                </div>
            </div>: <p>...Loading</p>}
            </div>
        </div>
    )
}

export default CountryDetail;