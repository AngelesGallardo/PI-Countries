import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivities, filterByContinents, getActivities, getAllCountries, orderByName, orderByPopulation } from '../../redux/actions/index.js';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import Paginated from '../Paginated/Paginated.jsx'
import SearchBar from '../SearchBar/SearchBar';

function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries)
    const allActivities = useSelector(state => state.activities)

    const [order, setOrder] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(9)
    const indexLastCountry = currentPage * countriesPerPage // 9
    const indexFirstCountry = indexLastCountry - countriesPerPage //0
    const currentCountry = allCountries.slice(indexFirstCountry, indexLastCountry)
    
    const paginated = (currentPage) => {
      currentPage === 1? setCountriesPerPage(9) : setCountriesPerPage(10)
      setCurrentPage(currentPage)    
    }
      

    useEffect(()=>{
      dispatch(getAllCountries())
   },[dispatch])

   useEffect(()=>{
      dispatch(getActivities())
   },[dispatch])


   const onHandleClick = (e) =>{
      e.preventDefault();
      dispatch(getAllCountries())
   }

   const handleFilterByContinents = (e) => {
      e.preventDefault();
      dispatch(filterByContinents(e.target.value));
      setCurrentPage(1)
      setCountriesPerPage(9)
   }

   const handleFilterByActivities = (e) => {
      e.preventDefault();
      dispatch(filterByActivities(e.target.value));
      setCurrentPage(1)
      setCountriesPerPage(9)
   }

   const handleOrderByName = (e) => {
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setCountriesPerPage(9);
      setOrder(e.target.value)
   }

   const handleOrderByPopulation = (e) => {
      e.preventDefault();
      dispatch(orderByPopulation(e.target.value));
      setCurrentPage(1);
      setCountriesPerPage(9);
      setOrder(e.target.value)
   }
  
  return (
      <div>
         <h1>COUNTRIES APP</h1>

         <SearchBar/>

         <Link to='/activities'><button>Activity Create</button></Link>
         
         <div>  
            <fieldset>                 
            <legend>Filters</legend>        
            <select onChange = {handleFilterByContinents}>
               <option hidden selected>By Continents</option>
               <option value= 'North America'>North America</option>
               <option value= 'South America'>South America</option>
               <option value= 'Antarctica'>Antarctica</option>
               <option value= 'Europe'>Europe</option>
               <option value= 'Asia'>Asia</option>
               <option value= 'Africa'>Africa</option>
               <option value= 'Oceania'>Oceania</option>
            </select>            
            <select onChange = {handleFilterByActivities}> 
            <option hidden selected>By Activities</option> 
            <option value='all'>All</option>             
               {allActivities && allActivities.map((c) => {
                     return <option key={c.id} value={c.name}>{c.name}</option>
                })}
            </select>
            <button onClick={onHandleClick}>Clear Filters</button>
            </fieldset>

            <fieldset>
               <legend>Sorts</legend>
            <select onChange={handleOrderByName}>
               <option hidden selected>Alphabetically</option>
               <option value= 'a-z'>A-Z</option>
               <option value= 'z-a'>Z-A</option>
            </select>            
            <select onChange={handleOrderByPopulation}>
               <option hidden selected>By Population</option>
               <option value= 'asc'>Ascending</option> 
               <option value= 'desc'>Descending</option>
            </select>
            <button onClick={onHandleClick}>Clear Sorts</button>
            </fieldset>
         </div>


         {currentCountry?.map(c =>{
            return(                             
                  <Card
                  key={c.id}
                  id= {c.id}
                  image={c.image}
                  name={c.name}
                  continents={c.continents}
                  population={c.population}
                  />                
            )})}

         <Paginated
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginated={paginated}
            setCurrentPage={setCurrentPage}
         />
      </div>
    )
   }


export default Home;