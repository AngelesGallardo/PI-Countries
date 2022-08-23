const axios = require('axios');
const sequelize = require('sequelize');
const { Activity, Country } = require('../db.js');
const Op = sequelize.Op;


const newActivity = async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, country } = req.body

        const [activityDb, created] = await Activity.findOrCreate({where:{name},defaults:{difficulty, duration, season}})

        for (let c of country) {
            const relCountry = await Country.findOne({ where: {name: {[Op.iLike]: c}} })
            activityDb.addCountry(relCountry)
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
        activities.length? res.json(activities) : res.status(404).json({msg: 'No existen actividades aun'})       

    } catch (error) {
        next(error)
    }
}

module.exports = {
    newActivity,
    getAllActivities
}

