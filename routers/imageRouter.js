const imageRouter = require('express').Router({ mergeParams: true });
const imageController = require('../controllers/powerController');


imageRouter.get('/', imageController.getImages);

imageRouter.post('/', imageController.createImages);

imageRouter.delete('/:imageId', imageController.deleteImages);

imageRouter.get('/:imageId', imageController.getImageById)


module.exports = imageRouter;