const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diet = require('./diet')
const recipe = require('./recipe')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/types', diet)
router.use('/api/recipe',recipe)

module.exports = router;
