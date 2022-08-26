import React from "react";

                                     
function AllPaginated ({ allCountries, paginated }){
   
    const pageNumbers= []
    const maxPages = Math.ceil(allCountries/10)

    for (let i = 1; i <= maxPages ; i++) {
        pageNumbers.push(i)        
    }

    return(
        <div>
            <ul>
              {pageNumbers?.map(currentPage=>(                
              <button key={currentPage} onClick= {()=>paginated(currentPage)}>{currentPage}</button>
              ))}
            </ul>
        </div>)
}

export default AllPaginated;

