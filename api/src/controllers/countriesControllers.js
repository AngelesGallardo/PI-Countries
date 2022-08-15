 const axios = require('axios');
const { Country } = require('../db.js');


const getAllCountries = async () => {
    try {
        const apiInfo = (await axios('https://restcountries.com/v3/all')).data.map(c => ({
            id: c.cca3,
            name: c.name.common,
            image: c.flags[1],
            continents: c.continents?.toString(),
            capital: c.capital?.toString(),
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }))
        const paisesDb = await apiInfo.filter(c => 
            c.id != null 
            && c.name != null 
            && c.image != null 
            && c.continents != null
            && c.capital != null )

        await Country.bulkCreate(paisesDb)
        console.log('paises creados', apiInfo)

    } catch (error) {
        console.log(error)
    }
}

const listCountries = async (req, res, next) => {
    try {
        const countriesFromDb = await Country.findAll()
        res.json(countriesFromDb)
        
    } catch (error) {
        next(error)
    }
}



 module.exports= {
     getAllCountries,
     listCountries,
 }
    
