const axios = require('axios');
const sequelize = require('sequelize');
const { Activity, Country } = require('../db.js');
const Op = sequelize.Op;


const newActivity = async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, country } = req.body

        const [activityDb, created] = await Activity.findOrCreate({where:{name},defaults:{difficulty, duration, season}})

        const relCountry = await Country.findAll({ where: {name: {[Op.iLike]:`%${country}%`}} })
        
        activityDb.addCountry(relCountry)

        created? 
        res.send({msg: 'La actividad fue creada con exito'}) 
        : res.send({msg: 'La actividad ya existia y fue relacionada al pais indicado'})
    
        
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    newActivity
}

