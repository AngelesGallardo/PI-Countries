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

/*paginado NEXT/PREVIUS  

export default function Pagination({ page, setPage, totalPages }) {
  const [input, setInput] = useState(1);

  const previous = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(input) - 1);
  };

  const next = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(input) + 1);
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
      if (
        Number(e.target.value < 1) ||
        parseInt(e.target.value) > totalPages ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(page);
      }
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <button className={s.pagination} onClick={previous} disabled={page <= 1}>
        Prev
      </button>
      <input
        onChange={handleChange}
        onKeyDown={enter}
        name="page"
        value={input}
        maxLength={2}
        autoComplete="off"
        className={s.input}
      />
      <span className={s.span}> de {totalPages}</span>
      <button
        className={s.pagination}
        onClick={next}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}
*/