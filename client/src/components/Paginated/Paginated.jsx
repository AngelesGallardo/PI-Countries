import React from "react";
import p from './Paginated.module.css'

                                     
function AllPaginated ({ allCountries, paginated, handlePrevPage, handleNextPage }){
   
    const pageNumbers= []
    const maxPages = Math.ceil(allCountries/10)

    for (let i = 1; i <= maxPages ; i++) {
        pageNumbers.push(i)        
    }

    return(

        <div className={p.pageContainer}>
            <div className={p.subContainer}> 
             
                <button className={p.btnPage} onClick={(e)=>handlePrevPage(e)}>{'<'}</button>
                
                <button className={p.btnPage} onClick={(e)=>handleNextPage(e)}>{'>'}</button>           

                <ul>
                    {pageNumbers?.map(currentPage=>(                
                    <button className={p.btnPage} key={currentPage} onClick= {()=>paginated(currentPage)}>{currentPage}</button>
                    ))}
                </ul>

                
            
            </div>
        </div>
        ) 
    }

export default AllPaginated;

