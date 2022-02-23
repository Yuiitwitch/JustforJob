const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const ClientesRouter = require('./views/ClientesRouter');
const ContratarRouter = require('./views/ContratarRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/movies',auth, MovieRouter); //add auth
router.use('/categories',auth, CategoryRouter);

module.exports = router;