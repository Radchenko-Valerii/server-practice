const superPowerRouter = require('express').Router({ mergeParams: true });
const PowerController = require('../controllers/powerController');


superPowerRouter.get('/', PowerController.getPersonPowers);

superPowerRouter.post('/', PowerController.createPersonPowers);

superPowerRouter.delete('/:powerId', PowerController.deletePersonPowers);


module.exports = superPowerRouter;