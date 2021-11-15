const { Person } = require('../models');

module.exports.findPerson = async(req, res, next) => {
  try {
    const {params: {personId}} = req;

    const personInstance = await Person.findByPk(personId);

    if(!personInstance){
      throw new Error('404. Person NOT FOUND')
    }

    req.userInstance = userInstance;
    
    next();
  } catch (error) {
    next(error);
  }
}