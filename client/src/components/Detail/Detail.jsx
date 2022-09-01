import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById, cleanCountry } from "../../redux/actions";
import { Link, useParams} from "react-router-dom";
import d from './Detail.module.css';
import Loader from "../Loader/Loader";


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
                {detail.length? 
            <div>
                <div className={d.area}>
                
                    <div>
                        <img className={d.image} src={detail[0].image} alt={`Flag of ${detail[0].name}`}/>                
                        <h1 className={d.country}>{detail[0].name}</h1>
                    </div>

                    <div>
                        <h4 className={d.dit}>ID: {detail[0].id}</h4>
                        <h4 className={d.dit}>Continent: {detail[0].continents}</h4>
                        <h4 className={d.dit}>Subregion: {detail[0].subregion}</h4>
                        <h4 className={d.dit}>Capital: {detail[0].capital}</h4>
                        <h4 className={d.dit}>Area: <span className={d.numbers}>{detail[0].area}  </span> Km2</h4>
                        <h4 className={d.dit}>Population: <span className={d.numbers}>{detail[0].population}</span></h4>            
                    </div>                
                </div>
                   
                <div className={d.act}>
                    <h4 >Activities: {detail[0].activities.length>0? detail[0].activities.map(a=>(
                        <ul className={d.punto} key={a.id}>
                            <li className={d.actTitle} key={a.name}>{a.name}</li>
                            <li className={d.actItem} key={a.difficulty}>Difficulty Level:<span className={d.numbers}> {a.difficulty} </span></li>
                            <li className={d.actItem}>Duration:<span className={d.numbers}> {a.duration}</span>minutes</li>
                            <li className={d.actItem}>Season: {a.season}</li>
                        </ul>)
                            
                    ) : <p className={d.actNo}>No related activities</p>}</h4>
                </div>

            </div>
            : <Loader/>}
        </div>       
    )
}

export default CountryDetail;