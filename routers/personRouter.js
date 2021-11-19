const personRouter = require('express').Router();
const PersonController = require('../controllers/personController')
const { findPerson } = require('../middlewares/personMW');

personRouter.get('/', PersonController.getPersons);

personRouter.post('/', PersonController.createPerson);

personRouter.patch('/:id', PersonController.updatePerson);

personRouter.delete('/:id', PersonController.deletePerson);


module.exports = personRouter;

