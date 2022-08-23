import React from "react";

                                     
function AllPaginated ({ currentPage,allCountries, paginated, setCurrentPage }){
   
    const pageNumbers= []
    const maxPages = Math.ceil(allCountries/10)

    for (let i = 1; i <= maxPages ; i++) {
        pageNumbers.push(i)        
    }

    return(
        <div>
            <ul>
            {/* <button onClick = {() => paginated(currentPage === 1? currentPage : currentPage - 1)}>{'<'}</button> */}

                {pageNumbers?.map(currentPage=>(                
                    <button key={currentPage} onClick= {()=>paginated(currentPage)}>{currentPage}</button>
                    ))}

                {/* <button key={currentPage}onClick={() => paginated(currentPage === maxPages? currentPage : currentPage + 1)}>{'>'}</button> */}
            </ul>
        </div>)



    



}

export default AllPaginated;