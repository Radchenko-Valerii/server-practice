const { Person } = require('../models');

module.exports.getPersons = async (req, res, next) => {
  try {
    const persons = await Person.findAll();
    
    res.send(persons);
  } catch (error) {
    next(error)
  }
}

module.exports.createPerson = async (req, res, next) => {
  try {
    const {body} = req;
    
    const newPerson = await Person.create(body);

    res.send(newPerson);
  } catch (error) {
    next(error);
  }
}