 const { Router } = require('express');
const { listCountries } = require('../controllers/countriesControllers.js');

 //Importar todos los routers;
 // Ejemplo: const authRouter = require('./auth.js');

 const router = Router();

 // Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', listCountries)

 module.exports = router