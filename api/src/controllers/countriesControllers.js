const axios = require('axios');
const { Country, Activity } = require('../db.js');


const getAllCountries = async () => {
    try {
        const countriesDB = await Country.findAll()
        if(!countriesDB.length) {
        const apiInfo = (await axios('https://restcountries.com/v3/all')).data.map(c => ({
            id: c.cca3,
            name: c.name.common.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            image: c.flags[1],
            continents: c.continents.toString(),
            capital: c.capital? c.capital.toString() : 'dato desconocido',
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }))
        
        await Country.bulkCreate(apiInfo)
        console.log('paises guardados en DB')
    }
    } catch (error) {
        console.log(error)
    }
}



const agregaActivity = async () => {

    return await Country.findAll({
        include:{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through:{
                attributes:[],
            }
        }
    })
}



const getCountries = async (req, res, next) => {

    const { name } = req.query
    const { id } = req.params

    try {        
        const countryMasActividad = await agregaActivity()

        if(name) {
            const countryName = countryMasActividad.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            
            countryName.length? res.json(countryName) : res.status(404).send({ msg: 'El nombre ingresado no corresponde a ningun pais'})

        }else if(id) {
            const idEncontrado = countryMasActividad.filter(c => c.id.toUpperCase() === id.toUpperCase())

            idEncontrado.length? res.json(idEncontrado) : res.status(404).send({ msg: 'El id ingresado no corresponde a ningun pais'}) 
        
        }else {            
            const countryRutaPcipal = (await Country.findAll()).map(c => {return { name: c.name, image: c.image, continents: c.continents, population: c.population}})
            res.json(countryRutaPcipal)
        }

    } catch (error) {
        next(error)
    }
}




 module.exports= {
     getAllCountries,
     getCountries,
 }

