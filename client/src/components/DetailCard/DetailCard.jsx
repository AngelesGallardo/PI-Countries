
const DetailCard = ({ image, name, continents, id, capital, subregion, area, population, activities }) => {

    return (
         <> 
            <button to='/home'>{'< Back'}</button>      
            <img src={image} alt={`Flag of ${name}`}/>        
            <div>
                <h2>Name: {name}</h2>                            
                <h2>ID: {id}</h2>                
                <h1>Capital: {capital}</h1>
                <h1>Continent:{continents}</h1>
                <h1>Subregion:{subregion}</h1>
                <h1>Area:{area} Km2</h1>
                <h1>Population:{population}</h1>
                <h1>Activities: {activities}</h1>            
                    
                   
                    
                    
                    
                    
            </div>
        </>

    )
} 

export default DetailCard;