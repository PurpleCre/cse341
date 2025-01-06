const routes = require("express").Router();
const routeController = require("../controllers/routes")
 
routes.get('/', routeController.panasheRoute);
routes.get('/marjorie', routeController.marjorieRoute);
routes.get('/primrose', routeController.primroseRoute);
routes.get('/gamu', routeController.gamuRoute);

routes.use('/contacts', require('./contacts'))

module.exports = routes;