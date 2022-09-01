import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivities, filterByContinents, getActivities, getAllCountries, orderByName, orderByPopulation } from '../../redux/actions/index.js';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import Paginated from '../Paginated/Paginated.jsx'
import SearchBar from '../SearchBar/SearchBar';
import h from './Home.module.css';
import Loader from '../Loader/Loader.jsx';

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
    const handlePrevPage=(e)=>{
      e.preventDefault()
      if(currentPage === 2){
         setCurrentPage(currentPage-1)
         setCountriesPerPage(9)
      }else if(currentPage > 2) {
         setCurrentPage(currentPage-1)
         setCountriesPerPage(10)
      }      
   }

   const handleNextPage=(e)=>{
         e.preventDefault()
         if(currentPage < Math.ceil(allCountries.length/10)){
            setCurrentPage(currentPage+1)
            setCountriesPerPage(10)            
         }
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
   
      <div className={h.container}>
         <div className={h.cover}>

         <SearchBar/>

         <div className={h.btns}>
            
         <Link to='/activities'><button className={h.btn}>Create Activity</button></Link>
         <button className={h.btn} onClick={onHandleClick}>All Countries</button>

         </div>
         
         
         <div className={h.filtSort}> 
          
            <fieldset className={h.filt}>                 
            <legend>Filters</legend>        
            
            <select className={h.sel} onChange = {handleFilterByContinents}>
               <option hidden >By Continents</option>
               <option className={h.opc} value= 'North America'>North America</option>
               <option className={h.opc} value= 'South America'>South America</option>
               <option className={h.opc} value= 'Antarctica'>Antarctica</option>
               <option className={h.opc} value= 'Europe'>Europe</option>
               <option  className={h.opc}value= 'Asia'>Asia</option>
               <option className={h.opc} value= 'Africa'>Africa</option>
               <option className={h.opc} value= 'Oceania'>Oceania</option>
            </select>            
            
            <select className={h.sel} onChange = {handleFilterByActivities}> 
            <option hidden >By Activities</option> 
            <option className={h.opc} value='all'>All</option>             
               {allActivities && allActivities.map((c) => {
                     return <option  className={h.opc} key={c.id} value={c.name}>{c.name}</option>
                })}
            </select>
            </fieldset>

            <fieldset className={h.filt}>
               <legend>Sorts</legend>
            <select className={h.sel} onChange={handleOrderByName}>
               <option hidden >Alphabetically</option>
               <option className={h.opc} value= 'a-z'>A-Z</option>
               <option className={h.opc} value= 'z-a'>Z-A</option>
            </select>            
            
            <select className={h.sel} onChange={handleOrderByPopulation}>
               <option hidden >By Population</option>
               <option className={h.opc} value= 'asc'>Ascending</option> 
               <option className={h.opc} value= 'desc'>Descending</option>
            </select>
           
            </fieldset>
         </div>

         <div className={h.cards}>
         {currentCountry? currentCountry.map(c =>{
            return(                             
                  <Card
                  key={c.id}
                  id= {c.id}
                  image={c.image}
                  name={c.name}
                  continents={c.continents}
                  population={c.population}
                  />                
            )}) : <Loader/>}
         </div>
         
         
         <div className={h.page}>
         <Paginated
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginated={paginated}
            setCurrentPage={setCurrentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
         />
         </div>
         </div>
      </div>
    )
   }


export default Home;
