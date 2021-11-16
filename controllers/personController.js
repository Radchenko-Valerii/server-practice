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

module.exports.updatePerson = async (req, res, next) => {
  try{
    const {body, params:{id}} = req;
    
    const [updatedRows, [updatedPerson]] = await Person.update(body, {
      where: {id},
      returning: true
    })

    res.send(updatedPerson)

  } catch (error) {
    next(error)
  }
}

module.exports.deletePerson = async (req, res, next) => {
  try{
    const {params : {id}} = req; 
    
    const foundPerson = await Person.findByPk(id);
    
    foundPerson.destroy();

    res.send(foundPerson)
    
  } catch (error){
    next(error)
  }
}