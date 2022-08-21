import React from "react";


function AllPaginated ({countriesPerPage, allCountries, paginated}){
    const pageNumbers= []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage) ; i++) {
        pageNumbers.push(i)        
    }

    return(
        <nav>
            <ul>
                {pageNumbers?.map(number=>(
                    <li>
                        <a onClick= {()=>paginated(number)}>{number}</a>
                    </li>
                    )
                )}
            </ul>
        </nav>



    )



}

export default AllPaginated;