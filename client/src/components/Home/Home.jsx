import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index.js';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import Paginated from '../Paginated/Paginated.jsx'

function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexLastCountry = currentPage * countriesPerPage //10
    const indexFirstCountry = indexLastCountry - countriesPerPage //0
    const currentCountry = allCountries.slice(indexFirstCountry, indexLastCountry)
    const paginated = number => setCurrentPage(number)

    useEffect(()=>{
      dispatch(getAllCountries())
   },[dispatch])

   const onHandleClick = (e) =>{
      e.preventDefault();
      dispatch(getAllCountries())
   }


  
  return (
      <div>
         <h1>COUNTRIES APP</h1>
         <Link to=''>
            <button>Create Activity</button>
         </Link>
         <button onClick={e=>onHandleClick(e)}>All Countries</button>
         <div>            
            <select>
               <option value= 'North America'>North America</option>
               <option value= 'South America'>South America</option>
               <option value= 'Antarctica'>Antarctica</option>
               <option value= 'Europe'>Europe</option>
               <option value= 'Asia'>Asia</option>
               <option value= 'Africa'>Africa</option>
               <option value= 'Oceania'>Oceania</option>
            </select>
            <select>
               <option>Orden Actividad Creada</option>
            </select>
            <select>
               <option value= 'ascAlf'>Ascendente Alfa</option>
               <option value= 'descAlf'>DescendenteAlfa</option>
            </select>
            <select>
               <option value= 'ascPob'>Ascendente Pob</option> 
               <option value= 'descPob'>Descendente Pob</option>
            </select>
         </div>
         
         {currentCountry?.map(c =>{
            return(
               <Link to={`/home/${c.id}`}>             
                  <Card
                  key={c.id}
                  image={c.image}
                  name={c.name}
                  continents={c.continents}
                  />
               </Link>  
          )})}

         <Paginated
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginated={paginated}
         />

      </div>
    )
   }


export default Home;