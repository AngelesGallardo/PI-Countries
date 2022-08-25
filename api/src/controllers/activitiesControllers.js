const axios = require('axios');
const sequelize = require('sequelize');
const { Activity, Country } = require('../db.js');
const Op = sequelize.Op;


const newActivity = async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body

        const [activityDb, created] = await Activity.findOrCreate({where:{name},defaults:{difficulty, duration, season}})

        for (let c of countries) {
            const relCountries = await Country.findOne({ where: {name: {[Op.iLike]: c}} })
            activityDb.addCountry(relCountries)
        }
       

        created? 
        res.send({msg: 'La actividad fue creada con exito'}) 
        : res.send({msg: 'La actividad ya existia y fue relacionada al pais indicado'})
            
        
    } catch (error) {
        next(error)
    }
}


const getAllActivities = async (req, res, next) =>{
       
    try { 
        let activities = await Activity.findAll() 
        activities.length? res.json(activities) : res.json([])       

    } catch (error) {
        next(error)
    }
}

module.exports = {
    newActivity,
    getAllActivities
}

