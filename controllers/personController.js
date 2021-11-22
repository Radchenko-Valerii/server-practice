const { Person, SuperPower } = require("../models");
const createHttpError = require('http-errors');

module.exports.getPersons = async (req, res, next) => {
  try {
    const personsWithPower = await Person.findAll({
      where:{},
      include: [
        {
          model: SuperPower,
          attributes: ['id', 'power'],
          as: 'superPowers'
        }
      ]
    })

    res.status(201).send({data: personsWithPower});
  } catch (error) {
    next(error);
  }
};

module.exports.createPerson = async (req, res, next) => {
  try {
    const { body } = req;

    const newPerson = await Person.create(body);

    if (body.superPowers.length) {
      const personPowers = body.superPowers.map(power => ({
        power,
        personId: newPerson.id,
      }));
      await SuperPower.bulkCreate(personPowers, { returning: true });
    }

    const personWithPower = await Person.findAll({
      where:{
        id: newPerson.id
      },
      include: [
        {
          model: SuperPower,
          attributes: ['id', 'power'],
          as: 'superPowers'
        }
      ]
    })

    res.status(201).send({data: personWithPower});
  } catch (error) {
    next(error);
  }
};

module.exports.updatePerson = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const [updatedRows, [updatedPerson]] = await Person.update(body, {
      where: { id },
      returning: true,
    });

    if(body.superPowers){
      const personPowers = body.superPowers.map(power => ({
        power,
        personId: newPerson.id,
      }));
      await SuperPower.bulkCreate(personPowers, { returning: true });
    }

    if (updatedRows === 0) {
      return next(createHttpError(404));
    }

    const personWithUpdate = await Person.findAll({
      where:{
        id: updatedPerson.id
      },
      include: [
        {
          model: SuperPower,
          attributes: ['id', 'power'],
          as: 'superPowers'
        }
      ]
    })

    res.send({data: personWithUpdate});
  } catch (error) {
    next(error);
  }
};

module.exports.deletePerson = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundPerson = await Person.destroy({where: {id}});
  
    if(foundPerson === 0){
      return next(createHttpError(404))
    }

    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
