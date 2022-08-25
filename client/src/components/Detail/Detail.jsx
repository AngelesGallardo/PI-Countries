import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById, cleanCountry } from "../../redux/actions";
import { Link, useParams} from "react-router-dom";

const CountryDetail= (props) => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail); 
    
    const {id} = useParams()  ;

    useEffect(()=>{
        dispatch(getDetailById(id))
        return () => dispatch(cleanCountry())        
    }, [dispatch])

    return (
        <div>
            <Link to= '/home'><button>Go Back</button></Link>

            {console.log('detaleeeeeeeeeee', detail)   }
            {detail.length? 
            <div>
                <img src={detail[0].image} alt={`Flag of ${detail[0].name}`}/>
                <h1>{detail[0].name}</h1>
                <h2>ID: {detail[0].id}</h2>
                <h3>Capital: {detail[0].capital}</h3>
                <h3>Continent: {detail[0].continents}</h3>
                <h3>Subregion: {detail[0].subregion}</h3>
                <h3>Area: {detail[0].area} Km2</h3>
                <h3>Population: {detail[0].population}</h3>
                <h3>Activities: {detail[0].activities.length>0? detail[0].activities.map(a=>(
                    <ul key={a.id}>
                        <li>{a.name.toUpperCase()}</li>
                        <li>Difficulty: {a.difficulty}, Duration: {a.duration} minutes, Season: {a.season}.</li>
                    </ul>)
                        
                ) : <></>}</h3>

            </div>: <p>...Loading</p>}
            
        </div>
    )
}

export default CountryDetail;